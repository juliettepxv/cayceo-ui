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
        this.$btnSelectAll=this.$main.find("[action='select-all']");

        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){

            ui.nav.displayHome(true,false);
            ui.nav.displayBack(false,"home");
            ui.nav.displayDashboard(false);
            ui.emit(CMD.WAKE_UP_CASQUES);

            me.$main.find("#casques").append(CasqueList.inst().$main);
            for(let c in ui.casques.list){
                //check/uncheck
                ui.casques.list[c].$main.find("button.circle").off("click").on("click",function(){
                    ui.casques.list[c].toggleSelected();
                    me.refresh();
                });
            }


        });

    }


    /**
     * Affiche ou pas le bouton ok en fonction des casques selectionnés ou non
     */
    refresh(){
        let me=this;
        if(me.$main.find("[is-selectable='1']").length){
            me.$btnSelectAll.addClass("active");
        }else{
            me.$btnSelectAll.removeClass("active");
        }


        let $ok=me.$main.find("[ok]");
        if(me.getSelecteds().length){
            $ok.attr("visible","1");
        }else{
            $ok.attr("visible","0");
        }
    };

    /**
     * Renvoie la liste des casques selectionnés
     * @returns {Casque[]}
     */
    getSelecteds(){
        let $casques=this.$main.find("#casques [casque][is-selectable='1'][is-selected='1']");
        let arr=[];
        $casques.each(function(){
            arr.push(ui.casques.list[$(this).attr("casque")]);
        });
        return arr;
    }

    /**
     * Désélectionne tous les casques
     */
    unSelectAll(){
        this.$main.find("#casques [casque]").attr("is-selected","0");
        this.refresh();
    }
    /**
     * Sélectionne tous les casques
     */
    selectAll(){
        this.$main.find("#casques [casque]").attr("is-selected","1");
        this.refresh();
    }
    enableSelectAll(enable){
        if(enable){
            this.$btnSelectAll.addClass("enabled")
        }else{
            this.$btnSelectAll.removeClass("enabled")
        }
    }
}