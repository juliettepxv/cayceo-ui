import css from '!!raw-loader!../../../dist/cayceoUi.css';

export default class Layout {
    constructor(){
        /**
         * @private
         * @type {jQuery.fn.init|*|jQuery|HTMLElement}
         */
        this.$main=$(require("./layout.html"));
        this._$logo=this.$main.find("#logo");
        this._loadAssets();
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

    /**
     * Charge la CSS et les icones SVG
     * @private
     */
    _loadAssets(){
        //css en style ou pas?
        if(!$("[this-is-the-css]").length){
            let $style=$("<style>"+css+"</style>");
            $body.append($style);
        }else{
            console.log("DO NOT inject css");
        }
        //svg injecté
        let $svg=$(require("../../../dist/icon.lib.html"));
        $body.append($svg);
    }
}