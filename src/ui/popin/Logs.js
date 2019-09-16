import PopinUi from "./PopinUi"
import LogsField from "../components/LogsField";

/**
 * Contenu de popin permettant d'afficher des logs
 */
export default class Logs extends PopinUi{
    constructor(){
        super();
        this.$main=$(require("./logs.html"));
        this._logs=new LogsField(this.$main.find(".logs-field"));
        this._logs.modeReplace=false;
        this._logs.injectTop=true;
        this._logs.displayTime=true;

    }

    /**
     * Enregistre une ligne de log
     * @param {string} str Ce qu'il faut logger :)
     * @return {LogLine}
     */
    log(str){
        console.log(str);
        return this._logs.log(str);

    }

}