import Casque from "../components/Casque";

export default class Dashboard {
    constructor(){
        this.$main=$(require("./dashboard.html"));

        for(let i=1;i<=5;i++){
            let c=new Casque();
            c.setNumero(i);
            this.$main.find("#casques").append(c.$main);
        }



    }
}