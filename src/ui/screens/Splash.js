/**
 *
 */
import ScreenUi from "./ScreenUi";
import Ui from "../Ui";


export default class Splash extends ScreenUi{
    constructor(){
        super();
        this.$main=$(require("./splash.html"));
        this.logs="";
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            ui.nav.displayHome(false);
            ui.nav.displayBack(false,"home");
            ui.nav.displayDashboard(false);
        });
    }
    /**
     * Affiche le message
     * @param {string} str Ce qu'il faut logger :)
     */
    log(str){
        this.logs=str+"\n"+this.logs;
        this.$main.find("pre").html(this.logs);
    }




}