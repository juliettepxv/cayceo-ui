import Casque from "../Casque";

export default class Dashboard {
    constructor(){
        this.$main=$(require("./dashboard.html"));

        for(let i=1;i<=5;i++){
            let c=new Casque();
            c.setNumero("0"+i);
            this.$main.append(c.$main);
        }



    }
}