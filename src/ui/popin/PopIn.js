import ScreenUi from "../screens/ScreenUi";

export default class PopIn {
    constructor(){
        let me=this;
        this.$main=($(require("./popin.html")));
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
        this.$main.addClass("hidden");
        console.log("masque popin");
        if(ui.currentScreen){
            console.log("simule added to stage sur ",ui.currentScreen);
            ui.currentScreen.emit(ScreenUi.EVENT_ADDED_TO_STAGE);
        }
    }
}