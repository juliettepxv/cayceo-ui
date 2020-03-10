/*
import ScreenUi from "./ui/screens/ScreenUi";
import Ui from "./ui/Ui";

window.$=document.$ = window.jQuery = require("jquery");
window.$body=$("body");
window.ui=new Ui();

*/
require("./CayceoUi");

//Exemples de méthodes à configurer depuis electron

ui.displaySplashScreen("Hello world");
setTimeout(function(){
    let t=1;
    ui.displaySplashScreen(`Cet écran disparaîtra dans ${t} secondes`);
    setTimeout(function(){
        ui.screens.home.show();
        ui.showPopin(ui.popIns.filesReport);
    },t * 1000);
},2 * 1000);



ui.on(CMD.QUIT,function(){
    alert("quitter l'application");
});
ui.on(CMD.SHUT_DOWN_ALL,function(){
    alert("eteindre les casques puis le système");
});
ui.on(CMD.UPDATE_CONTENT,function(){
    alert("Mettre à jour le contenu");
});
ui.on(CMD.RESET_ALL,function(){
    alert("Reset !!!");
});
ui.on(CMD.CASQUE_STOP,function(ip){
    alert(`Arrêter la lecture sur le casque ${ip}`);
    let c=ui.casques.getCasqueByIp(ip);
    c.setContenu(null);
});
ui.on(CMD.CASQUE_REMOVE,function(ip){
    alert(`désindexer le casque ${ip}`);
});
ui.on(CMD.CASQUE_DELETE_ALL_FILES,function(ip){
    alert(`effacer tous les fichiers sur le casque ${ip}`);
});
ui.on(CMD.CASQUE_INSTALL_APK,function(ip){
    alert(`installer l'APK sur le casque ${ip}`);
});
ui.on(CMD.CASQUE_REBOOT,function(ip){
    alert(`Rebooter le casque ${ip}`);
});
ui.on(CMD.CASQUE_PLAY,function(ip){
    alert(`Lancer la lecture sur le casque ${ip}`);
    let c=ui.casques.getCasqueByIp(ip);
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
ui.on(CMD.WAKE_UP_CASQUES,function(){
    alert(`il faut réveiller les casques`);
});
ui.on(CMD.OPEN_CONSOLE,function(){
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
            ui.casques.getCasqueByIp(casquesOk[i])
                .setContenu(
                    ui.films.getFilmById(seance.film)
                )
                .displayTime(seance.duree*60)
        }

    },3000);
});


ui.on("READY",function(){
    //Layout------------------------------------
    ui.layout.setVersion("9.99.9");
    ui.layout.setMachineName("machine test");
    ui.layout.setContenuUpdate("contenu Truc 18%");
    setTimeout(function(){
        ui.layout.setContenuUpdate(null);
    },5000)
    ui.layout.setVersionUpdateMessage("installer la mise à jour",true);
    ui.layout.setLogo("./medias/logo-cayceo.png");
    ui.isOffline=true;
    ui.isSyncing=true;
    let logLine=ui.log("hello",true);
    //toutes les 5 secondes dit hello
    setInterval(function(){
        logLine.setContent("hello on log and splash")
    },5*1000);

    ui.categoriesEnabled=true;

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
    /**
     *
     * @type {Casque}
     */
    let casqueTest=ui.casques.addCasque("192.18.0.1").setOnline(true).setContenusReady(true);
    ui.casques.addCasque("192.18.0.12").setOnline(true).setApkIsOk(true);
    ui.casques.addCasque("192.18.0.3").setOnline(true).setApkIsOk(true);
    ui.casques.addCasque("192.18.0.5").setOnline(true).setBatteryPlugged(true).setContenusReady(false).setCopyProgress("50");
    ui.casques.addCasque("192.18.0.4").setOnline(false);

    //ajoute un casque 6 puis le supprime 5 secondes plus tard
    setTimeout(function(){
        ui.casques.addCasque("192.168.0.6");
        setTimeout(function(){
            ui.casques.removeCasque(6);
        },1000*5);
    },1000*20);

    //films-----------------------------------

    ui.films.addFilm(
        "id1",
        "La plage",
        "medias/plage.jpg",
        "La/plage",
        5,
        "Hello world"
        )
        .setDetails(
        {
            "test":Math.random(),
            "id":"id1"
        }
    ).addCategory("toto")
        .addCategory("plage");

    let filmTest=ui.films.addFilm(
        "id2",
        "La forêt long long text fin",
        "medias/foret.jpg",
        "La_forêt_long_long/text/fin",
        12
        )
        .setDetails(
        {
            "test":Math.random(),
            "id":"id2"
        }
    ).addCategory("toto")
        .addCategory("forêt");


    casqueTest.setOnline(true);
    casqueTest.setBatteryPlugged(true);
    casqueTest.setApkIsOk(true);
    casqueTest.setBattery(85);
    casqueTest.setContenu(filmTest);
    casqueTest.setIsPlaying(true);
    casqueTest.displayTime(120);



    ui.films.addFilm(
        "id3",
        "Le machin",
        "medias/plage.jpg",
        "Le/machin/eeee",
        "",
        "Rose\nBleu"
        )
        .setDetails(
        {
            "test":Math.random(),
            "id":"id3"
        }
    ).addCategory("machin")
        .addCategory("titi")
        .addCategory("toto");

    let testFilm=ui.films.addFilm(
        "id4",
        "Le bidule",
        "medias/plage.jpg",
        "Le/bidule",
        60,
        "Machin\nToto\nchose"
        )
        .setDetails(
        {
            "test":Math.random(),
            "id":"id4"
        }
    ).addCategory("bidule")
        .addCategory("toto");
    //acche et réaffiche un film
    setTimeout(function(){
        testFilm.disabled=true;
        setTimeout(function(){
            testFilm.disabled=false;
        },5*1000);
    },20*1000);

    ui.films.addFilm(
        "id5",
        "Le chose",
        "medias/plage.jpg",
        "Le/chose",
        20,
        "Per-opératoire"
        )
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
        "medias/foret.jpg",
        "Ne/doit/pas/s-afficher",
        35
        )
        ._infoPopIn.displayData(
        {
            "test":Math.random(),
            "id":"id2"
            }
            );


        //génere des faux fichiers
        for(let i=0;i<10;i++){
            let path=ui.devicesTable.addFile("this/is/the/path"+Math.random());
            path.disabled=Math.random()>0.5;
            path.serverPath=Math.random();
            path.contenuName="Hello world " +Math.random();
        }



    //fake datas en boucle...

    setInterval(function(){
        ui.log("Hello "+new Date().getTime().toString())
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
            if(Math.random()>0.95){
                casque.setApkIsOk(Math.random()>0.5);
            }
            casque.setDetails({
                ip:casque.ip,
                "some":{
                    random:Math.random(),
                    datas:Math.random()
                }
            })
        }


    },1000);


});









