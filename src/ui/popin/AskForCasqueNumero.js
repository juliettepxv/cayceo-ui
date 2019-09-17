import PopinUi from "./PopinUi"
import Ui from "../Ui";

/**
 *
 */
export default class AskForCasqueNumero extends PopinUi{
    /**
     *
     */
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./askForCasquesNumero.html"));
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){

        });
    }

}