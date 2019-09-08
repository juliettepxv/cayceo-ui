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

//Layout------------------------------------

ui.layout.setVersion("1.17.3");
ui.layout.setLogo("./medias/logo-cayceo.png");

//screens-----------------------------------
/**
 *
 * @type {ScreenUi[]}
 */
//casques----------------------------------
let c1= ui.casques.addCasque(1);
let c2= ui.casques.addCasque(2);
let c3= ui.casques.addCasque(3);
let c4= ui.casques.addCasque(4);
let c5= ui.casques.addCasque(5);
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


let f1=ui.screens.films.addFilm();
f1.setTitle("La plage");
f1.setImage("medias/plage.jpg");
f1.addTag("Pédiatrie");
f1.addTag("Stress");

let f2=ui.screens.films.addFilm();
f2.setTitle("La forêt");
f2.setImage("medias/foret.jpg");
f2.addTag("Stress");

let f3=ui.screens.films.addFilm();
f3.setTitle("La plage");
f3.setImage("medias/plage.jpg");
f3.addTag("Violence");
f3.addTag("Drogue");

let f4=ui.screens.films.addFilm();
f4.setTitle("La plage");
f4.setImage("medias/plage.jpg");
f4.addTag("Sexe");
f4.addTag("Licornes");

let f5=ui.screens.films.addFilm();
f5.setTitle("La plage");
f5.setImage("medias/plage.jpg");
f5.addTag("Poneys");
f5.addTag("Arc en ciel");

c1.setFilm(f4);






