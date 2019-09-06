import Casque from "./ui/components/Casque";
import Home from "./ui/screens/Home";
import Dashboard from "./ui/screens/Dashboard";
import Filters from "./ui/screens/Filters";
import Films from "./ui/screens/Films";
import Validation from "./ui/screens/Validation";
import Explication from "./ui/screens/Explication";
import Layout from "./ui/layout/Layout";
import SelectCasques from "./ui/screens/SelectCasques";
import ScreenUi from "./ui/screens/ScreenUi";
import CasqueList from "./ui/components/CasqueList";


require("./main.less");
window.$=document.$ = window.jQuery = require("jquery");
window.$body=$("body");




//$("#main").append(home.$main);

//Layout------------------------------------
let layout = new Layout();
layout.setVersion("1.17.3");
layout.setLogo("./medias/logo-cayceo.png");
$body.prepend(layout.$main);


//screens-----------------------------------
/**
 *
 * @type {ScreenUi[]}
 */
let screens={};
screens["home"]=new Home();
screens["dashboard"]=new Dashboard();
screens["select-casques"]=new SelectCasques();
screens["filters"]=new Filters();
let films=screens["films"]=new Films();
screens["validation"]=new Validation();
screens["explication"]=new Explication();

//casques----------------------------------
let casques=new CasqueList();
let c1= casques.addCasque(1);
let c2= casques.addCasque(2);
let c3= casques.addCasque(3);
let c4= casques.addCasque(4);
let c5= casques.addCasque(5);
c1._setState(Casque.STATE_DISPONIBLE);
c2._setState(Casque.STATE_EN_ATTENTE);
c3._setState(Casque.STATE_HORS_LIGNE);
c4._setState(Casque.STATE_EN_COURS);
c5._setState(Casque.STATE_DECHARGE);


setInterval(function(){
    for(let c in casques.list){
        if(Math.random()>0.95){
            let items=[
                Casque.STATE_DISPONIBLE,
                Casque.STATE_EN_ATTENTE,
                Casque.STATE_HORS_LIGNE,
                Casque.STATE_EN_COURS,
                Casque.STATE_DECHARGE,
            ];
            casques.list[c]._setState(
                items[Math.floor(Math.random()*items.length)]
            );
        }
        if(Math.random()>0.95){
            casques.list[c].setBattery(Math.round(Math.random()*100));
        }
        if(Math.random()>0.95){
            casques.list[c].setBatteryPlugged(Math.random()>0.5);
        }
    }
},1000);


//films-----------------------------------


let f1=films.addFilm();
f1.setTitle("La plage");
f1.setImage("medias/plage.jpg");
f1.addTag("Pédiatrie");
f1.addTag("Stress");

let f2=films.addFilm();
f2.setTitle("La forêt");
f2.setImage("medias/foret.jpg");
f2.addTag("Stress");

let f3=films.addFilm();
f3.setTitle("La plage");
f3.setImage("medias/plage.jpg");
f3.addTag("Violence");
f3.addTag("Drogue");

let f4=films.addFilm();
f4.setTitle("La plage");
f4.setImage("medias/plage.jpg");
f4.addTag("Sexe");
f4.addTag("Licornes");

let f5=films.addFilm();
f5.setTitle("La plage");
f5.setImage("medias/plage.jpg");
f5.addTag("Poneys");
f5.addTag("Arc en ciel");

c1.setFilm(f4);





function showScreen(screen){
    document.title=screen;
    $("#main").empty().append(screens[screen].$main);
    screens[screen].emit(ScreenUi.EVENT_ADDED_TO_STAGE);
}

$body.on("click","[data-show-screen]",function(){
    showScreen($(this).attr("data-show-screen"));
});

showScreen("home");




