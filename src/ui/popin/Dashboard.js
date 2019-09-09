import Casque from "../components/Casque";
import ScreenUi from "../screens/ScreenUi";
import CasqueList from "../components/CasqueList";
import PopinUi from "./PopinUi";

let infos= new Array("Disponible");

export default class Dashboard extends PopinUi{
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./dashboard.html"));
        this.on(ScreenUi.EVENT_ADDED_TO_STAGE,function(){
            me.$main.find("#casques").append(CasqueList.inst().$main);
        });
    }

}