const EventEmitter = require('event-emitter-es6');
import ScreenUi from "../screens/ScreenUi";

export default class PopinUi extends EventEmitter{
    constructor(){
        super();
        let me=this;
        this.$main=$("<div></div>");
        this.on(ScreenUi.EVENT_ADDED_TO_STAGE,function(){
            ui.currentPopin=me;
            console.log("ajouté popin",me)
        });
    }
}
