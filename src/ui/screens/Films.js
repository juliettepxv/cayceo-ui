import Film from "../components/Film";
import ScreenUi from "./ScreenUi";
import Ui from "../Ui";

export default class Films extends ScreenUi{
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
        for(let f of this.list){
            if(value && f.categories.indexOf(value) === -1){
                f.$main.css("display","none");
            }else{
                f.$main.css("display","");
            }
        }

    }
    constructor(){
        super();

        this.$main=$(require("./films.html"));
        /**
         * La liste des films
         * @type {Film[]}
         */
        this.list=[];
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            ui.nav.displayHome(true,false);
            ui.nav.displayBack(true,"selectCasques");
            ui.nav.displayDashboard(true);
        });

        /**
         * La categorie à afficher
         * @type {string}
         */
        this._category="";
    }

    /**
     * Renvoie la liste des ids
     * @private
     * @returns {string[]}
     */
    _ids(){
        let ids=[];
        for(let i=0;i<this.list.length;i++) {
            let f = this.list[i];
            ids.push(f.filmId);
        }
        return ids;
    }

    /**
     * Renvoie un film par son id
     * @param {string} filmId identifiant du film à trouver
     * @returns {Film|null}
     */
    getFilmById(filmId){
        for(let i=0;i<this.list.length;i++) {
            let f = this.list[i];
            if(filmId===f.filmId){
                return  f;
            }
        }
        return null;
    }
    /**
     * Renvoie un film par son filePath
     * @param {string} filePath fichier du film à trouver
     * @returns {Film|null}
     */
    getFilmByFilePath(filePath){
        for(let i=0;i<this.list.length;i++) {
            let f = this.list[i];
            if(filePath===f.filePath){
                return  f;
            }
        }
        return null;
    }

    /**
     * Crée et ajoute un film à la liste et renvoie le Film créé.
     * Si le film avec cet id existe déjà ne fera rien,
     * mais fera un console.warn et renverra l'occurence de l'ojet
     * @param {string} filmId identifiant du film
     * @param {string} title titre du film
     * @param {string} imgUrl url de l'image du film
     * @param {string} filePath url du fichier
     * @param {number} minutes Nombre de minutes que ça dure
     * @param {string} text texte à afficher sous le film
     * @param {string} imgHttp url absolue
     * @return {Film} Le film rajouté
     */
    addFilm(filmId,title,imgUrl,filePath,minutes,text,imgHttp){
        let film=this.getFilmById(filmId);
        if(film){
            console.log(`Le film ${title} (${filePath}) était déjà dans l'ui `);
            film.setImage(imgUrl);
            film.setText(text);
            film.setTitle(title);
        }else{
            film=new Film(filmId,title,imgUrl,filePath,minutes,text,imgHttp);
            this.list.push(film);
            this.$main.find(".films-list").append(film.$main);
        }
        return film;
    }

    /**
     * Permet d'enlever un film de la liste
     * @param {string} filmId identifiant du film à supprimer de la liste
     */
    removeFilm(filmId){
        for(let i=0;i<this.list.length;i++){
            let f=this.list[i];
            if(f.filmId===filmId){
                this.list.splice(i,1);
                this.$main.find(`[film='${f.filmId}']`).remove();
                return;
            }
        }
        console.warn(`Le film ayant pour id ${filmId} ne peut pas être supprimé, il n'est pas dans la liste`)
    }
    
}