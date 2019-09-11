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
import SelectDuree from "./screens/SelectDuree";
import Nav from "./layout/Nav";
const EventEmitter = require('event-emitter-es6');
require("../main.less");
require("./CMD.js");

import css from '!!raw-loader!../../dist/main.css';

/**
 * Il s'agit de l'objet permettant de controler toute l'interface utilisateur
 */
export default class Ui extends EventEmitter{

    _loadAssets(){
        if(!$("[this-is-the-css]").length){
            console.log("inject css");
            let $style=$("<style>"+css+"</style>");
            $body.append($style);
        }else{
            console.log("DO NOT inject css");
        }
        let $svg=$(require("../../dist/icon.lib.html"));
        $body.append($svg);
    }
    constructor(){
        super();
        let me=this;
        console.log("cayceo-ui version",VERSION);

        this._loadAssets();


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
         * Le menu en bas
         * @type {Nav}
         */
        this.nav=new Nav();
        this.layout.$main.append(this.nav.$main);

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

               case "select-casques":
                   let casques=me.screens.selectCasques.getSelecteds();
                   me.screens.validation.setCasques(casques);
                   me.showScreen("films","from-right");
                   break;

               case "select-film":
                   let film=me.screens.films.getFilmById($(this).closest("[film]").attr("film"));
                   me.screens.validation.setFilm(film);
                   me.showScreen("selectDuree","from-right");
                   break;

               case "select-duree":
                   let duree=$(this).attr("duree");
                   me.screens.validation.setDuree(duree);
                   me.showScreen("validation","from-right");
                   break;

               case "valid-seance":
                   let casquesNumeros=[];
                   me.screens.selectCasques.unSelectAll();
                   for(let i=0;i<me.screens.validation.casques.length;i++){
                       casquesNumeros.push(me.screens.validation.casques[i].numero);
                   }
                   me.emit("NEW_SEANCE",{
                       "film":me.screens.validation.film.filmId,
                       "duree":me.screens.validation.duree,
                       "casques":casquesNumeros
                   });
                   break;

               default:
                   alert(`action ${a} non prise en charge`);
           }
        });

        $body.on("click","[data-show-screen]",function(){
            me.showScreen(
                $(this).attr("data-show-screen"),
                $(this).attr("data-show-screen-transi")
            );
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
            "selectDuree":new SelectDuree(),
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
     * Affiche l'écran Explication et donne un feedback sur les éventuelles non installations
     * @param {string[]} numerosCasquesSuccess Les numéros de casques où l'installation a pu se faire
     * @param {string[]} numerosCasquesError Les numéros de casques où l'installation n'a pas pu se faire
     */
    seanceReady(numerosCasquesSuccess=[],numerosCasquesError=[]){
        this.showScreen("explication","from-right");
        this.screens.explication.displayInstallationFeedback(
            numerosCasquesSuccess,
            numerosCasquesError
        )
    }

    /**
     * Affiche l'écran demandé
     * @param {string} screenName
     * @param {string} transi La transition à utiliser
     */
    showScreen(screenName,transi=""){
        document.title=screenName;
        let me=this;
        this.hidePopin();
        setTimeout(function(){
            $("[transi]").attr("transi",transi);
            let screen=me.screens[screenName];
            $("#main").empty().append(screen.$main);
            screen.emit(Ui.EVENT_ADDED_TO_STAGE);
            me.currentScreen=screen;
            },50
        )


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

