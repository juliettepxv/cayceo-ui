import PopinUi from "./PopinUi"
import Ui from "../Ui";
import CasqueList from "../components/CasqueList";

export default class ControlsMenu extends PopinUi{
    /**
     *
     */
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./controlsMenu.html"));
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            if(!ui.debugMode.isEnabled()){
                ui.showPopin(ui.popIns.pinCode);
                ui.popIns.pinCode.on("SUCCESS",function(){
                    ui.showPopin(me);
                })
            }
        });
    }

}