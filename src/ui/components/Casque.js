export default class Casque {
    constructor(){
        this.$main=$(require("./casque.html"));
    }
    setNumero(numero){
        this.$main.find(".nb").text(numero);
        this.$main.attr("casque",numero);
    }
}