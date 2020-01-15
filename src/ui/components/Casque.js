import ObjectLogger from "../popin/ObjectLogger";

export default class Casque {
    /**
     *
     * @param {string} ip Adresse ip complète
     */
    constructor(ip){
        let me=this;
        this.$main=$(require("./casque.html"));

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
        me.$main.find("[numero]").text(me.numero);
        me.$main.find("[full-ip]").text(me.ip);
        me.$main.attr("casque",me.ip);

        //popin...
        let popinName=`Casque ${me.ip}`;
        /**
         * La popin où on affichera les infos du casque
         * @type {ObjectLogger}
         * @private
         */
        this._infoPopIn=new ObjectLogger(popinName);
        //ajoute des boutons
        let $removeBtn=$(`<button action='casque-remove' ip='${this.ip}' class='btn-tiny'>Remove</button>`);
        this._infoPopIn.$main.find("nav").append($removeBtn);

        let $apkBtn=$(`<button action='casque-install-apk' ip='${this.ip}' class='btn-tiny'>Install APK</button>`);
        this._infoPopIn.$main.find("nav").append($apkBtn);

        let $emptyBtn=$(`<button action='casque-delete-all-files' ip='${this.ip}' class='btn-tiny'>Delete files</button>`);
        this._infoPopIn.$main.find("nav").append($emptyBtn);

        let $rebootBtn=$(`<button action='casque-reboot' ip='${this.ip}' class='btn-tiny'>Reboot</button>`);
        this._infoPopIn.$main.find("nav").append($rebootBtn);

        let $reveilBtn=$(`<button action='casque-wake-up' ip='${this.ip}' class='btn-tiny'>Wake up</button>`);
        this._infoPopIn.$main.find("nav").append($reveilBtn);


        this.$main.find("[popin-info]").attr("data-show-popin",popinName);
        ui.popIns[popinName]=this._infoPopIn;
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

        if(percent<=5){
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
        this._refresh();
        return this;
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
        let d=new Date();
        d.setTime(0);
        d.setSeconds(remainingSeconds);
        this.$main.find(".timer").text(`${d.toLocaleTimeString("en-US", {hour12: false}).substr(3,5)}`)
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
        let $filmImg=$film.find("img");
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
        this.$main.attr("is-contenus-ready",isReady?"1":"0");
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
     * Définir si l'APK est à jour ou non'
     * @param {boolean} isOk
     * @return {Casque}
     */
    setApkIsOk(isOk=true){
        this.$main.attr("is-apk-ok",isOk?"1":"0");
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
        let me=this;
        let isSelectable=function(){
            switch (true) {
                case !me._isOnline(): //pas online
                    return false;
                case me._isPlaying(): //en cours de lecture
                    return false;
                case me._isBatteryLow(): //batterie faible
                    return false;
                case me.contenu && me._isPlaying: // a un contenu en cours de lecture
                    return false;
                case !me._isContenusReady(): // les contenus ne sont pas tous copiés
                    return false;
                case !me._isApkOk(): // apk ok ou pas?
                    return false;
                default:
                    return true;
            }
        };
        this.$main.attr("is-selectable",isSelectable()?"1":"0");
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

