import Casque from "../components/Casque";

let infos= new Array("Disponible");

export default class SelectCasques {
    constructor(){
        this.$main=$(require("./select-casques.html"));

        for(let i=1;i<=5;i++){
            let c=new Casque(i);
            this.$main.find("#casques").append(c.$main);
        }



    }
}