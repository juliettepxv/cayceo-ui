import Casque from "./ui/components/Casque";
import Home from "./ui/screens/Home";
import Dashboard from "./ui/screens/Dashboard";
import Filters from "./ui/screens/Filters";
import Films from "./ui/screens/Films";
import Validation from "./ui/screens/Validation";
import Explication from "./ui/screens/Explication";


require("./main.less");
window.$=document.$ = window.jQuery = require("jquery");
window.$body=$("body");




//$("#main").append(home.$main);

let screens={};
screens["home"]=new Home();
screens["dashboard"]=new Dashboard();
screens["filters"]=new Filters();
screens["films"]=new Films();
screens["validation"]=new Validation();
screens["explication"]=new Explication();



function showScreen(screen){
    $("#main").empty().append(screens[screen].$main);
}

$body.on("click","[data-show-screen]",function(){
    showScreen($(this).attr("data-show-screen"));
})

showScreen("explication");



/*
for(let i=1;i<=5;i++){
    let c=new Casque();
    c.setNumero("0"+i);
    $("body").append(c.$main);
}
*/



