const EventEmitter = require('event-emitter-es6');

export default class ScreenUi extends EventEmitter{
    constructor(){
        super();
        let me=this;
        this.$main=$("<div></div>");
    }
    show(transi=""){
        window.ui.showScreen(this,transi);
    }

    /**
     * Retourne true si l'écran est visible
     * @returns {boolean}
     */
    isActive(){
        return this.$main.closest("body").length>=0;
    }


}
