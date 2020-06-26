import FileCell from "./FileCell";
export default class DeviceCol{



    /**
     *
     * @param {String} id Addresse ip d'un casque ou "régie"
     * @param {Casque} casque Le casque dans l'ui
     */
    constructor(id,casque) {
        /**
         * Addresse ip d'un casque ou "régie"
         * @type {String}
         */
        this.id=id;
        /**
         *
         * @type {Casque}
         */
        this.casque=casque;

        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$main=$(require("./device-col.html"));
        this.$main.find("[ip]").attr("ip",this.id);
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$ip=this.$main.find(".ip");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$realip=this.$main.find(".realip");
        /**
         * @private
         * @type {jQuery|[]}
         */
        this.$adbstatus=this.$main.find(".adbstatus");
        /**
         * @private
         * @type {jQuery|[]}
         */
        this.$disk=this.$main.find(".disk");
        /**
         * @private
         * @type {jQuery|[]}
         */
        this.$diskSize=this.$disk.find(".size");
        /**
         * @private
         * @type {jQuery|[]}
         */
        this.$diskUsed=this.$disk.find(".used");
        /**
         * @private
         * @type {jQuery|[]}
         */
        this.$diskAvailable=this.$disk.find(".available");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$name=this.$main.find(".name");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$files=this.$main.find(".files");

        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$apkVersion=this.$main.find(".apkVersion");
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$icons=this.$main.find(".icons");
        /**
         * @private
         */
        this._$$icons={
            $plugged:this.$icons.find(".plugged"),
            $online:this.$icons.find(".online"),
            $apk:this.$icons.find(".apk"),
            $contenusReady:this.$icons.find(".contenusReady"),
        }

        if(!casque){
            this.$main.addClass("is-regie");
        }else{
            this.$ip.text(this.id);
        }

        this.filesCells={};

        this._ip="...";
        this._realip="...";
        this._adbstatus="...";
        this._online=null;
        this._plugged=null;
        this._apk=null;
        this._contenusReady=null;
        this._apkVersion="v?.???";

        if(this.casque){
            this.$name.text(this.casque.numero);
            this.$main.css("order",this.casque.numero);
            this.ip=this.id;
            this.realip="unknown";
        }else{
            this.$name.text(this.id);
        }



    }

    /**
     * Renvoie true si c'est la régie
     * @return {boolean}
     */
    isRegie(){
        return this.casque?false:true;
    }
    /**
     * Renvoie true si c'est un casque
     * @return {boolean}
     */
    isCasque(){
        return !this.isRegie()
    }

    /**
     * Les fichiers du device sous forme de tableau
     * @return {FileCell[]}
     */
    filesCellsArray(){
        let r=[];
        for(let path in this.filesCells){
            r.push(this.filesCells[path]);
        }
        return r;
    }

    /**
     *
     * @param path
     * @return {FileCell}
     */
    addFile(path){
        let file=this.filesCells[path];
        if(!file){
            file=new FileCell(path,this);
            this.filesCells[path]=file;
            this.$files.prepend(file.$main);
            if(this.casque){
                //si le fichier n'est pas sensé exister sur la régie il ne doit pas exister sur le casque non plus
                if(ui.devicesTable.getDeviceFile("régie",path).shouldExists === -1){
                    file.shouldExists = -1;
                }
            }
        }
        return file;
    }

    /**
     * Renvoie true si le device est branché (ou si il est la régie)
     * @returns {boolean}
     */
    isUsable(){
        if(!this.casque){
            return true;
        }
        return this.casque.isPlugged();
    }

    /**
     * Renvoie true si une opération "doing" est en cours sur un des fichiers
     * @returns {boolean}
     */
    isDoingSomething(){
        for (let path in this.filesCells){
            if(this.filesCells[path].doing !==0 && this.filesCells[path].doing !==-2){
                return true;
            }
        }
        return false;
    }

    /**
     * Met tous les doing à zéro
     */
    resetDoings(){
        for(let path in this.filesCells){
            this.filesCells[path].doing=0;
        }
    }



    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this.$main.attr("online",value?"1":"0");
    }

    get plugged() {
        return this._plugged;
    }

    set plugged(value) {
        this._plugged = value;
        this.$main.attr("plugged",value?"1":"0");
    }

    get apk() {
        return this._apk;
    }

    set apk(value) {
        this._apk = value;
        this.$main.attr("apk",value?"1":"0");
    }

    get contenusReady() {
        return this._contenusReady;
    }

    set contenusReady(value) {
        this._contenusReady = value;
        this.$main.attr("contenusReady",value?"1":"0");
    }

    set ip(value) {
        this._ip = value;
        this.$ip.text(this._ip);
        this._testIps();
    }
    set realip(value) {
        this._realip = value;
        if(!this._realip){
            this._realip="no ip"
        }
        this.$realip.text(this._realip);
        this._testIps();
    }

    /**
     * Fait réagit l'affichage à la cohérence des ips
     * @private
     */
    _testIps(){

        this.$realip.removeClass("error");
        this._$$icons.$online.attr("state","");

        switch (true) {

            case this._realip === "unknown":
                break;

            case this._realip === "no ip":
            case this.isCasque() && this._realip !== this._ip:

                this.$realip.addClass("error");
                this._$$icons.$online.attr("state","error");
                break;

        }

    }
    set adbstatus(value) {
        this._adbstatus = value;
        this.$adbstatus.text(this._adbstatus);
        this.$adbstatus.attr("state","");
        this._$$icons.$plugged.attr("state","");
        switch (this._adbstatus) {
            case 'unknown':
            case '':
                this.$adbstatus.attr("state","");
                break;

            case 'device':
                this.$adbstatus.attr("state","success");
                break;

            case 'connecting':
            default:
                this.$adbstatus.attr("state","error");
                this._$$icons.$plugged.attr("state","error");

        }
    }

    /**
     * Affiche l'etat du disque
     * @param {{label:string,available:string,size:string,used:string}} obj
     */
    set diskSpace(obj){
        this.$diskAvailable.text("?");
        this.$diskSize.text("?");
        this.$diskUsed.text("?");
        if(obj){
            this.$diskAvailable.text(obj.available);
            this.$diskSize.text(obj.size);
            this.$diskUsed.text(obj.used);
        }
        this.$diskAvailable.attr("state",obj.label);
    }


    get apkVersion() {
        return this._apkVersion;
    }

    set apkVersion(value) {
        this._apkVersion = value;
        this.$apkVersion.text(this._apkVersion);
    }





}