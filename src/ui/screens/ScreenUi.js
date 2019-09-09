const EventEmitter = require('event-emitter-es6');

export default class ScreenUi extends EventEmitter{
    constructor(){
        super();
        let me=this;
        this.$main=$("<div></div>");
    }


}
