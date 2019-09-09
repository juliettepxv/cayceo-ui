import ScreenUi from "../screens/ScreenUi";
import Ui from "../Ui";

export default class PopInWindow {
    constructor(){
        let me=this;
        this.$main=($(require("./popinWindow.html")));
        this.$main.find(".close").on("click",function(){
            me.hide();
        })
    }

    /**
     * Affiche la popin
     */
    show(){
        this.$main.removeClass("hidden");
    }

    /**
     * Cache la popin
     */
    hide(){
        console.log("masque popin");
        this.$main.addClass("hidden");
        if(ui.currentScreen){
            console.log("simule added to stage sur ",ui.currentScreen);
            ui.currentScreen.emit(Ui.EVENT_ADDED_TO_STAGE);
        }
    }
}