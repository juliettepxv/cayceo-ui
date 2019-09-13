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
         * Les logs formattées en html
         * @type {Array}
         * @private
         */
        this._logsHtml=[];
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

    log(stuff){
        this.logs.push(stuff);
        let stuffHtml="";
        if(this.displayTime){
            stuffHtml+=new Date().toUTCString()+"\n";
        }
        stuffHtml+=LogsField._syntaxHighlight(
            JSON.stringify(stuff,null,2)
        );
        this._logsHtml.push(stuffHtml);

        let html;
        if(this.modeReplace){
            this.$main.html(stuffHtml);
        }else{
            let $new=$(`<div>${stuffHtml}</div>`);
            if(this.injectTop){
                this.$main.prepend($new);
            }else{
                this.$main.append($new);
            }
        }
    }

    /**
     *
     * @param {string} json json stringified
     * @returns {*}
     * @private
     */
    static _syntaxHighlight(json) {
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