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
import Qrcode from "./popin/Qrcode";
import ControlsMenu from "./popin/ControlsMenu";
import Dashboard from "./popin/Dashboard";
import SelectDuree from "./screens/SelectDuree";
import Nav from "./layout/Nav";
const EventEmitter = require('event-emitter-es6');
require("../CayceoUi.less");
require("./CMD.js");
require("../utils/ip-to-numero");

import Logs from "./popin/Logs";
import ObjectLogger from "./popin/ObjectLogger";
import Splash from "./screens/Splash";
import PinCode from "./popin/PinCode";
import Dialog from "./components/Dialog/Dialog";
import FilesReport from "./popin/FilesReport";
import DevicesTable from "./components/devices-table/DevicesTable";
import StreamScreen from "./components/stream-screen/StreamScreen";

/**
 * Il s'agit de l'objet permettant de controler toute l'interface utilisateur
 */
export default class Ui extends EventEmitter{
    get casqueRemotreControlEnabled() {
        return this._casqueRemotreControlEnabled;
    }

    set casqueRemotreControlEnabled(value) {
        console.log("ui casqueRemotreControlEnabled",value)
        this._casqueRemotreControlEnabled = value;
        this.layout.enableCasqueRemotreControl(value)
    }
    get ipneoRemoteEnabled() {
        return this._ipneoRemoteEnabled;
    }

    set ipneoRemoteEnabled(value) {
        this._ipneoRemoteEnabled = value;
        this.layout.enableQrCode(value)
    }

    get btnPlayAllEnabled() {
        return this._btnPlayAllEnabled;
    }

    set btnPlayAllEnabled(value) {
        this._btnPlayAllEnabled = value;
        this.screens.explication.enablePlayAll(value);
    }

    get btnSelectAllEnabled() {
        return this._btnSelectAllEnabled;
    }

    set btnSelectAllEnabled(value) {
        this._btnSelectAllEnabled = value;
        this.screens.selectCasques.enableSelectAll(value);
    }
    get categoriesEnabled() {
        return this._categoriesEnabled;
    }

    set categoriesEnabled(value) {
        this._categoriesEnabled = value;
        if(!this._categoriesEnabled){
            this.films.category=null;
        }
    }





    constructor(){
        super();
        let me=this;

        this._isSyncing=false;
        this._isOffline=false;

        /**
         * La version de cayceo UI
         */
        this.version=VERSION;
        console.log("cayceo-ui version",this.version);

        /**
         * Le code pin à tapper pour activer le mode developpeur
         * @type {string}
         */
        this.pinCode="0000";
        /**
         * Overlay qui permet d'afficher une copie d'écran d'un casque en temps presque réel
         * @type {StreamScreen}
         */
        this.streamScreen=new StreamScreen();

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
        this._popInWindow=new PopInWindow();
        /**
         *
         */
        this.layout.$main.append(this._popInWindow.$main);
        /**
         * Le menu en bas
         * @type {Nav}
         */
        this.nav=new Nav();
        this.layout.$main.append(this.nav.$main);

        this.dialog=new Dialog();
        /**
         * La liste des casques
         * @type {CasqueList}
         */
        this.casques=new CasqueList();
        /**
         * La liste des films
         * @type {Films}
         */
        this.films=new Films();
        /**
         * Définit si l'affichage des contenus via catégories est activé ou non
         * @type {boolean}
         */
        this._categoriesEnabled=false;
        this._ipneoRemoteEnabled=false;
        /**
         * Définit si on active ou non la télécommande sur les casques
         * @type {boolean}
         * @private
         */
        this._casqueRemotreControlEnabled=false;
        this._btnPlayAllEnabled=false;
        this._btnSelectAllEnabled=false;


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
                me.hidePopin();
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
        me._initStuff();
    }
    /**
     * Si true (et qu'on est en mode debug) affiche qu'on synchronise du contenu
     * @param value
     */
    set isSyncing(value) {
        $body.find("[is-syncing]").attr("is-syncing",value?"1":"0");
        this._isSyncing = value;
    }

    /**
     * Si true (et qu'on est en mode debug) affiche qu'on est offline
     * @param value
     */
    set isOffline(value) {
        $body.find("[is-offline]").attr("is-offline",value?"1":"0");
        this._isOffline = value;
        ui.devicesTable.devicesById["régie"].online=!this._isOffline;
    }

    /**
     * Permet d'activer le mode d'emploi
     * @param imgUrl
     */
    activeModeEmploi(){
        this.popIns.dashboard.docEnabled=true;
    }

    /**
     *
     * @private
     */
    _initStuff(){
        let me=this;

        $body.on("click","[action]",function(){
           let a =$(this).attr("action");
           switch(a){
               case "debug-toggle":
               me.debugMode.toggle();
                   break;

               case "emit":
                   me.emit($(this).attr("emit-name"));
                   break;

               case "casque-remove":
                   me.emit(CMD.CASQUE_REMOVE,           $(this).attr("ip"));
                   break;

               case "casque-show-stream-screen":
                   me.emit(CMD.CASQUE_SHOW_STREAM_SCREEN,      $(this).attr("ip"));
                   me.streamScreen.show($(this).attr("ip"));
                   break;

               case "casque-close-stream-screen":
                   me.emit(CMD.CASQUE_CLOSE_STREAM_SCREEN,      $(this).attr("ip"));
                   me.streamScreen.close();
                   break;

               case "casque-install-apk":
                   me.emit(CMD.CASQUE_INSTALL_APK,      $(this).attr("ip"));
                   break;

               case "casque-delete-all-files":
                   me.emit(CMD.CASQUE_DELETE_ALL_FILES, $(this).attr("ip"));
                   break;

               case "casque-configure-all":
                   me.emit(CMD.CASQUE_CONFIGURE_ALL, $(this).attr("ip"));
                   break;

               case "casque-reboot":
                   me.emit(CMD.CASQUE_REBOOT,           $(this).attr("ip"));
                   break;

               case "casque-wake-up":
                   me.emit(CMD.CASQUE_WAKE_UP,          $(this).attr("ip"));
                   break;

               case "casque-play":
                   me.emit(CMD.CASQUE_PLAY,                     $(this).closest("[casque]").attr("casque"));
                   break;

               case "casque-stop":
                   me.emit(CMD.CASQUE_STOP,                     $(this).closest("[casque]").attr("casque"));
                   break;

               case "casque-remotre-control-config":
                   me.emit(CMD.CASQUE_REMOTE_CONTROL_CONFIG,    $(this).closest("[casque]").attr("casque"));
                   break;

               case "casques-play-multiple":
                   for(let ip of $(this).attr("ips").split(",")){
                       me.emit(CMD.CASQUE_PLAY,ip);
                   }
                   me.showPopin(me.popIns.dashboard);
                   break;

               case "open-doc":
                   me.emit(CMD.OPEN_DOC);
                   break;

               case "shut-down-all":
                   me.shutDownAll();
                   break;

               case "reset-all":
                   me.dialog
                       .display()
                       .setText(
                           "Êtes-vous certain de vouloir tout réinitialiser?" +
                           "<br>" +
                           "<span style='color: var(--color-pink);'>" +
                           "ATTENTION" +
                           " cette action est irréversible et nécessitera une ré-installation complète de la configuration, des casques et des fichiers!" +
                           "</span>")
                       .oui("oui",function(){
                           me.emit(CMD.RESET_ALL);
                       });
                   break;

               case "select-casques":
                   let casques=me.screens.selectCasques.getSelecteds();
                   me.screens.validation.setCasques(casques);
                   if(ui.categoriesEnabled){
                       me.screens.filters.show("from-right");
                   }else{
                       me.screens.films.show("from-right");
                   }

                   break;

               case "select-film":
                   let film=me.screens.films.getFilmById($(this).closest("[film]").attr("film"));
                   me.screens.validation.setFilm(film);
                   me.screens.validation.setDuree(film.minutes);
                   me.screens.validation.show("from-right");
                   break;

               case "select-duree":
                   let duree=$(this).attr("duree");
                   me.screens.validation.setDuree(duree);
                   me.screens.validation.show("from-right");
                   break;

               case "select-all":
                   me.screens.selectCasques.selectAll();
                   break;


               case "valid-seance":
                   let casquesIps=[];
                   for(let i=0;i<me.screens.validation.casques.length;i++){
                       casquesIps.push(me.screens.validation.casques[i].ip);
                   }
                   me.emit(CMD.NEW_SEANCE,{
                       "film":me.screens.validation.film.filmId,
                       "duree":me.screens.validation.duree,
                       "casques":casquesIps
                   });
                   me.screens.validation.displayLoading(true);
                   me.screens.selectCasques.unSelectAll();
                   break;




               default:
                   alert(`action ${a} non prise en charge`);
           }
        });

        $body.on("click","[data-show-screen]",function(){
            me._showScreenByName(
                $(this).attr("data-show-screen"),
                $(this).attr("data-show-screen-transi")
            );
        });
        $body.on("click","[data-show-popin]",function(){
            let popName=$(this).attr("data-show-popin");
            me._showPopinByName(popName);
        });

        this.devicesTable=new DevicesTable();

        /**
         * La liste exhaustive des écrans
         * @type {{films: Films, filters: Filters, selectCasques: SelectCasques, validation: Validation, explication: Explication, home: Home}}
         */
        this.screens={
            "splash":new Splash(),
            "home":new Home(),
            "films":this.films,
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
            "controlsMenu":new ControlsMenu(),
            "logs":new Logs(),
            "debug":null,
            "webApiData":new ObjectLogger("Web Api data"),
            "pinCode":new PinCode(),
            "filesReport":new FilesReport(),
            "Qrcode":new Qrcode(),
        };

        this.popIns.pinCode.on("SUCCESS",function(){
            me.debugMode.enable();
        });





        this.emit("READY");

    }

    /**
     * Demande à arrêter les casque et le système en pasant par quelques confirmations
     */
    shutDownAll(){
        let me=this;
        /**
         * Renvoie les numeros de casque pas branchés
         * @returns {[]}
         */
        let unpluggeds=function(){
            let toPlug=[];
            for(let c of me.casques.arrayList()){
                if(!c.isPlugged()){
                    toPlug.push(c.numero);
                }
            }
            return toPlug;
        };

        let testAndShutDown=function(){
            let toPlug=unpluggeds();
            if(toPlug.length){
                let text=`Merci de brancher `;
                if(toPlug.length===1){
                    text+=`le casque ${toPlug.join(", ")}`
                }else{
                    let last=toPlug.pop();
                    text+=`les casques ${toPlug.join(", ")}`;
                    text+=" et "+last;
                }
                me.dialog
                    .display()
                    .setText(text)
                    .oui("C'est fait",
                        function(){
                            testAndShutDown();
                        }
                    ).non("Arrêter quand même",
                    function(){
                        me.emit(CMD.SHUT_DOWN_ALL);
                    }
                );
            }else{
                me.emit(CMD.SHUT_DOWN_ALL);
            }
        };

        me.dialog
            .display()
            .setText("Voulez-vous arrêter la régie ?")
            .oui("oui",function(){
               testAndShutDown();
            });
    }


    /**
     * Affiche l'écran de log et y ajoute le message fourni.
     * @param message
     */
    displaySplashScreen(message){
        this.screens.splash.show();
        this.screens.splash.log(message)
    }

    /**
     * Affiche l'écran Explication et donne un feedback sur les éventuelles non installations
     * @param {string[]} ipsCasquesSuccess Les ips de casques où l'installation a pu se faire
     * @param {string[]} ipsCasquesError Les ips de casques où l'installation n'a pas pu se faire
     */
    seanceReady(ipsCasquesSuccess=[],ipsCasquesError=[]){
        this.screens.explication.show("from-right");
        this.screens.explication.displayInstallationFeedback(
            ipsCasquesSuccess,
            ipsCasquesError
        );
        //retourne sur la home au bout de 30 secondes
        setTimeout(function () {
            if(ui.screens.explication.isActive()){
                ui.screens.home.show(null,false);
            }
        },30*1000)
    }


    /**
     * Affiche l'écran demandé
     * @param {ScreenUi} screen
     * @param {string} transi La transition à utiliser
     * @param {boolean} hidePopin si
     */
    showScreen(screen,transi="",hidePopin=true){
        let me=this;
        if(hidePopin){
            this.hidePopin();
        }
        setTimeout(function(){
            $("[transi]").attr("transi",transi);
            $("#main").empty().append(screen.$main);
                screen.emit(Ui.EVENT_ADDED_TO_STAGE);
                me.currentScreen=screen;
            },50
        )
    }
    /**
     * Affiche l'écran demandé
     * @param {string} screenName
     * @param {string} transi La transition à utiliser
     * @private
     */
    _showScreenByName(screenName, transi=""){
       this.showScreen(this.screens[screenName],transi) ;
    }
    /**
     * Affiche la popin demandée
     * @param {PopinUi} popin
     */
    showPopin(popin){
        this._popInWindow.show();
        $("#popin-content").empty().append(popin.$main);
        popin.emit(Ui.EVENT_ADDED_TO_STAGE);
        this.currentPopin=popin;
    }

    /**
     *
     * Affiche la popin demandée
     * @param {string} popinName
     * @private
     */
    _showPopinByName(popinName){
        this.showPopin(this.popIns[popinName])
    }

    /**
     * Masque la popin (et vide son contenu)
     */
    hidePopin(){
        this._popInWindow.hide();
        ui.currentPopin=null;
        $("#popin-content").empty();
    }

    /**
     * Enregistre une log visible qui sera dans la popin de log
     * @param message
     * @param {boolean} logOnSplash si true affichera la log sur le splash screen aussi
     * @returns {LogLine}
     */
    log(message,logOnSplash=false){
        return this.popIns.logs.log(message,logOnSplash);
    }



}

/**
* Appelé quand un écran ou une popin est affiché(e) à l'écran.
* @type {string}
*/
Ui.EVENT_ADDED_TO_STAGE="EVENT_ADDED_TO_STAGE";
/**
 * Appelé quand un fichier est marqué comme existant
 * @type {string}
 */
Ui.EVENT_FILE_EXISTS="EVENT_FILE_EXISTS";
/**
 * Appelé quand un fichier est marqué comme supprimé
 * @type {string}
 */
Ui.EVENT_FILE_DELETED="EVENT_FILE_DELETED";
/**
 * Appelé quand un fichier est marqué comme existant et qu'il n'existait pas avant
 * @type {string}
 */
Ui.EVENT_FILE_EXISTS_NEW="EVENT_FILE_EXISTS_NEW";

