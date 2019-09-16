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
    let c=ui.casques.getCasqueByNumero(numero);
    c.setContenu(null);
});
ui.on(CMD.PLAY_CASQUE,function(numero){
    alert(`Lancer la lecture sur le casque numéro ${numero}`);
    let c=ui.casques.getCasqueByNumero(numero);
    c.setIsPlaying(true);
    let s=Math.random()*60*15;
    let i=setInterval(function(){
        s--;
        c.displayTime(s);
        if(s<0 || !c.contenu){
            clearInterval(i);
        }
    },1000)
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
            if(Math.random()>0.01){
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
                .setContenu(
                    ui.films.getFilmById(seance.film)
                )
                .displayTime(seance.duree*60)
        }

    },3000);
});


ui.on("READY",function(){
    //Layout------------------------------------
    ui.layout.setVersion("1.17.3");
    ui.layout.setLogo("./medias/logo-cayceo.png");
    ui.log("hello");
    //toutes les 5 secondes dit hello
    setInterval(function(){
        ui.log("hello log ")
    },5*1000);

    //toutes les secondes dit l'heure sur la même ligne de log
    let logTime=ui.log(new Date().toLocaleTimeString());
    setInterval(function(){
        logTime.setContent("je me mets à jour "+new Date().toLocaleTimeString())
    },1*1000);
    /**
     *
     * @type {ScreenUi[]}
     */
    //casques----------------------------------

    ui.casques.addCasque(1).setOnline(true);
    ui.casques.addCasque(2).setOnline(true);
    ui.casques.addCasque(3).setOnline(true);
    ui.casques.addCasque(5).setOnline(true);
    ui.casques.addCasque(4).setOnline(false);

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
                casque.setOnline(Math.random()>0.05);
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









