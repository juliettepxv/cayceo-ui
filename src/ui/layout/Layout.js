export default class Layout {
    constructor(){
        this.$main=$(require("./layout.html"));
        this._$logo=this.$main.find("#logo");
    }
    /**
     * Permet de d'afficher un numéro de version'
     * @param version
     */
    setVersion(version){
        this.$main.find("#version>div").text(`Version ${version} / ui-${VERSION}`)
    }
    /**
     * Permet de définir le logo
     * @param imgUrl
     */
    setLogo(imgUrl){
        this._$logo.find("img").attr("src",imgUrl);
    }
}