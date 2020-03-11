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
        /**
         * @private
         * @type {jQuery|HTMLElement}
         */
        this.$ip=this.$main.find(".ip");
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





        if(!casque){
            this.$main.addClass("is-regie");
        }else{
            this.$ip.text(this.id);
        }


        this.filesCells={};


        this._ip="...";
        this._online=null;
        this._apk=null;
        this._plugged=null;
        this._apk=null;
        this._contenusReady=null;

        if(this.casque){
            this.$name.text(this.casque.numero);
            this.$main.css("order",this.casque.numero);
            this.ip=this.id;
        }else{
            this.$name.text(this.id);
        }

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
            if(this.filesCells[path].doing!==0){
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
    }




}