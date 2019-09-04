import Film from "../components/Film";

let infos= new Array("Disponible");

export default class Films {
    constructor(){
        this.$main=$(require("./films.html"));

        for(let i=1;i<=5;i++){
            let c=new Film();
            c.setNumero(i);
            this.$main.find("#films").append(c.$main);
        }
    }
}