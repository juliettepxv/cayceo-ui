import ScreenUi from "./ScreenUi";
import Ui from "../Ui";

export default class Validation extends ScreenUi{
    constructor(){
        super();
        let me =this;
        this.$main=$(require("./validation.html"));
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            ui.nav.displayHome(true,false);
            ui.nav.displayBack(true,"selectDuree");
            ui.nav.displayDashboard(true);
            me.displayLoading(false);
        });
    }

    displayLoading(displayLoading){
        this.$main.attr("is-loading",displayLoading?"1":"0");
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
        let nums=[];
        let str="";
        for(let casque of casques){
            nums.push(casque.numero)
        }
        if(casques.length>1){
            str=`casques`;
            let last=nums.pop();
            str+=" "+nums.join(", ")+" et "+last;
        }else{
            str=`casque`;
            str+=" "+nums.join(",");
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