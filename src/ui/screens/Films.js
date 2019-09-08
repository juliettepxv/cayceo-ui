import Film from "../components/Film";
import ScreenUi from "./ScreenUi";

export default class Films extends ScreenUi{
    constructor(){
        super();
        if(Films._inst){
            alert("Films est un sigleton!!!");
            return;
        }
        Films._inst=this;
        
        this.$main=$(require("./films.html"));
        this.$main.data("obj",this);
        /**
         * La liste des films
         * @type {Film[]}
         */
        this.list=[];
    }

    /**
     * Crée et ajoute un film à la liste et renvoie le Film créé
     * @return {Film}
     */
    addFilm(){
        let f=new Film();
        this.list.push(f);
        this.$main.find("#films").append(f.$main);
        return f;
    }
    /**
     *
     * @returns {CasqueList}
     */
    static inst(){
        return Films._inst;
    }
}