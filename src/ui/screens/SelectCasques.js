import ScreenUi from "./ScreenUi";
import CasqueList from "../components/CasqueList";
import Ui from "../Ui";

let infos= new Array("Disponible");

export default class SelectCasques extends ScreenUi{
    constructor(){

        super();
        let me=this;

        this.$main=$(require("./selectCasques.html"));
        this.$main.data("obj",this);

        let $ok=me.$main.find("[ok]");

        /**
         * Affiche ou pa sle bouton ok en fonction des casques selectionnés ou non
         */
        let refresh=function(){
            if(me.getSelecteds().length){
                $ok.attr("visible","1");
            }else{
                $ok.attr("visible","0");
            }
        };

        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            me.$main.find("#casques").append(CasqueList.inst().$main);
            for(let c in ui.casques.list){
                //check/uncheck
                ui.casques.list[c].$main.find(".elements").off("click").on("click",function(){
                    ui.casques.list[c].toggleCheck();
                    refresh();
                });
            }
        });


    }

    /**
     * Renvoie la liste des casques selectionnés
     * @returns {Casque[]}
     */
    getSelecteds(){
        let $casques=this.$main.find("#casques [casque].checked");
        let arr=[];
        $casques.each(function(){
            arr.push(ui.casques.list[$(this).attr("casque")]);
        });
        return arr;
    }
}