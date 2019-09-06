import Casque from "./ui/components/Casque";
import Home from "./ui/screens/Home";
import Dashboard from "./ui/screens/Dashboard";
import Filters from "./ui/screens/Filters";
import Films from "./ui/screens/Films";
import Validation from "./ui/screens/Validation";
import Explication from "./ui/screens/Explication";
import Layout from "./ui/layout/Layout";
import SelectCasques from "./ui/screens/SelectCasques";


require("./main.less");
window.$=document.$ = window.jQuery = require("jquery");
window.$body=$("body");




//$("#main").append(home.$main);

let layout = new Layout();
layout.setVersion("1.17.3");
layout.setLogo("./medias/logo-cayceo.png");
$body.prepend(layout.$main);

let c1= Casque.addCasque(1);
let c2= Casque.addCasque(2);
let c3= Casque.addCasque(3);
let c4= Casque.addCasque(4);
let c5= Casque.addCasque(5);

c1._setState(Casque.STATE_DISPONIBLE);
c2._setState(Casque.STATE_EN_ATTENTE);
c3._setState(Casque.STATE_HORS_LIGNE);
c4._setState(Casque.STATE_EN_COURS);
c5._setState(Casque.STATE_DECHARGE);


let screens={};
screens["home"]=new Home();
screens["dashboard"]=new Dashboard();
screens["select-casques"]=new SelectCasques();
screens["filters"]=new Filters();
screens["films"]=new Films();
screens["validation"]=new Validation();
screens["explication"]=new Explication();






function showScreen(screen){
    document.title=screen;
    $("#main").empty().append(screens[screen].$main);
}

$body.on("click","[data-show-screen]",function(){
    showScreen($(this).attr("data-show-screen"));
});

showScreen("home");




/*
for(let i=1;i<=5;i++){
    let c=new Casque();
    c.setNumero("0"+i);
    $("body").append(c.$main);
}
*/



