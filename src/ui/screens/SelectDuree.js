import ScreenUi from "./ScreenUi";
import Ui from "../Ui";

export default class SelectDuree extends ScreenUi{
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./selectDuree.html"));
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            ui.nav.displayHome(true,false);
            ui.nav.displayBack(true,"films");
            ui.nav.displayDashboard(true);
        });
    }

}