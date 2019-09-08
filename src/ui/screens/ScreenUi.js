const EventEmitter = require('event-emitter-es6');

export default class ScreenUi extends EventEmitter{
    constructor(){
        super();
        let me=this;
        this.$main=$("<div></div>");
        this.$main.data("obj",this);
        this.on(ScreenUi.EVENT_ADDED_TO_STAGE,function(){
            console.log("ajouté",me)
        });
    }

    /**
     * Renvoie l'objet en cours (qui est dans le dom) ou null
     * @returns {null|ScreenUi}
     */
    static getCurrent(){
        let $els=$("[screen]");
        if($els.length){
            return $($els[0]).data("obj");
        }
        return  null;
    }
}
/**
 * Appelé quand un écran est ajouté à l'écran.
 * @type {string}
 */
ScreenUi.EVENT_ADDED_TO_STAGE="EVENT_ADDED_TO_STAGE";