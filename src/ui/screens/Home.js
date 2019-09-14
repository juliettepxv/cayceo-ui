/**
 *
 */
import ScreenUi from "./ScreenUi";
import Ui from "../Ui";
import CasqueList from "../components/CasqueList";

export default class Home extends ScreenUi{
    constructor(){
        super();
        this.$main=$(require("./home.html"));
        this.$main.data("obj",this);
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            ui.nav.displayHome(false);
            ui.nav.displayBack(false,"home");
            ui.nav.displayDashboard(true,true);
            ui.screens.selectCasques.unSelectAll();
        });

    }
}