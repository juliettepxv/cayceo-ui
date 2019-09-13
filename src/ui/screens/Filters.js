import ScreenUi from "./ScreenUi";
import Ui from "../Ui";

export default class Filters extends ScreenUi{
    constructor(){
        //todo intégrer filters (tags) au process
        super();
        this.$main=$(require("./filters.html"));
        this.$main.data("obj",this);
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            ui.nav.displayHome(true,false);
            ui.nav.displayBack(true,"selectCasques");
            ui.nav.displayDashboard(true);
        });
    }
}