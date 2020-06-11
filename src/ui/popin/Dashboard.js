import CasqueList from "../components/CasqueList";
import PopinUi from "./PopinUi";
import Ui from "../Ui";

export default class Dashboard extends PopinUi{
    get docEnabled() {
        return this._docEnabled;
    }

    set docEnabled(value) {
        this._docEnabled = value;
        if(value){
            this.$main.find('[action="open-doc"]').addClass("active");
        }else{
            this.$main.find('[action="open-doc"]').removeClass("active");
        }
    }
    constructor(){
        super();
        let me=this;
        /**
         * Si true le bouton pour le mode d'emploi est visible
         * @type {boolean}
         * @private
         */
        this._docEnabled=false;
        this.$main=$(require("./dashboard.html"));
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            me.$main.find("#casques").append(CasqueList.inst().$main);
            ui.emit(CMD.WAKE_UP_CASQUES);
        });
    }

}