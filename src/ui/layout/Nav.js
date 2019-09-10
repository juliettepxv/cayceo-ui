export default class Nav {
    constructor(){
        this.$main=$(require("./nav.html"));

        this._$home=this.$main.find("[home]");
        this._$back=this.$main.find("[back]");
        this._$dashboard=this.$main.find("[dashboard]");
    }

    /**
     * Gère l'affichage du bouton home
     * @param {boolean} show Affiche ou pas le bouton
     * @param {boolean} showText Affiche ou pas le textez
     */
    displayHome(show=true,showText=false){
        this._$home.attr("show",show);
        this._$home.find("span").attr("show",showText);
    }
    displayBack(show=true,screenName){
        this._$back.attr("show",show);
        this._$back.attr("data-show-screen",screenName);
    }
    /**
     * Gère l'affichage du bouton dashboard (contoles)
     * @param {boolean} show Affiche ou pas le bouton
     * @param {boolean} showText Affiche ou pas le textez
     */
    displayDashboard(show=true,showText=false){
        this._$dashboard.attr("show",show);
        this._$dashboard.find("span").attr("show",showText);
    }

}