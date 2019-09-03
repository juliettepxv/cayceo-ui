import Casque from "./ui/Casque";
import Home from "./ui/screens/Home";
import Dashboard from "./ui/screens/Dashboard";

require("./main.less");
window.$=document.$ = window.jQuery = require("jquery");
window.$body=$("body");




//$("#main").append(home.$main);

let screens={};
screens["home"]=new Home();
screens["dashboard"]=new Dashboard();
//screens["selection-casque"]=selectionCasque;



function showScreen(screen){
    $("#main").empty().append(screens[screen].$main);
}

$body.on("click","[data-show-screen]",function(){
    showScreen($(this).attr("data-show-screen"));
})

showScreen("home");



/*
for(let i=1;i<=5;i++){
    let c=new Casque();
    c.setNumero("0"+i);
    $("body").append(c.$main);
}
*/



