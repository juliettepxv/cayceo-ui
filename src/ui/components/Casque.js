export default class Casque {
    constructor(){
        this.$main=$(require("./casque.html"));
    }
    setNumero(numero){
        this.$main.find("span").text(numero)
        this.$main.attr("casque",numero);
    }
}