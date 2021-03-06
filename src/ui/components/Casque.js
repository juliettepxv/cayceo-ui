import ObjectLogger from "../popin/ObjectLogger";

export default class Casque {
    /**
     *
     * @param {string} ip Adresse ip complète
     */
    constructor(ip){
        let me=this;
        this.$main=$(require("./casque.html"));
        this.$point=$(require("./casque-point.html"));

        /**
         * Adresse ip complète
         * @type {string}
         */
        this.ip=ip;
        /**
         * @type {string} numero Numéro affiché du casque
         */
        this.numero=ipToNumero(ip);

        /**
         *
         * @type {Film|null}
         */
        this.contenu=null;

        //html
        me.$main.css("order",me.numero);
        me.$point.css("order",me.numero);
        me.$main.find("[numero]").text(me.numero);
        me.$main.attr("casque",me.ip);



        //popin...
        let popinName=`Casque ${me.ip}`;

        /**
         * La popin où on affichera les infos du casque
         * @type {ObjectLogger}
         * @private
         */
        this._infoPopIn=new ObjectLogger(popinName);
        let $nav=this._infoPopIn.$main.find("nav");

        //ajoute des boutons
        let $removeBtn=$(`<button action='casque-remove' 
                                  ip='${this.ip}' 
                                  class='btn-tiny'>Remove</button>`);
        $nav.append($removeBtn);

        let $serviceBtn=$(`<button action='casque-start-service'
                                   ip='${this.ip}' 
                                   class='btn-tiny'>Service</button>`);
        $nav.append($serviceBtn);

        let $emptyBtn=$(`<button action='casque-delete-all-files' 
                                 ip='${this.ip}' 
                                 class='btn-tiny'>Delete files</button>`);
        $nav.append($emptyBtn);

        let $configBtn=$(`<button action='casque-configure-all' 
                                  ip='${this.ip}' 
                                  class='btn-tiny'>Config all</button>`);
        $nav.append($configBtn);


        let $rebootBtn=$(`<button action='casque-reboot' 
                                  ip='${this.ip}' 
                                  class='btn-tiny'>Reboot</button>`);
        $nav.append($rebootBtn);

        let $reveilBtn=$(`<button action='casque-wake-up' 
                                  ip='${this.ip}' 
                                  class='btn-tiny'>Wake up</button>`);
        $nav.append($reveilBtn);

        let $streamStartBtn=$(`<button action='${CMD.CASQUE_START_SCREEN_STREAM_SOCKET}' 
                                       ip='${this.ip}' 
                                       class='btn-tiny'>Screen SLOW</button>`);
        $nav.append($streamStartBtn);
        let $streamStartDastBtn=$(`<button action='${CMD.CASQUE_START_SCREEN_STREAM_REAL_TIME_SOCKET}' 
                                       ip='${this.ip}' 
                                       class='btn-tiny'>Screen FAST</button>`);
        $nav.append($streamStartDastBtn);

        let $streamStopBtn=$(`<button action='${CMD.CASQUE_STOP_SCREEN_STREAM_SOCKET}' 
                                      ip='${this.ip}' 
                                      class='btn-tiny'>Screen OFF</button>`);
        $nav.append($streamStopBtn);


        this.$main.find("[popin-info]").attr("data-show-popin",popinName);
        ui.popIns[popinName]=this._infoPopIn;


        let w=500;
        let $imgScreenStream=$(`<img  ip='${this.ip}'
                                      class="screen-stream" 
                                      style="position: absolute;
                                      top:110px;
                                      right: 35px;
                                      width: ${w}px;
                                      height: ${Math.round(9/16*w)}px;
                                      background-color: #888;
                                      object-fit: contain;
                                      "
                                      />`);
        this._infoPopIn.$main.append($imgScreenStream);

    }


    /**
     * Permet d'afficher dans la popin de détail du casque ses infos détaillées
     * @param {object|array|string} details Les infos à afficher
     */
    setDetails(details){
        this._infoPopIn.displayData(details);
    }
    /**
     * Affiche le niveau de chargement de la baterrie
     * @param {number} percent
     * @return {Casque}
     */
    setBattery(percent=50){
        percent=Math.floor(percent);
        percent=Math.min(100,percent);
        percent=Math.max(0,percent);
        if(isNaN(percent)){
            percent="???";
        }
        this.$main.find("[battery-level]").text(`${percent}%`);

        if(percent<=20){
            this.$main.attr("battery-low","1");
        }else{
            this.$main.attr("battery-low","0");
        }
        this._refresh();
        return this;
    }

    /**
     * Retourne true si la batterie est trop faible
     * @return {boolean}
     * @private
     */
    _isBatteryLow(){
        return this.$main.attr("battery-low")==="1";
    }

    /**
     * Affiche si la batterie est en charge ou non
     * @param {boolean} plugged true pour branché
     * @returns {Casque}
     */
    setBatteryPlugged(plugged=false){
        this.$main.attr("plugged",plugged?"1":"0");
        this.deviceColumn().plugged=plugged;
        this._refresh();
        return this;
    }
    setAdbError(error){
        this.$main.attr("adb-error",error?"1":"0");
    }

    /**
     * Affiche le texte en haut
     * @param text
     */
    setTitle(text){
       this.$main.find(".state>span").text(text);
    }

    /**
     *
     * @returns {boolean}
     */
    isPlugged(){
        return this.$main.is("[plugged='1']");
    }

    /**
     * Affiche le temps de lecture restant
     * @param {number} remainingSeconds
     */
    displayTime(remainingSeconds){
        let abs=Math.abs(remainingSeconds);
        let txt=new Date(abs * 1000).toISOString().substr(14, 5);
        if(remainingSeconds<0){
            txt="-"+txt;
        }
        this.$main.find(".timer").text(txt);
    }

    /**
     * Associe (ou désassocie) un contenu au casque
     * @param {Film|null} contenu
     * @return Casque
     */
    setContenu(contenu){

        //si ça a pas changé, on gagne du temps...
        if(!this.contenu && !contenu){
            return this;
        }
        if(this.contenu && contenu){
            if(this.contenu.filePath===contenu.filePath){
                return this;
            }
        }

        //donc c'est différent...
        this.contenu=contenu;
        let $film=this.$main.find(".preview-film");
        let $filmTitle=$film.find(".title");
        let $filmImg=this.$main.find("img.contenu");
        if(contenu){
            this.$main.attr("has-film","1");
            $filmTitle.text(contenu.title);
            $filmImg.attr("src",contenu.image);
        }else{
            this.$main.attr("has-film","0");
            $filmTitle.text("...");
            $filmImg.attr("src","");
        }
        this._refresh();
        return this;
    }

    /**
     * Affiche une copie d'écran de ce qui se passe dans le casque
     * @param {String|null} base64
     */
    setScreenStreamSocket(base64){
        let me=this;
        if(me._toScreenStreamSocket){
            clearInterval(me._toScreenStreamSocket);
        }
        me._toScreenStreamSocket=setTimeout(
            function(){
                me.setScreenStreamSocket(null);
            },1000*3
        );

        let $screenImg=this.$main.find("img.screen");
        let $inPopin=this._infoPopIn.$main.find(".screen-stream");
        if(base64){
            //image
            $screenImg.attr("src",base64);
            $inPopin.attr("src",base64);
            this.$main.attr("screen-stream","1");
        }else{
            //gif transparent
            //$screenImg.attr("src","data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");

            $inPopin.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==");
            $screenImg.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==");
            this.$main.attr("screen-stream","0");
        }
    }

    /**
     * Définit le contenu à afficher à partir de son filePath
     * @param filePath
     */
    setContenuPath(filePath){
        if(!filePath){
            this.setContenu(null);
        }else{
            let contenu=ui.films.getFilmByFilePath(filePath);
            if(contenu){
                this.setContenu(contenu);
            }else{
                console.error(`contenu introuvable ${filePath}`);
            }
        }
    }

    setLiveUi(html){
        if(this._liveUiHtml !== html){
            this._liveUiHtml=html;
            this.$main.find(".live-ui").html(html);
        }
    }

    /**
     * Définit le contenu live de la fenêtre de config
     * @param html
     */
    setLiveConfigUi(html){
        if(this._liveConfigUiHtml !== html){
            if(html){
                this.$main.find("[action='toggle-config']").addClass("active");
            }else{
                this.$main.find("[action='toggle-config']").removeClass("active");
            }
            this._liveConfigUiHtml=html;
            this.$main.find(".live-config-ui").html(html);
        }
    }
    /**
     * Définir si en cours de lecture ou pas
     * @param {boolean} isPlaying
     * @return Casque
     */
    setIsPlaying(isPlaying=true){
        this.$main.attr("is-playing",isPlaying?"1":"0");
        this._refresh();
        return this;
    }

    /**
     * en cours de lecture ou pas ?
     * @return {boolean}
     * @private
     */
    _isPlaying(){
        return this.$main.attr("is-playing")==="1";
    }


    /**
     * Définir si online ou pas
     * @param {boolean} isOnline
     * @return {Casque}
     */
    setOnline(isOnline=true){
        this.$main.attr("is-online",isOnline?"1":"0");
        this.deviceColumn().online=isOnline;
        if(!isOnline){
            this.setContenu(null);
        }
        this._refresh();
        return this;
    }
    /**
     * online ou pas ?
     * @return {boolean}
     * @private
     */
    _isOnline(){
        return this.$main.attr("is-online")==="1";
    }
    /**
     * Définir si les contenus sur le casque sont à jour
     * @param {boolean} isReady
     * @return {Casque}
     */
    setContenusReady(isReady=true){
        //console.warn("setContenusReady",isReady);
        if(isReady){
            this.$main.css("--state-copy",`'Synchronisation'`)
        }
        this.$main.attr("is-contenus-ready",isReady?"1":"0");
        this.deviceColumn().contenusReady=isReady
        this._refresh();
        return this;
    }

    /**
     * Féfinit un pourcentage de copie
     * @param percent
     * @returns {Casque}
     */
    setCopyProgress(percent){
        percent=Math.floor(percent);
        this.$main.css("--state-copy",`'Copie ${percent}%'`)
        this._refresh();
        return this;
    }

    /**
     * Renvoie la colonne du device dans la device table
     * @return {DeviceCol}
     */
    deviceColumn(){
        return ui.devicesTable.devicesById[this.ip];
    }
    /**
     * Définir si l'APK est à jour ou non'
     * @param {boolean} isOk
     * @return {Casque}
     */
    setApkIsOk(isOk=true){
        this.$main.attr("is-apk-ok",isOk?"1":"0");
        this.deviceColumn().apk=isOk;
        this._refresh();
        return this;
    }
    /**
     * Les fichiers sont à jour ou pas ?
     * @return {boolean}
     * @private
     */
    _isContenusReady(){
        return this.$main.attr("is-contenus-ready")==="1";
    }
    /**
     * L'APK est ok ou pas ?
     * @return {boolean}
     * @private
     */
    _isApkOk(){
        return this.$main.attr("is-apk-ok")==="1";
    }




    /**
     * Rafraichit les propriétés en fonction l'une de lautre
     * @private
     */
    _refresh(){
        this.$main.add(this.$point).attr("is-selectable",this.isSelectable()?"1":"0");
        ui.screens.selectCasques.refresh();
    }
    
    /**
     * Renvoie true si il est possible de selectionner ce casque
     * @return {boolean}
     */
    isSelectable(){
        let me=this;
        switch (true) {
            case !me._isOnline(): //pas online
            case me._isPlaying(): //en cours de lecture
            case me._isBatteryLow(): //batterie faible
            case me.contenu !== null: // a un contenu
            case !me._isApkOk(): // apk ok ou pas?
            case !me._isContenusReady(): // les contenus ne sont pas tous copiés
                return false;
            default:
                return true;
        }
    }





    /**
     * sélectionne ou désélectionne le casque
     */
    toggleSelected(){
        this.$main.attr("is-selected",this.isSelected()?"0":"1")
    }
    /**
     * désélectionne le casque
     */
    unSelect(){
        this.$main.attr("is-selected","0");
    }
    /**
     * Retourne true si le casque est sélectionné
     * @returns {boolean}
     */
    isSelected(){
        return this.$main.attr("is-selected")==="1";
    }





}


Casque.STATE_DISPONIBLE="STATE_DISPONIBLE";
Casque.STATE_EN_COURS="STATE_EN_COURS";
Casque.STATE_EN_ATTENTE="STATE_EN_ATTENTE";
Casque.STATE_HORS_LIGNE="STATE_HORS_LIGNE";
Casque.STATE_DECHARGE="STATE_DECHARGE";

