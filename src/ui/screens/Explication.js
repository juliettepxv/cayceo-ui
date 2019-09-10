import ScreenUi from "./ScreenUi";
import Ui from "../Ui";

export default class Explication extends ScreenUi{
    constructor(){
        super();
        this.$main=$(require("./explication.html"));
        this.$main.data("obj",this);
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            ui.nav.displayHome(true,true);
            ui.nav.displayBack(false);
        });
    }
    /**
     * Affiche l'écran Explication et donne un feedback sur les (non)installations
     * @param {string[]} numerosCasquesSuccess Les numéros de casques où l'installation a pu se faire
     * @param {string[]} numerosCasquesError Les numéros de casques où l'installation n'a pas pu se faire
     */
    displayInstallationFeedback(numerosCasquesSuccess=[],numerosCasquesError=[]){
        let recap="";
        let help="";
        let i;
        for(i=0;i<numerosCasquesSuccess.length;i++){
            numerosCasquesSuccess[i]=`<b>${numerosCasquesSuccess[i]}</b>`;
        }
        for(i=0;i<numerosCasquesError.length;i++){
            numerosCasquesError[i]=`<b>${numerosCasquesError[i]}</b>`;
        }

        if(numerosCasquesSuccess.length){
            recap="La séance est prête ";
            help="Pour la lancer, appuyez sur le long bouton à droite.";
            if(numerosCasquesSuccess.length===1){
                recap+=`sur le casque ${numerosCasquesSuccess[0]}.`;
            }else{
                recap+=`sur les casques ${numerosCasquesSuccess.join(" et ")}.`;
            }
            if(numerosCasquesError.length){
                recap+="<br>En revanche, elle n'a pu être installée ";
                if(numerosCasquesError.length===1){
                    recap+=`sur le casque ${numerosCasquesError.join(" et ")}.`;
                }else{
                    recap+=`sur les casques ${numerosCasquesError.join(" et ")}.`;
                }
            }
        }else{
            recap="La séance n'a pu être installée.";
            help="Essayez de brancher les casques.";
        }
        this.$main.find("[recap]").html(recap);
        this.$main.find("[help]").html(help);
    }
}