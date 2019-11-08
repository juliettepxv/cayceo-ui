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
            ui.nav.displayDashboard(true);
        });
    }
    /**
     * Affiche l'écran Explication et donne un feedback sur les (non)installations
     * @param {string[]} ipsCasquesSuccess Les ips de casques où l'installation a pu se faire
     * @param {string[]} ipsCasquesError Les ips de casques où l'installation n'a pas pu se faire
     */
    displayInstallationFeedback(ipsCasquesSuccess=[],ipsCasquesError=[]){
        //fais des copies
        ipsCasquesSuccess=ipsCasquesSuccess.slice(0);
        ipsCasquesError=ipsCasquesError.slice(0);
        let recap="";
        let help="";
        let i;
        //formate les ips en numeros avec du bold
        for(i=0;i<ipsCasquesSuccess.length;i++){
            ipsCasquesSuccess[i]=`<b>${ipToNumero(ipsCasquesSuccess[i])}</b>`;
        }
        for(i=0;i<ipsCasquesError.length;i++){
            ipsCasquesError[i]=`<b>${ipToNumero(ipsCasquesError[i])}</b>`;
        }

        if(ipsCasquesSuccess.length){
            recap="La séance est prête ";
            help="Une fois le casque installé confortablement, appuyer une fois sur le long bouton de droite pour calibrer et lancer automatiquement la séance.";
            //help="Pour la lancer, appuyez sur le long bouton à droite.";
            if(ipsCasquesSuccess.length===1){
                recap+=`sur le casque ${ipsCasquesSuccess[0]}.`;
            }else{
                recap+=`sur les casques ${ipsCasquesSuccess.join(" et ")}.`;
            }
            if(ipsCasquesError.length){
                recap+="<br>En revanche, elle n'a pu être installée ";
                if(ipsCasquesError.length===1){
                    recap+=`sur le casque ${ipsCasquesError.join(" et ")}.`;
                }else{
                    recap+=`sur les casques ${ipsCasquesError.join(" et ")}.`;
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