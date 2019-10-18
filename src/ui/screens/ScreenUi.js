const EventEmitter = require('event-emitter-es6');

export default class ScreenUi extends EventEmitter{
    constructor(){
        super();
        let me=this;
        this.$main=$("<div></div>");
        this.randomUid=Math.random();
    }
    show(transi="",hidePopin=true){
        window.ui.showScreen(this,transi,hidePopin);
    }

    /**
     * Retourne true si l'écran est visible
     * @returns {boolean}
     */
    isActive(){
        return ui.currentScreen.randomUid===this.randomUid;
    }


}
