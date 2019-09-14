import ObjectLogger from "../popin/ObjectLogger";

export default class Casque {
    /**
     *
     * @param {string} numero Numéro affiché du casque
     */
    constructor(numero){
        this.$main=$(require("./casque.html"));
        /**
         * @type {string} numero Numéro affiché du casque
         */
        this.numero=numero;
        /**
         *
         * @type {Film|null}
         */
        this.contenu=null;

        //affiche le numero du casque
        this.$main.find("[numero]").text(numero);
        this.$main.attr("casque",numero);

        //popin...
        let popinName=`Casque ${this.numero}`;
        /**
         * La popin où on affichera les infos du casque
         * @type {ObjectLogger}
         * @private
         */
        this._infoPopIn=new ObjectLogger(popinName);
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
     * Définit l'état général du casque
     * @param {string} state disponible|en attente|en cours|hors ligne|déchargé
     * @zzzprivate
     */
    _setState(state){
        this.$main.attr("state",state);
    }
    /**
     * Affiche le niveau de chargement de la baterrie
     * @param {number} percent
     */
    setBattery(percent=50){
        percent=Math.floor(percent);
        percent=Math.min(100,percent);
        percent=Math.max(0,percent);

        this.$main.find("[battery-level]").text(`${percent}%`);
        if(percent<=5){
            this.$main.attr("battery-low","1");
        }else{
            this.$main.attr("battery-low","0");
        }
        this._refresh();
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
     */
    setBatteryPlugged(plugged=false){
        this.$main.attr("plugged",plugged?"1":"0");
    }

    /**
     * Affiche le temps de lecture restant
     * @param {number} remainingSeconds
     */
    displayTime(remainingSeconds){
        let d=new Date();
        d.setTime(0);
        d.setSeconds(remainingSeconds);
        this.$main.find(".timer").text(`-${d.toLocaleTimeString().substr(3,5)}`)
    }

    /**
     * Associe (ou désassocie) un contenu au casque
     * @param {Film|null} contenu
     * @return Casque
     */
    setContenu(contenu){
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
        this.setIsPlaying(false);
        this._refresh();
        return this;
    }

    /**
     * Définir si en cours de lecture ou pas
     * @param {boolean} isPlaying
     */
    setIsPlaying(isPlaying=true){
        this.$main.attr("is-playing",isPlaying?"1":"0");
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
     */
    setOnline(isOnline=true){
        this.$main.attr("is-online",isOnline?"1":"0");
        if(!isOnline){
            this.setContenu(null);
        }
        this._refresh();
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
     * Rafraichit les propriétés en fonction l'une de lautre
     * @private
     */
    _refresh(){
        let me=this;
        let isSelectable=function(){
            switch (true) {
                case !me._isOnline(): //pas online
                    return false;
                case me._isBatteryLow(): //batterie faible
                    return false;
                case me.contenu && me._isPlaying: // a un contenu en cours de lecture
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
        console.log("toggleSelected",this);
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

