import Casque from "./ui/components/Casque";
import Home from "./ui/screens/Home";
import Dashboard from "./ui/popin/Dashboard";
import Filters from "./ui/screens/Filters";
import Films from "./ui/screens/Films";
import Validation from "./ui/screens/Validation";
import Explication from "./ui/screens/Explication";
import Layout from "./ui/layout/Layout";
import SelectCasques from "./ui/screens/SelectCasques";
import ScreenUi from "./ui/screens/ScreenUi";
import CasqueList from "./ui/components/CasqueList";
import Ui from "./ui/Ui";


require("./main.less");
window.$=document.$ = window.jQuery = require("jquery");
window.$body=$("body");
window.ui=new Ui();


//Exemples de méthodes à configurer depuis electron

ui.on("QUIT",function(){
    alert("quitter l'application");
});
ui.on("UPDATE_CONTENT",function(){
    alert("Mettre à jour le contenu");
});
ui.on("RESET_ALL",function(){
    alert("Reset !!!");
});
ui.on("STOP_CASQUE",function(numero){
    alert(`Arrêter la lecture sur le casque numéro ${numero}`);
});
ui.on("WAKE_UP_CASQUES",function(numero){
    alert(`il faut réveiller les casques`);
});
ui.on("NEW_SEANCE",function(seance){
    alert("Electron doit installer une nouvelle séance");
    console.log("séance a installer:",seance);

    //ici on va simuler le résultat de l'installation

    setTimeout(function(){

        let casquesOk=[];
        let casquesPasOk=[];
        for(let i=0;i<seance.casques.length;i++){
            if(Math.random()>0.5){
                casquesOk.push(seance.casques[i]);
            }else{
                casquesPasOk.push(seance.casques[i]);
            }
        }
        ui.seanceReady(
            casquesOk,
            casquesPasOk
        );
    },3000);
});


ui.on("READY",function(){
    //Layout------------------------------------
    ui.layout.setVersion("1.17.3");
    ui.layout.setLogo("./medias/logo-cayceo.png");
    /**
     *
     * @type {ScreenUi[]}
     */
//casques----------------------------------
    let c1= ui.casques.addCasque(1);
    let c2= ui.casques.addCasque(2);
    let c3= ui.casques.addCasque(3);
    let c5= ui.casques.addCasque(5);
    let c4= ui.casques.addCasque(4);
    c1._setState(Casque.STATE_DISPONIBLE);
    c2._setState(Casque.STATE_EN_ATTENTE);
    c3._setState(Casque.STATE_HORS_LIGNE);
    c4._setState(Casque.STATE_EN_COURS);
    c5._setState(Casque.STATE_DECHARGE);

    setInterval(function(){
        for(let c in ui.casques.list){
            if(Math.random()>0.95){
                let items=[
                    Casque.STATE_DISPONIBLE,
                    Casque.STATE_EN_ATTENTE,
                    Casque.STATE_HORS_LIGNE,
                    Casque.STATE_EN_COURS,
                    //Casque.STATE_DECHARGE,
                ];
                ui.casques.list[c]._setState(
                    items[Math.floor(Math.random()*items.length)]
                );
            }

            if(Math.random()>0.95){
                ui.casques.list[c].setBattery(Math.round(Math.random()*100));
            }
            if(Math.random()>0.95){
                ui.casques.list[c].setBatteryPlugged(Math.random()>0.5);
            }
        }
    },1000);


    //films-----------------------------------


    let f1=ui.screens.films.addFilm(
        "id1",
        "La plage",
        "medias/plage.jpg"
        )
        .addTag("Pédiatrie")
        .addTag("Stress");

    let f2=ui.screens.films.addFilm(
        "id2",
        "La forêt",
        "medias/foret.jpg"
        )
        .addTag("Stress");

    //ne va pas marcher et provoquera un console.warn car le film id2 est déjà dans la liste
    let film2Again=ui.screens.films.addFilm(
        "id2",
        "Ne doit pas s'afficher",
        "medias/foret.jpg"
        )
        .addTag("Stress");


    let f3=ui.screens.films.addFilm(
        "id3",
        "Le machin",
        "medias/plage.jpg"
        )
        .addTag("Violence")
        .addTag("Drogue");

    let f4=ui.screens.films.addFilm(
        "id4",
        "Le bidule",
        "medias/plage.jpg"
        )
        .addTag("Sexe")
        .addTag("Licornes");

    let f5=ui.screens.films.addFilm(
        "id5",
        "Le chose",
        "medias/plage.jpg"
        )
        .addTag("Poneys")
        .addTag("Arc en ciel");


    //applique un film à un casque
    c1.setFilm(f4);
    c3.setFilm(f1);
});









