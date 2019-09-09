import ScreenUi from "./ScreenUi";
import CasqueList from "../components/CasqueList";

let infos= new Array("Disponible");

export default class SelectCasques extends ScreenUi{
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./selectCasques.html"));
        this.$main.data("obj",this);

        this.on(ScreenUi.EVENT_ADDED_TO_STAGE,function(){
            me.$main.find("#casques").append(CasqueList.inst().$main);
            for(let c in ui.casques.list){
                //check/uncheck
                ui.casques.list[c].$main.on("click",function(){
                    ui.casques.list[c].toggleCheck();
                });
            }

        });



    }
}