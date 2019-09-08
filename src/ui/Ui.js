import Layout from "./layout/Layout";
import ScreenUi from "./screens/ScreenUi";
import CasqueList from "./components/CasqueList";
import Films from "./screens/Films";
import Home from "./screens/Home";
import Dashboard from "./popin/Dashboard";
import SelectCasques from "./screens/SelectCasques";
import Filters from "./screens/Filters";
import Validation from "./screens/Validation";
import Explication from "./screens/Explication";
import PopIn from "./popin/PopIn";

/**
 * Il s'agit de l'objet permettant de controler toute l'interface utilisateur
 */
export default class Ui {
    constructor(){
        let me=this;
        this.layout = new Layout();
        $body.prepend(this.layout.$main);
        this.popIn=new PopIn();
        this.layout.$main.append(this.popIn.$main);

        /**
         * La liste des casques
         * @type {CasqueList}
         */
        this.casques=new CasqueList();

        this.screens={
            "home":new Home(),
            "films":new Films(),
            "selectCasques":new SelectCasques(),
            "filters":new Filters(),
            "validation":new Validation(),
            "explication":new Explication(),
        };
        $body.on("click","[data-show-screen]",function(){
            me.showScreen($(this).attr("data-show-screen"));
        });


        this.popIns={
            "dashboard":new Dashboard(),
            "debug":null
        };
        $body.on("click","[data-show-popin]",function(){
            me.showPopin($(this).attr("data-show-popin"));
        });

        me.showScreen("home");

    }

    /**
     * Affiche l'écran demandé
     * @param {string} screenName
     */
    showScreen(screenName){
        document.title=screenName;
        this.hidePopin();
        $("#main").empty().append(this.screens[screenName].$main);
        this.screens[screenName].emit(ScreenUi.EVENT_ADDED_TO_STAGE);
    }
    /**
     * Affiche la popin demandée
     * @param {string} popinName
     */
    showPopin(popinName){
        console.log("show popin:",popinName)
        this.popIn.show();
        $("#popin-content").empty().append(this.popIns[popinName].$main);
        this.popIns[popinName].emit(ScreenUi.EVENT_ADDED_TO_STAGE);
    }

    /**
     * Masque la popin
     */
    hidePopin(){
        this.popIn.hide();
    }
}