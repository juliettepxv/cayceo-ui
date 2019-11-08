import Film from "../components/Film";
import ScreenUi from "./ScreenUi";
import Ui from "../Ui";
import string from "less/lib/less/functions/string";

export default class Films extends ScreenUi{
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
     * @return {Film}
     */
    addFilm(filmId,title,imgUrl,filePath,minutes,text){
        let f=new Film(filmId,title,imgUrl,filePath,minutes,text);
        let existing=this.getFilmById(filmId);
        if(existing){
            console.warn(`Le film ${filePath} était déjà dans la liste`);
        }else{
            this.list.push(f);
            this.$main.find("#films").append(f.$main);
        }

        return f;
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

    /**
     * Supprime les films dont l'id n'est pas spécifié dans la liste
     * @param {string[]} toKeepIds La liste des ids qui doivent rester
     */
    /*
    cleanList(toKeepIds){
        let ids=this._ids();
        for(let i=0;i<ids.length;i++){
            if($.inArray(ids[i],toKeepIds) === -1){
                ui.log(`supression du film ${this.getFilmById(ids[i]).title}`);
                this.removeFilm(ids[i]);
            }
        }
    }
    */
}