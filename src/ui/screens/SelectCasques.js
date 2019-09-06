import ScreenUi from "./ScreenUi";
import CasqueList from "../components/CasqueList";

let infos= new Array("Disponible");

export default class SelectCasques extends ScreenUi{
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./select-casques.html"));
        this.on(ScreenUi.EVENT_ADDED_TO_STAGE,function(){
            me.$main.find("#casques").append(CasqueList.inst().$main);
        });



    }
}