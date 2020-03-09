export default class FileCell {


    /**
     *
     * @param path
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
        this.$main=$(require("./file-cell.html"));
        this.$main.attr("title",path);
        this.$exists=this.$main.find(".exists");
        this.$shouldExists=this.$main.find(".shouldExists");
        this.$toDo=this.$main.find(".toDo");
        this.$doing=this.$main.find(".doing");
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

        this.refreshValues();

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


        //teste si tous les contenus du device sont ready
        let allReady=true;
        for (let path in this.deviceCol.filesCells){
            let fc=this.deviceCol.filesCells[path];
            if(fc.shouldExists === 1 && fc.exists <= 0){
                allReady=false;
            }
        }
        if(this.deviceCol.casque){
            console.warn("allReady",allReady)
            this.deviceCol.casque.setContenusReady(allReady);
        }else{
            //régie donc faut sans doute faire un truc mais quoi? :)
        }


    }


    set exists(value) {
        this._exists = value;
        this.refreshValues();
        if(this._exists===-1){
            ui.devicesTable.testFileStillInUse(this.path);
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
        this._doing = value;
        this.refreshValues();
    }

    set copyPercent(value) {
        this._copyPercent = Number(value);
        this.$copyPercent.text(this._copyPercent.toFixed(2))
        this.$copyPercent.css("width",this._copyPercent+"%");
        if(this._copyPercent===100){
            this.$copyPercent.css("width","0%");
        }

        let headFile=ui.devicesTable.getFileHead(this.path);
        if(!this.deviceCol.casque){
            //progression du dwd
            ui.layout.setContenuUpdate(`dwd ${headFile.contenuName} ${value}%`);
        }else{
            ui.layout.setContenuUpdate(`copy ${headFile.contenuName} ${value}% to ${this.deviceCol.casque.numero}`);
            this.deviceCol.casque.setCopyProgress(Number(value));
        }

    }



}