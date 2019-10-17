import ObjectLogger from "../popin/ObjectLogger";

export default class Film {
    /**
     *
     * @param {string} filmId identifiant du film
     * @param {string} title titre du film
     * @param {string} imgUrl url de l'image du film
     * @param {string} filePath url du fichier
     */
    constructor(filmId,title,imgUrl,filePath){
        /**
         * @type {string} identifiant du film
         */
        this.filmId=filmId;
        /**
         *
         * @type {string} url du fichier
         */
        this.filePath=filePath;
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
        this._setImage(imgUrl)
            ._setTitle(title);

        //popin...
        let popinName=`Film ${this.filmId}`;
        /**
         * La popin où on affichera les infos du film
         * @type {ObjectLogger}
         * @private
         */
        this._infoPopIn=new ObjectLogger(popinName);
        this.$main.find("[popin-info]").attr("data-show-popin",popinName);
        ui.popIns[popinName]=this._infoPopIn;
    }

    /**
     * Permet d'afficher dans la popin de détail du film ses infos
     * @param {object|array|string} details Les infos à afficher
     */
    setDetails(details){
        this._infoPopIn.displayData(details);
        return this;
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
        this.$main.find(".tags").append($(`<div class='tag'>${tag}</div>`));
        return this;
    }
}