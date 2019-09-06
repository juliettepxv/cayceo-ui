const EventEmitter = require('event-emitter-es6');

export default class ScreenUi extends EventEmitter{
    constructor(){
        super();
        let me=this;
        this.$main=$("<div></div>");
        this.on(ScreenUi.EVENT_ADDED_TO_STAGE,function(){
            console.log("ajouté",me)
        });
    }
}
/**
 * Appelé quand un écran est ajouté à l'écran.
 * @type {string}
 */
ScreenUi.EVENT_ADDED_TO_STAGE="EVENT_ADDED_TO_STAGE";