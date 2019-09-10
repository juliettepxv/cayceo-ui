import Film from "../components/Film";
import ScreenUi from "./ScreenUi";

export default class Films extends ScreenUi{
    constructor(){
        super();
        this.$main=$(require("./films.html"));
        /**
         * La liste des films
         * @type {Film[]}
         */
        this.list=[];
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
     * Crée et ajoute un film à la liste et renvoie le Film créé.
     * Si le film avec cet id existe déjà ne fera rien, mais fera un console.warn et renverra l'occurence de l'ojet
     * @param {string} filmId identifiant du film
     * @param {string} title titre du film
     * @param {string} imgUrl url de l'image du film
     * @return {Film}
     */
    addFilm(filmId,title,imgUrl){
        let f=new Film(filmId,title,imgUrl);
        let existing=this.getFilmById(filmId);
        if(existing){
            console.warn(`Le film ayant pour id ${{filmId}} était déjà dans la liste`);
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
        console.warn(`Le film ayant pour id ${{filmId}} ne peut pas être supprimé, il n'est pas dans la liste`)
    }
}