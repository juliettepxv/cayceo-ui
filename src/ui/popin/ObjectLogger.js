import PopinUi from "./PopinUi"
import Ui from "../Ui";
import LogsField from "../components/LogsField";

export default class ObjectLogger extends PopinUi{
    /**
     *
     */
    constructor(title){
        super();
        let me=this;
        this.$main=$(require("./objectLogger.html"));
        this.$main.find("h1 span").text(title);
        this._logs=new LogsField(this.$main.find(".data"));
        this._logs.modeReplace=true;
    }

    /**
     *
     * @param obj
     * @returns {LogLine}
     */
    displayData(obj){
        let me=this;
        this.$main.find("h1 small").text(new Date().toUTCString());
        return this._logs.log(obj);
    }

}