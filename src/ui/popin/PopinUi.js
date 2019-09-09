const EventEmitter = require('event-emitter-es6');

/**
 * Classe de base des popins
 */
export default class PopinUi extends EventEmitter{
    constructor(){
        super();
        let me=this;
        this.$main=$("<div></div>");
    }
}
