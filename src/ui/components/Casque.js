import ObjectLogger from "../popin/ObjectLogger";

export default class Casque {
    /**
     *
     * @param {string} numero Numéro affiché du casque
     */
    constructor(numero){
        this.$main=$(require("./casque.html"));
        /**
         *
         * @type {Film|null}
         */
        this.film=null;
        /**
         * @type {string} numero Numéro affiché du casque
         */
        this.numero=numero;
        //affiche le numero du casque
        this.$main.find("[numero]").text(numero);
        this.$main.attr("casque",numero);

        this._setState(Casque.STATE_HORS_LIGNE);
        //permet d'accéder à cet objet via le DOM
        this.$main.data("obj",this);

        //popin...
        let popinName=`Casque ${this.numero}`;
        /**
         * La popin où on affichera les infos du casque
         * @type {ObjectLogger}
         */
        this.infoPopIn=new ObjectLogger(popinName);
        this.$main.find("[popin-info]").attr("data-show-popin",popinName);
        ui.popIns[popinName]=this.infoPopIn;
    }

    /**
     * sélectionne ou désélectionne le casque
     */
    toggleCheck(){
        console.log("toggleCheck",this);
        this.$main.toggleClass("checked");
    }
    /**
     * désélectionne le casque
     */
    unCheck(){
        this.$main.removeClass("checked");
    }
    /**
     * Retourne true si le casque est sélectionné
     * @returns {boolean}
     */
    isChecked(){
        return this.$main.hasClass("checked");
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
    }

    /**
     * Affiche si la batterie est en charge ou non
     * @param {boolean} plugged true pour branché
     */
    setBatteryPlugged(plugged=false){
        this.$main.attr("plugged",plugged?"1":"0");
    }

    /**
     * Associe (ou désassocie) un film au casque
     * @param {Film|null} film
     * @return Casque
     */
    setFilm(film){
        this.film=film;
        let $film=this.$main.find(".preview-film");
        let $filmTitle=$film.find(".title");
        let $filmImg=$film.find("img");
        if(film){
            this.$main.attr("has-film","1");
            $filmTitle.text(film.title);
            $filmImg.attr("src",film.image);
        }else{
            this.$main.attr("has-film","0");
            $filmTitle.text("...");
            $filmImg.attr("src","");
        }
        return this;

    }




}


Casque.STATE_DISPONIBLE="STATE_DISPONIBLE";
Casque.STATE_EN_COURS="STATE_EN_COURS";
Casque.STATE_EN_ATTENTE="STATE_EN_ATTENTE";
Casque.STATE_HORS_LIGNE="STATE_HORS_LIGNE";
Casque.STATE_DECHARGE="STATE_DECHARGE";

