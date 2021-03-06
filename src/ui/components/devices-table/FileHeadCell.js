const filesize=require("filesize");

export default class FileHeadCell {
    set bytes(value) {
        let num=Number(value);
        this._bytes = num;
        if(!isNaN(num)){
            this.$main.find(".bytes").text(filesize(num));
        }
    }



    constructor(path) {
        this.path=path;
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$main=$(require("./file-head-cell.html"));
        this.$main.find(".path").text(path);
        this.$main.attr("name",path);
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$disabled=this.$main.find(".disabled");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$contenuName=this.$main.find(".contenuName");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$serverPath=this.$main.find(".serverPath");
        this._contenuName="";
        this._serverPath="";
        /**
         * Si true alors le fichier devra exister sur la régie uniquement
         * @type {boolean}
         */
        this._isLogo=false;
        /**
         * Si true alors le fichier devra exister sur la régie uniquement
         * @type {boolean}
         */
        this._isModeEmploi=false;
        /**
         * L'ancien player APK (remplacé par le service)
         * @deprecated
         * @type {boolean}
         */
        this._isApk=false;
        this._isServiceApk=false;
        this._isVideoPlayerApk=false;
        this._isHomeScreenApk=false;
        /**
         * Si true on empechera la désinstallation de cet APK
         * @type {boolean}
         */
        this.preventUnistall=false;
        /**
         * Si true alors le fichier devra exister sur la régie uniquement
         * @type {boolean}
         */
        this._isThumbnail=false;

        this._isDeleted=false;

        /**
         * Le contenu json relatif
         * @type {Contenu|null}
         */
        this.contenu=null;

        this._bytes=0;

        this._isDoc=false;

        let regexApk = /.*\.apk/gmi;
        this.isMimeApk=regexApk.test(this.path);
        if(this.isMimeApk){
            this.$main.attr("is-mime-apk","1")
        }

    }

    /**
     * Dit si il faut désinstaller le fichier ou simplement le supprimer
     * @return {boolean}
     */
    shouldBeUninstalled(){
        if(this.preventUnistall){
            return false;
        }
        if(this.isMimeApk){
            switch (true) {
                case this.isServiceApk:
                case this.isHomeScreenApk:
                case this.isVideoPlayerApk:
                    return false;
                default:
                    return true;
            }
        }
        return false;
    }

    /**
     * Liste de fichiers sur les devices
     * @return {FileCell[]}
     */
    fileCellsArray(){
        let r=[];
        for(let device of ui.devicesTable.devicesArray()){
            r.push(ui.devicesTable.getDeviceFile(device.id,this.path));
        }
        return r;
    }

    set serverPath(value) {
        this._serverPath = value;
        //this.$serverPath.text(this._serverPath);
    }
    get serverPath(){
        return this._serverPath;
    }
    set contenuName(value) {
        this._contenuName = value;
        this.$contenuName.text(this._contenuName);
    }
    get contenuName(){
        return this._contenuName;
    }
    get isDeleted() {
        return this._isDeleted;
    }

    set isDeleted(value) {
        this._isDeleted = value;
        this.$main.attr("is-deleted",value?'1':'');
    }
    get disabled(){
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        switch (true) {
            case this._disabled===null:
                this.$disabled.text("???");
                this.$main.attr("is-disabled","0");
                break;

            case this._disabled===false:
                this.$disabled.text("actif");
                this.$main.attr("is-disabled","-1");
                break;

            case this._disabled===true:
                this.$disabled.text("désactivé");
                this.$main.attr("is-disabled","1");
            break;
        }

        //met à jour sur les casques aussi du coup
        if(this._disabled === true || this._disabled === false){
            for(let deviceId in ui.devicesTable.devicesById){
                if(ui.devicesTable.devicesById[deviceId].casque){
                    ui.devicesTable.getDeviceFile(deviceId,this.path).shouldExists=this._disabled?-1:1;
                }
            }
        }



    }

    get isContenu() {
        return this._isContenu;
    }
    set isContenu(value) {
        this._isContenu = value;
        this.$main.attr("is-contenu",value?'1':'');
    }

    get isQrCode(){
        return this._isQrCode;
    }
    set isQrCode(value) {
        if(value){
            //désactive les autres LOGO
            for(let file of ui.devicesTable.filesHeadCellsArray()){
                if(file.isQrCode){
                    file.isQrCode=false;
                }
            }
            //présent sur la régie, pas sur les casques
            this._shouldExistsOnRegieOnly();
        }else{
            //va effacer le vieux qrcode
            for(let fc of this.fileCellsArray()){
                fc.shouldExists=-1;
            }
        }
        this.$contenuName.text(value?'QR Code':'old QR Code');
        this.$main.attr("is-doc",value?'1':'');
        this._isQrCode = value;
    }
    get isDoc() {
        return this._isDoc;
    }
    set isDoc(value) {
        this.$main.attr("is-doc",value?'1':'');
    }
    get isLogo() {
        return this._isLogo;
    }
    set isLogo(value) {
        if(value){
            //désactive les autres LOGO
            for(let file of ui.devicesTable.filesHeadCellsArray()){
                if(file.isLogo){
                    file.isLogo=false;
                }
            }
            //présent sur la régie, pas sur les casques
            this._shouldExistsEveryWhere();
        }else{
            //va effacer le vieux logo
            for(let fc of this.fileCellsArray()){
                fc.shouldExists=-1;
            }
        }
        this.$contenuName.text(value?'logo':'old logo');
        this.$main.attr("is-doc",value?'1':'');
        this._isLogo = value;
    }

    get isModeEmploi() {
        return this._isModeEmploi;
    }
    set isModeEmploi(value) {
        if(value){
            //désactive les autres
            for(let file of ui.devicesTable.filesHeadCellsArray()){
                if(file.isModeEmploi){
                    file.isModeEmploi=false;
                }
            }
            //présent sur la régie, pas sur les casques
            this._shouldExistsOnRegieOnly();
        }else{
            //va effacer le vieux mode d'emploi
            for(let fc of this.fileCellsArray()){
                fc.shouldExists=-1;
            }
        }
        this.$contenuName.text(value?'mode emploi':'old mode emploi');
        this.$main.attr("is-doc",value?'1':'');
        this._isModeEmploi = value;
    }

    /**
     * @deprecated
     * @return {boolean}
     */
    get isApk() {
        return this._isApk;
    }

    /**
     * @deprecated
     * @param value
     */
    set isApk(value) {
        if(value){
            //désactive les autres LOGO
            for(let file of ui.devicesTable.filesHeadCellsArray()){
                if(file.isApk){
                    file.isApk=false;
                }
            }
            //présent sur la régie, pas sur les casques
            this._shouldExistsOnRegieOnly();
        }else{
            //va effacer le vieux apk
            for(let fc of this.fileCellsArray()){
                fc.shouldExists=-1;
            }
        }
        this.$contenuName.text(value?'apk':'old apk');
        this.$main.attr("is-doc",value?'1':'');
        this._isApk = value;
    }

    get isServiceApk() {
        return this._isServiceApk;
    }
    set isServiceApk(value) {
        if(value){
            this.contenuName="Service APK";
            this.preventUnistall=true;
            //désactive les autres LOGO
            for(let file of ui.devicesTable.filesHeadCellsArray()){
                if(file.isServiceApk){
                    file.isServiceApk=false;

                }
            }
            //présent sur la régie, pas sur les casques
            this._shouldExistsEveryWhere();
        }else{
            //va effacer le vieux apk
            for(let fc of this.fileCellsArray()){
                fc.shouldExists=-1;
            }
        }
        this.$contenuName.text(value?'service apk':'old service apk');
        this.$main.attr("is-doc",value?'1':'');
        this._isServiceApk = value;
    }


    get isHomeScreenApk() {
        return this._isHomeScreenApk;
    }
    set isHomeScreenApk(value) {
        if(value){
            this.contenuName="Home screen APK";
            this.preventUnistall=true;
            for(let file of ui.devicesTable.filesHeadCellsArray()){
                if(file.isHomeScreenApk){
                    file.isHomeScreenApk=false;
                }
            }
            this._shouldExistsEveryWhere();
        }else{
            for(let fc of this.fileCellsArray()){
                fc.shouldExists=-1;
            }
        }
        this.$contenuName.text(value?'home screen apk':'old home screen apk');
        this.$main.attr("is-doc",value?'1':'');
        this._isHomeScreenApk = value;
    }

    get isVideoPlayerApk() {
        return this._isVideoPlayerApk;
    }
    set isVideoPlayerApk(value) {
        if(value){
            this.contenuName="Vidéo player APK";
            this.preventUnistall=true;
            for(let file of ui.devicesTable.filesHeadCellsArray()){
                if(file.isVideoPlayerApk){
                    file.isVideoPlayerApk=false;
                }
            }
            this._shouldExistsEveryWhere();
        }else{
            for(let fc of this.fileCellsArray()){
                fc.shouldExists=-1;
            }
        }
        this.$contenuName.text(value?'video player apk':'old video player apk');
        this.$main.attr("is-doc",value?'1':'');
        this._isVideoPlayerApk = value;
    }




    get isThumbnail() {
        return this._isThumbnail;
    }

    set isThumbnail(value) {
        this._isThumbnail = value;
        this.$main.attr("is-thumbnail",value?'1':'');
        this._isThumbnail = value;
        //présent sur la régie, pas sur les casques
        this._shouldExistsOnRegieOnly();
    }

    /**
     * Marque le fichier comme ne devant être présent que sur la régie
     * @private
     */
    _shouldExistsOnRegieOnly(){
        for(let fc of this.fileCellsArray()){
            if(fc.casque()){
                fc.shouldExists=-1;
            }else{
                fc.shouldExists=1;
            }
        }
    }
    _shouldExistsEveryWhere(){
        for(let fc of this.fileCellsArray()){
            fc.shouldExists=1;
        }
    }

}