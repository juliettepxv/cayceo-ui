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
        this.$main.find(".nb").text(numero);
        this.$main.attr("casque",numero);

        this._setState(Casque.STATE_HORS_LIGNE);
        //permet d'accéder à cet objet via le DOM
        this.$main.data("obj",this);
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
     * @param {number} percent Définit si la batterie est en charge ou non
     */
    setBattery(percent=50){
        percent=Math.floor(percent);
        this.$main.find("[battery-level]").text(`${percent}%`);
        if(percent<=5){
            this._setState(Casque.STATE_DECHARGE);
        }
    }

    /**
     * Affiche si la batterie est en charge ou non
     * @param {boolean} plugged true pour branché
     */
    setBatteryPlugged(plugged=false){
        this.$main.find("[battery-plugged]").attr("battery-plugged",plugged?"1":"0");
    }

    /**
     * Associe (ou désassocie) un film au casque
     * @param {Film|null} film
     */
    setFilm(film){
        this.film=film;
        let $contenu=this.$main.find(".contenu");
        let $film=$contenu.find(".preview-film");
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

    }




}


Casque.STATE_DISPONIBLE="STATE_DISPONIBLE";
Casque.STATE_EN_COURS="STATE_EN_COURS";
Casque.STATE_EN_ATTENTE="STATE_EN_ATTENTE";
Casque.STATE_HORS_LIGNE="STATE_HORS_LIGNE";
Casque.STATE_DECHARGE="STATE_DECHARGE";

