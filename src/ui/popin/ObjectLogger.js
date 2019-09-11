import PopinUi from "./PopinUi"
import Ui from "../Ui";

export default class ObjectLogger extends PopinUi{
    /**
     *
     */
    constructor(title){
        super();
        let me=this;
        this.$main=$(require("./objectLogger.html"));
        this.$main.find("h1 span").text(title);
    }

    _syntaxHighlight(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

    displayData(obj){
        let me=this;
        this.$main.find("h1 small").text(new Date().toUTCString());
        this.$main.find(".data").html(
            me._syntaxHighlight(
                JSON.stringify(obj,null,2)
            )
        );
    }

}