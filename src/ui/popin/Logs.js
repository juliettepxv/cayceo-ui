import PopinUi from "./PopinUi"

/**
 * Contenu de popin permettant d'afficher des logs
 */
export default class Logs extends PopinUi{
    constructor(){
        super();
        this.logs="";
        this.$main=$(require("./logs.html"));
    }

    /**
     * Enregistre une ligne de log
     * @param {string} str Ce qu'il faut logger :)
     */
    log(str){
        str=new Date().toUTCString()+"\n"+str;
        this.logs=str+"\n\n"+this.logs;
        this.$main.find("textarea").val(this.logs);
        console.log(str);
    }

}