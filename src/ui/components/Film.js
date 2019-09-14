import ObjectLogger from "../popin/ObjectLogger";

export default class Film {
    /**
     *
     * @param {string} filmId identifiant du film
     * @param {string} title titre du film
     * @param {string} imgUrl url de l'image du film
     */
    constructor(filmId,title,imgUrl){
        /**
         * @type {string} identifiant du film
         */
        this.filmId=filmId;
        /**
         * @type {string} titre du film
         */
        this.title="";
        /**
         * @type {string} url de l'image du film
         */
        this.image="";

        //construit le html
        this.$main=$(require("./film.html"));
        this.$main.attr("film",filmId);


        //applique les propriétés
        this._setImage(imgUrl)._setTitle(title);

        //popin...
        let popinName=`Film ${this.filmId}`;
        /**
         * La popin où on affichera les infos du film
         * @type {ObjectLogger}
         */
        this.infoPopIn=new ObjectLogger(popinName);
        this.$main.find("[popin-info]").attr("data-show-popin",popinName);
        ui.popIns[popinName]=this.infoPopIn;
    }

    /**
     *
     * @param {string} title titre du film
     * @returns {Film}
     * @private
     */
    _setTitle(title){
        this.title=title;
        this.$main.find(".title").text(title);
        return this;
    }

    /**
     *
     * @param imgUrl
     * @returns {Film}
     * @private
     */
    _setImage(imgUrl){
        this.image=imgUrl;
        this.$main.find("img").attr("src",imgUrl);
        return this;
    }

    /**
     * Ajoute un tag
     * @param tag
     * @returns {Film}
     */
    addTag(tag){
        this.$main.find(".indications").append($(`<div class='indication'>${tag}</div>`));
        return this;
    }
}