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

            let $casques=me.$main.find("#casques .casque");
            //check/uncheck
            $casques.on("click",function(){
               $(this).data("obj").toggleCheck();
            });
        });



    }
}