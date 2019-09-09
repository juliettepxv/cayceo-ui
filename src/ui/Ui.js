import Layout from "./layout/Layout";
import ScreenUi from "./screens/ScreenUi";
import CasqueList from "./components/CasqueList";
import Films from "./screens/Films";
import Home from "./screens/Home";

import SelectCasques from "./screens/SelectCasques";
import Filters from "./screens/Filters";
import Validation from "./screens/Validation";
import Explication from "./screens/Explication";

import PopinUi from "./popin/PopinUi"
import PopInWindow from "./popin/PopInWindow";
import ControlsMenu from "./popin/ControlsMenu";
import Dashboard from "./popin/Dashboard";
const EventEmitter = require('event-emitter-es6');

/**
 * Il s'agit de l'objet permettant de controler toute l'interface utilisateur
 */
export default class Ui extends EventEmitter{
    constructor(){
        super();
        let me=this;
        /**
         * La popin en cours
         * @type {null|PopinUi}
         */
        this.currentPopin=null;
        /**
         * L'écran en cours
         * @type {null|ScreenUi}
         */
        this.currentScreen=null;
        /**
         * Le logo, le numero de version et tout ce qui ne bougee pas d'un écran à l'autre
         * @type {Layout}
         */
        this.layout = new Layout();
        $body.prepend(this.layout.$main);
        /**
         * L'objet de popin
         * @private
         * @type {PopInWindow}
         */
        this._popIn=new PopInWindow();
        /**
         *
         */
        this.layout.$main.append(this._popIn.$main);

        /**
         * La liste des casques
         * @type {CasqueList}
         */
        this.casques=new CasqueList();


        /**
         * Permet de gérer si on est en mode débug ou non
         * @type {{enable: Ui.debugMode.enable, disable: Ui.debugMode.disable, isEnabled(): *, toggle: Ui.debugMode.toggle}}
         */
        this.debugMode={
            enable:function(){
                $body.find("[debug-is-enabled]").attr("debug-is-enabled","1");
            },
            disable:function(){
                $body.find("[debug-is-enabled]").attr("debug-is-enabled","0");
            },
            toggle:function(){
                if(this.isEnabled()){
                    this.disable();
                }else{
                    this.enable();
                }
            },
            isEnabled(){
                return $body.find("[debug-is-enabled]").attr("debug-is-enabled") === "1";
            }
        };




        //----------------go---------------


        setTimeout(function(){
            me._initStuff();
            me.showScreen("home");
        },10)


    }

    _initStuff(){
        let me=this;

        $body.on("click","[action]",function(){
           let a =$(this).attr("action");
           console.log("action",a)
           switch(a){
               case "debug-toggle":
               me.debugMode.toggle();
                   break;

               case "emit":
                   me.emit($(this).attr("emit-name"));
                   break;

               case "stop-casque":
                   me.emit("STOP_CASQUE",$(this).closest("[casque]").attr("casque"));
                   break;

               default:
                   alert(`action ${a} non prise en charge`);
           }
        });

        $body.on("click","[data-show-screen]",function(){
            me.showScreen($(this).attr("data-show-screen"));
        });
        $body.on("click","[data-show-popin]",function(){
            me.showPopin($(this).attr("data-show-popin"));
        });
        /**
         * La liste exhaustive des écrans
         * @type {{films: Films, filters: Filters, selectCasques: SelectCasques, validation: Validation, explication: Explication, home: Home}}
         */
        this.screens={
            "home":new Home(),
            "films":new Films(),
            "selectCasques":new SelectCasques(),
            "filters":new Filters(),
            "validation":new Validation(),
            "explication":new Explication(),
        };
        /**
         * La liste exhaustive des popins
         * @type {{debug: null, dashboard: Dashboard}}
         */
        this.popIns={
            "dashboard":new Dashboard(),
            "debug":null,
            "controlsMenu":new ControlsMenu(),
        };
        //todo popin debug

        this.emit("READY");

    }

    /**
     * Affiche l'écran demandé
     * @param {string} screenName
     */
    showScreen(screenName){
        document.title=screenName;
        this.hidePopin();
        let screen=this.screens[screenName];
        $("#main").empty().append(screen.$main);
        screen.emit(Ui.EVENT_ADDED_TO_STAGE);
        this.currentScreen=screen;
    }
    /**
     * Affiche la popin demandée
     * @param {string} popinName
     */
    showPopin(popinName){
        console.log("show popin:",popinName);
        this._popIn.show();
        let pop=this.popIns[popinName];
        $("#popin-content").empty().append(pop.$main);
        pop.emit(Ui.EVENT_ADDED_TO_STAGE);
        this.currentPopin=pop;
    }

    /**
     * Masque la popin (et vide son contenu)
     */
    hidePopin(){
        this._popIn.hide();
        ui.currentPopin=null;
        $("#popin-content").empty();
    }



}

/**
* Appelé quand un écran ou une popin est affiché(e) à l'écran.
* @type {string}
*/
Ui.EVENT_ADDED_TO_STAGE="EVENT_ADDED_TO_STAGE";