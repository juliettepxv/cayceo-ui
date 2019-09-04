export default class Film {
    constructor(){
        this.$main=$(require("./film.html"));
    }
    setNumero(numero){
        this.$main.find("title").text(numero);
        this.$main.attr("film",numero);
    }
}