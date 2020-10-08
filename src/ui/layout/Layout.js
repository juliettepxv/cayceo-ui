import css from '!!raw-loader!../../../dist/cayceoUi.css';

export default class Layout {
    constructor(){
        /**
         * @private
         * @type {jQuery.fn.init|*|jQuery|HTMLElement}
         */
        this.$main=$(require("./layout.html"));
        this._$logo=this.$main.find("#logo");
        this._$qrcode=this.$main.find("#qrcode");
        this._$modeEmploi=this.$main.find("[action='open-doc']");
        this._$contenuUpdate=this.$main.find("#contenu-update");
        this._loadAssets();
        this.setContenuUpdate(null);
        this.version="";
        this.machineName="";
    }
    /**
     * Permet de d'afficher un numéro de version'
     * @param version
     */
    setVersion(version){
        this.version=version;
        this.$main.find("#version>div").text(`Version ${this.version} / ${this.machineName}`)
    }
    setMachineName(machineName){
        this.machineName=machineName;
        this.$main.find("#version>div").text(`Version ${this.version} / ${this.machineName}`)
    }

    /**
     * Affiche une info relative aux mises à jour de contenus
     * @param message
     */
    setContenuUpdate(message){
        if(!message){
            this._$contenuUpdate.css("display","none");
        }else{
            this._$contenuUpdate.css("display","");
        }
        this._$contenuUpdate.find(">div").text(message);
    }

    /**
     * Permet de définir un message à afficher concernant les MAJ de l'app electron
     * @param {string} string message à afficher
     * @param {boolean} shouldRestart si true, au click installera et redemarera l'application
     */
    setVersionUpdateMessage(string,shouldRestart=false){
        let $el=this.$main.find("#version-update>div");
        $el.text(string);
        if(shouldRestart){
            $el.attr("action","emit");
            $el.attr("emit-name",CMD.INSTALL_AND_REBOOT);
        }
    }
    /**
     * Permet de définir le logo
     * @param imgUrl
     */
    setLogo(imgUrl){
        this._$logo.find("img").attr("src",imgUrl);
    }
    /**
     * Permet de définir le qrCode
     * @param imgUrl
     */
    setQrcode(imgUrl){
        this._$qrcode.addClass("active");
        this._$qrcode.find("img").attr("src",imgUrl);
        ui.popIns.Qrcode.setImg(imgUrl);
    }
    enableQrCode(enable){
        if(enable){
            this._$qrcode.addClass("enabled");
        }else{
            this._$qrcode.removeClass("enabled");
        }
    }
    enableModeEmploi(enable){
        if(enable){
            this._$modeEmploi.addClass("enabled");
        }else{
            this._$modeEmploi.removeClass("enabled");
        }
    }
    enableCasqueRemotreControl(enable){
        this.$main.attr("casques-remote-control-enabled",enable?"1":"");
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