export default class LogsField {
    constructor($main=null){
        /**
         * {jQuery} Le champ html à modifier
         */
        this.$main=$main;
        /**
         * La liste des logs
         * @type {Array}
         */
        this.logs=[];
        /**
         * Si true remplace les logs au lieu de les empiler
         * @type {boolean}
         */
        this.modeReplace=false;
        /**
         * si true injectera les logs par en haut
         * @type {boolean}
         */
        this.injectTop=false;
        /**
         * si true affichera le temps pour chaque log
         * @type {boolean}
         */
        this.displayTime=true;
    }

    /**
     *
     * @param {object|string|array|*} stuff Ce qu'il faut logger
     * @returns {LogLine} Renvoie la ligne de log insérée de manière à pouvoir la modifier à postériori
     */
    log(stuff){
        this.logs.push(stuff);
        let line=new LogLine(stuff,this.displayTime,this);
        if(this.modeReplace){
            this.$main.empty().append(line.$main);
        }else{
            if(this.injectTop){
                this.$main.prepend(line.$main);
            }else{
                this.$main.append(line.$main);
            }
        }
        return line;
    }


}

class LogLine {
    /**
     *
     * @param {} obj
     * @param {boolean} displayTime
     * @param {LogsField} logField
     */
    constructor(obj,displayTime=true,logField){
        this._logField = logField;
        this.$main=$("<div></div>");
        this.displayTime=displayTime;
        this.setContent(obj,false);
    }

    /**
     * Définit le contenu de la log
     * @param obj
     * @param {boolean} moveTop si true met la log en haut des autres
     */
    setContent(obj,moveTop=true){
        let stuffHtml="";
        if(this.displayTime){
            stuffHtml+=new Date().toLocaleString()+"\n";
        }
        stuffHtml+=this._syntaxHighlight(
            JSON.stringify(obj,null,2)
        );
        this.$main.empty().html(stuffHtml);
        if(moveTop){
            this._logField.$main.prepend(this.$main);
        }
    }
    /**
     *
     * @param {string} json json stringified
     * @returns {*}
     * @private
     */
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
}