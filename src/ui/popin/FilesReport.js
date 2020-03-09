import PopinUi from "./PopinUi";
import Ui from "../Ui";

export default class FilesReport extends PopinUi{
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./FilesReport.html"));


        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            me.$main.append(ui.devicesTable.$main);
        });
    }

}