import ObjectLogger from "../popin/ObjectLogger";

export default class Film {



    /**
     *
     * @param {string} filmId identifiant du film
     * @param {string} title titre du film
     * @param {string} imgUrl url de l'image du film
     * @param {string} filePath url du fichier
     * @param minutes
     * @param text
     */
    constructor(filmId,title,imgUrl,filePath,minutes,text){
        /**
         * Affiche ou pas le film
         * @type {boolean}
         */
        this._disabled=false;
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
         * @type {number} duréée en minutes du film
         */
        this.minutes = minutes;
        /**
         *
         * @type {string} texte à afficher dessous
         */
        this.text = text;
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
        this.setImage(imgUrl)
            .setTitle(title);

        if(minutes){
            minutes=minutes*1;
        }
        if(minutes && !isNaN(minutes) && minutes > 0){
            this.addTag(`${minutes}:00`);
        }
        if(text){
            this.addTag(text);
        }

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

        /**
         *
         * @type {String[]}
         */
        this.categories=[];
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
     * Définit si on affiche ou non ce contenu
     * @param value
     */
    set disabled(value) {
        this._disabled = value;
        if(this._disabled){
            this.$main.addClass("disabled")
        }else{
            this.$main.removeClass("disabled");
        }
    }

    /**
     *
     * @param {string} title titre du film
     * @returns {Film}
     */
    setTitle(title){
        this.title=title;
        this.$main.find(".title").text(title);
        return this;
    }

    /**
     *
     * @param imgUrl
     * @returns {Film}
     */
    setImage(imgUrl){
        if(imgUrl != this.image){
            this.image=imgUrl;
            this.$main.find("img").attr("src",imgUrl);
        }
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
    /**
     * Ajoute une Categorie
     * @param {string} category
     * @returns {Film}
     */
    addCategory(category){
        if(this.categories.indexOf(category) === -1){
            this.categories.push(category);
            ui.screens.filters.addCategory(category);
            this.addTag(category);
        }

        return this;
    }
}