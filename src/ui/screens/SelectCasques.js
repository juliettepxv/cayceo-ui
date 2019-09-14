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




        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){

            ui.nav.displayHome(true,false);
            ui.nav.displayBack(true,"home");
            ui.nav.displayDashboard(true);

            me.$main.find("#casques").append(CasqueList.inst().$main);
            for(let c in ui.casques.list){
                //check/uncheck
                ui.casques.list[c].$main.find("button.circle").off("click").on("click",function(){
                    ui.casques.list[c].toggleSelected();
                    me._refresh();
                });
            }

        });


    }


    /**
     * Affiche ou pas le bouton ok en fonction des casques selectionnés ou non
     * @private
     */
    _refresh(){
        let me=this;
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
        this._refresh();
    }
}