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



window.$=document.$ = window.jQuery = require("jquery");
window.$body=$("body");
window.ui=new Ui();




//Exemples de méthodes à configurer depuis electron

ui.displaySplashScreen("Hello world");
setTimeout(function(){
    let t=2;
    ui.displaySplashScreen(`Cet écran disparaîtra dans ${t} secondes`);
    setTimeout(function(){
        ui.screens.home.show();
    },t * 1000);
},2 * 1000);



ui.on(CMD.QUIT,function(){
    alert("quitter l'application");
});
ui.on(CMD.UPDATE_CONTENT,function(){
    alert("Mettre à jour le contenu");
});
ui.on(CMD.RESET_ALL,function(){
    alert("Reset !!!");
});
ui.on(CMD.STOP_CASQUE,function(numero){
    alert(`Arrêter la lecture sur le casque numéro ${numero}`);
});
ui.on(CMD.WAKE_UP_CASQUES,function(numero){
    alert(`il faut réveiller les casques`);
});
ui.on(CMD.OPEN_CONSOLE,function(numero){
    alert(`il faut ouvrir la console dans electron`);
});
ui.on("NEW_SEANCE",function(seance){
    alert(`Electron doit installer une nouvelle séance`);
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

        for(let i = 0;i<casquesOk.length;i++){
            ui.casques.getCasqueByNumero(casquesOk[i])
                .setFilm(
                    ui.films.getFilmById(seance.film)
                )
                ._setState(Casque.STATE_EN_ATTENTE)
        }

    },3000);
});


ui.on("READY",function(){
    //Layout------------------------------------
    ui.layout.setVersion("1.17.3");
    ui.layout.setLogo("./medias/logo-cayceo.png");
    ui.log("hello");
    setInterval(function(){
        ui.log("hello log ")
    },5*1000);
    /**
     *
     * @type {ScreenUi[]}
     */
    //casques----------------------------------

    ui.casques.addCasque(1)._setState(Casque.STATE_DISPONIBLE);
    ui.casques.addCasque(2)._setState(Casque.STATE_EN_ATTENTE);
    ui.casques.addCasque(3)._setState(Casque.STATE_HORS_LIGNE);
    ui.casques.addCasque(5)._setState(Casque.STATE_EN_COURS);
    ui.casques.addCasque(4)._setState(Casque.STATE_DECHARGE);

    //films-----------------------------------

    ui.films.addFilm(
        "id1",
        "La plage",
        "medias/plage.jpg"
        )
        .addTag("Pédiatrie")
        .addTag("Stress")
        .setDetails(
        {
            "test":Math.random(),
            "id":"id1"
        }
    );

    ui.films.addFilm(
        "id2",
        "La forêt",
        "medias/foret.jpg"
        )
        .addTag("Stress")
        .setDetails(
        {
            "test":Math.random(),
            "id":"id2"
        }
    );

    ui.films.addFilm(
        "id3",
        "Le machin",
        "medias/plage.jpg"
        )
        .addTag("Violence")
        .addTag("Drogue")
        .setDetails(
        {
            "test":Math.random(),
            "id":"id3"
        }
    );

    ui.films.addFilm(
        "id4",
        "Le bidule",
        "medias/plage.jpg"
        )
        .addTag("Sexe")
        .addTag("Licornes")
        .setDetails(
        {
            "test":Math.random(),
            "id":"id4"
        }
    );

    ui.films.addFilm(
        "id5",
        "Le chose",
        "medias/plage.jpg"
        )
        .addTag("Poneys")
        .addTag("Arc en ciel")
        .setDetails(
        {
            "test":Math.random(),
            "id":"id5"
        }
    );

    //ne va pas marcher car le film id2 est déjà dans la liste
    ui.films.addFilm(
        "id2",
        "Ne doit pas s'afficher",
        "medias/foret.jpg"
        )
        .addTag("Stress")
        ._infoPopIn.displayData(
        {
            "test":Math.random(),
            "id":"id2"
            }
        );

    //fake datas en boucle...

    setInterval(function(){

        //random sur les casques
        for(let c in ui.casques.list){
            let casque=ui.casques.list[c];
            if(Math.random()>0.95){
                let items=[
                    Casque.STATE_DISPONIBLE,
                    Casque.STATE_EN_ATTENTE,
                    Casque.STATE_HORS_LIGNE,
                    Casque.STATE_EN_COURS,
                    //Casque.STATE_DECHARGE,
                ];
                casque._setState(
                    items[Math.floor(Math.random()*items.length)]
                );
            }
            if(Math.random()>0.95){
                casque.setBattery(Math.round(Math.random()*100));
            }
            if(Math.random()>0.95){
                casque.setBatteryPlugged(Math.random()>0.5);
            }
            casque.setDetails({
                numero:casque.numero,
                "some":{
                    random:Math.random(),
                    datas:Math.random()
                }
            })
        }
        //histoire de tester
        ui.popIns.casquesAdbData.displayData(new Date())

    },1000);


});









