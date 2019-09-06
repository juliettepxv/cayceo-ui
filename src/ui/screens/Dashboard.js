import Casque from "../components/Casque";

let infos= new Array("Disponible");

export default class Dashboard {
    constructor(){
        this.$main=$(require("./dashboard.html"));
        console.log(Casque.list);
        console.log(typeof Casque.list);
        for(let c in Casque.list){
            this.$main.find("#casques").append(Casque.list[c].$main);
        }

    }

}