import Ui from "../../Ui";

export default class FileCell{




    /**
     * Un fichier sur un device donné
     * @param {string} path chemin relatif vers le fichier
     * @param {DeviceCol} deviceCol
     */
    constructor(path,deviceCol) {
        /**
         * @type {string}
         */
        this.path=path;
        /**
         *
         * @type {DeviceCol}
         */
        this.deviceCol=deviceCol;
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$main=$(require("./file-cell.html"));
        this.$main.attr("title",path);
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$exists=this.$main.find(".exists");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$shouldExists=this.$main.find(".shouldExists");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$toDo=this.$main.find(".toDo");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$doing=this.$main.find(".doing");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$errorsTry=this.$main.find(".errorsTry");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$copyPercent=this.$main.find(".copyPercent");
        /**
         *
         * @type {number}
         */
        this._exists=0;
        /**
         *
         * @type {number}
         */
        this._shouldExists=0;
        /**
         * Action en cours d'execution
         * @type {number}
         */
        this._toDo=0;
        /**
         * Action en cours d'execution
         * @type {number}
         */
        this._doing=0;
        /**
         * pourcentage des opérations de copie
         * @type {number}
         * @private
         */
        this._copyPercent=0;
        /**
         * Quand une erreur se produit est palcé sur une valeur qui sera décrémentée
         * Quand la valeur est égale à zéro alors la todo peut se faire
         * @type {number}
         * @private
         */
        this._errorsTry=0;

        this.refreshValues();
        this._droidWorking=false;





    }

    refreshValues(){
        switch (true) {
            case this.exists===this.shouldExists:
                this._toDo=0;
                break;

            case this.exists=== -1 && this.shouldExists=== 1:
                this._toDo=1; //copier
                break;

            case this.exists=== 1 && this.shouldExists=== -1:
                this._toDo=-1; //effacer
                break;
        }
        this.$main.attr("exists",this.exists);
        this.$main.attr("shouldExists",this.shouldExists);
        this.$main.attr("toDo",this.toDo);
        this.$main.attr("doing",this.doing);

        this.$exists.text(this.exists);
        this.$shouldExists.text(this.shouldExists);
        this.$toDo.text(this.toDo);
        this.$doing.text(this.doing);
        this.$errorsTry.text(this.errorsTry);


        //teste si tous les contenus du device sont ready
        let allReady=true;
        for (let path in this.deviceCol.filesCells){
            let fc=this.deviceCol.filesCells[path];
            if(fc.shouldExists === 1 && fc.exists <= 0){
                allReady=false;
            }
        }
        if(this.casque()){
            //console.warn("allReady",allReady)
            this.casque().setContenusReady(allReady);
        }else{
            this.deviceCol.contenusReady=allReady;
            //régie donc faut sans doute faire un truc mais quoi? :)
        }


    }


    set exists(value) {
        let oldValue=this._exists;
        let changed=value !== this.exists;
        this._exists = value;
        this.refreshValues();
        if(this._exists===-1){
            ui.devicesTable.testFileStillInUse(this.path);
        }
        if(changed){
            if(value === 1){
                ui.emit(Ui.EVENT_FILE_EXISTS,this);
                if(oldValue===-1){
                    ui.emit(Ui.EVENT_FILE_EXISTS_NEW,this);
                }
            }else if(value === -1){
                ui.emit(Ui.EVENT_FILE_DELETED,this);
            }
        }
    }
    get exists() {
        return this._exists;
    }

    /**
     * @param value
     */
    set shouldExists(value) {
        this._shouldExists = value;
        if(this._shouldExists===-1){

            //si c'est la régie alors le fichier ne doit pas exister sur les casques non plus
            if(!this.deviceCol.casque){
                for(let d in ui.devicesTable.devicesById){
                    if(ui.devicesTable.devicesById[d].casque){
                        ui.devicesTable.getDeviceFile(d,this.path).shouldExists=-1;
                    }
                }
            }

        }
        this.refreshValues();
    }
    get shouldExists() {
        return this._shouldExists;
    }
    set toDo(value) {
        alert("toDo est readonly !!!!")
    }
    get toDo() {
        return this._toDo;
    }

    get doing() {
        return this._doing;
    }
    set doing(value) {

        if(value===1 && this._doing===-2){
            console.error("reset doing 0")
        }
        this._doing = value;
        this.refreshValues();
    }

    get errorsTry() {
        return this._errorsTry;
    }

    set errorsTry(value) {
        this._errorsTry = value;
        this.refreshValues();
    }

    set copyPercent(value) {
        this._copyPercent = Number(value);
        //this.$copyPercent.text(this._copyPercent.toFixed(2))
        this.$copyPercent.css("width",this._copyPercent+"%");


        let mainFile=this.fileHead();
        let casque=this.casque();
        if(!casque){
            //progression du dwd
            ui.layout.setContenuUpdate(`Télécharge ${mainFile.contenuName} ${value}%`);
        }else{
            ui.layout.setContenuUpdate(`copie ${mainFile.contenuName} ${value}% sur ${casque.numero}`);
            casque.setCopyProgress(Number(value));
        }
        if(this._copyPercent===100){
            this.$copyPercent.css("width","0%");
            ui.layout.setContenuUpdate(null);
        }

    }

    get droidWorking() {
        return this._droidWorking;
    }

    set droidWorking(value) {
        this._droidWorking = value;
        if(value){
            this.$main.attr('droidWorking',1);
        }else{
            this.$main.attr('droidWorking',"");
        }
    }

    /**
     * La référence au fichier principal dans le tableau
     * @return {FileHeadCell}
     */
    fileHead(){
        return ui.devicesTable.getFileHead(this.path);
    }
    /**
     * Racourcis: Renvoie le contenu relatif à ce fichier (si il existe)
     * @return {Contenu}
     */
    contenu(){
        return this.fileHead().contenu;
    }

    /**
     * Racourcis: renvoie si le fichier est marqué comme thumbnail
     * @return {boolean}
     */
    isThumbnail(){
        return this.fileHead().isThumbnail;
    }

    /**
     * Racourcis: renvoie si le fichier est marqué comme étant un contenu
     * @return {*}
     */
    isContenu(){
        return this.fileHead().isContenu;
    }
    /**
     * Racourcis: renvoie si le fichier est marqué comme qrCode
     * @return {boolean}
     */
    isQrcode(){
        return this.fileHead().isQrCode;
    }
    /**
     * Racourcis: renvoie si le fichier est marqué comme logo
     * @return {boolean}
     */
    isLogo(){
        return this.fileHead().isLogo;
    }
    /**
     * Racourcis: renvoie si le fichier est marqué comme mode d'emploi
     * @return {boolean}
     */
    isModeEmploi(){
        return this.fileHead().isModeEmploi;
    }

    /**
     * Racourcis: renvoie si le fichier est marqué comme apk
     * @return {boolean}
     */
    isApk(){
        return this.fileHead().isApk;
    }

    /**
     * Racourcis: renvoie le casque
     * @return {Casque}
     */
    casque(){
        return this.deviceCol.casque;
    }

    /**
     * Racourcis: true si le devices est la régie
     */
    isRegie(){
       return this.deviceCol.isRegie();
    }
    /**
     * Racourcis: true si le devices est un casque
     */
    isCasque(){
        return this.deviceCol.isCasque();
    }



}