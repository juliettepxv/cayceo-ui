import PopinUi from "./PopinUi"
import Ui from "../Ui";

export default class Logs extends PopinUi{
    /**
     *
     */
    constructor(){
        super();
        let me=this;
        this.logs="";
        this.$main=$(require("./logs.html"));
    }

    log(str){
        str=new Date().toUTCString()+"\n"+str;
        this.logs=str+"\n\n"+this.logs;
        this.$main.find("textarea").val(this.logs);
    }

}