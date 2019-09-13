import ScreenUi from "./ScreenUi";
import Ui from "../Ui";

export default class Validation extends ScreenUi{
    constructor(){
        super();
        this.$main=$(require("./validation.html"));
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            ui.nav.displayHome(true,false);
            ui.nav.displayBack(true,"selectDuree");
            ui.nav.displayDashboard(true);
        });
    }

    /**
     * Associe les casques donnés à la séance
     * @param {Casque[]} casques
     */
    setCasques(casques){
        /**
         *
         * @type {Casque[]}
         */
        this.casques=casques;
        let str="";
        if(casques.length>1){
            str=`${casques.length} casques`;
        }else{
            str=`${casques.length} casque`;
        }
        this.$main.find("[casques]").text(str);
    }
    /**
     * Associe un film à la séance
     * @param {Film|null} film
     */
    setFilm(film){
        /**
         * Le film qui sera joué
         * @type {Film}
         */
        this.film=film;
        let $film=this.$main.find(".element-film");
        let $filmTitle=$film.find(".title");
        let $filmImg=$film.find("img");
        if(film){
            $filmTitle.text(film.title);
            $filmImg.attr("src",film.image);
        }else{
            $filmTitle.text("...");
            $filmImg.attr("src","");
        }

    }
    /**
     * Définit la durée de la scéance
     * @param {number} minutes
     */
    setDuree(minutes){
        /**
         * La durée (en minutes) de la scéance
         * @type {number}
         */
        this.duree=minutes;
        this.$main.find("[minutes]").text(minutes);
    }
}