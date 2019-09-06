export default class Film {
    constructor(){
        this.$main=$(require("./film.html"));
        this.title="";
        this.image="";
    }
    setTitle(title){
        this.title=title;
        this.$main.find(".title").text(title);
    }
    setImage(imgUrl){
        this.image=imgUrl;
        this.$main.find("img").attr("src",imgUrl);
    }
    addTag(tag){
        this.$main.find(".indications").append($(`<div class='indication'>${tag}</div>`));
    }
}