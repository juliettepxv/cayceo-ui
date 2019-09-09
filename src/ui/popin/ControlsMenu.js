import PopinUi from "./PopinUi"
import Ui from "../Ui";

export default class ControlsMenu extends PopinUi{
    /**
     *
     */
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./controlsMenu.html"));
    }

}