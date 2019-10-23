import CasqueList from "../components/CasqueList";
import PopinUi from "./PopinUi";
import Ui from "../Ui";

export default class Dashboard extends PopinUi{
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./dashboard.html"));
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            me.$main.find("#casques").append(CasqueList.inst().$main);
            ui.emit(CMD.WAKE_UP_CASQUES);
        });
    }

}