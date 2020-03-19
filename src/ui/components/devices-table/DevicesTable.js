import DeviceCol from "./DeviceCol";
import FileHeadCell from "./FileHeadCell";

export default class DevicesTable {
    constructor() {
        this.$main=$(require("./devices-table.html"));
        this.$filesCol=this.$main.find(".files-col");
        this.$devices=this.$filesCol.find(".devices")
        /**
         *
         * @type {FileHeadCell[]}
         */
        this.filesHeadCells={};
        /**
         *
         * @type {DeviceCol[]}
         */
        this.devicesById={};
        this.addDevice("régie",null);
    }

    logDevices(devicesString){
        this.$devices.text(devicesString);
    }

    /**
     * La colonne de la régie
     * @return {DeviceCol}
     */
    regie(){
        return this.devicesById["régie"];
    }

    /**
     * Renvoie true si un des devices est occupé
     * @returns {boolean}
     */
    isDoingSomething(){
        for(let device of this.devicesArray()){
            if(device.isDoingSomething()){
                return true;
            }
        }
        return false;
    }
    addDevice(identifier,casque){
        let device=this.devicesById[identifier];
        if(!device){
            let device=new DeviceCol(identifier,casque);
            this.devicesById[identifier]=device;
            this.$main.append(device.$main);
            for(let path in this.filesHeadCells){
                let fc=device.addFile(path);
                if(device.casque){
                    if(this.getFileHead(path).disabled === true){
                        fc.shouldExists=-1;
                    }else if(this.getFileHead(path).disabled === false){
                        fc.shouldExists=1;
                    }
                }

            }
        }
    }

    /**
     * Revoie la liste des devices
     * @returns {DeviceCol[]}
     */
    devicesArray(){
        let r=[];
        for (let d in this.devicesById){
            r.push(this.devicesById[d]);
        }
        return r;
    }
    /**
     * Revoie la liste des entetes de fichier sous forme de tableau
     * @returns {FileHeadCell[]}
     */
    filesHeadCellsArray(){
        let r=[];
        for (let f in this.filesHeadCells){
            r.push(this.filesHeadCells[f]);
        }
        return r;
    }

    /**
     * Ajoute un ficher à gérer.
     * Si le fichier était déjà géré ne fera rien
     * @param {string} path
     * @param {bool|null} disabled
     * @return {FileHeadCell}
     */
    addFile(path,disabled=null){
        let fileHC=this.filesHeadCells[path];
        if(!fileHC){
            console.warn("addFile",path);
            fileHC=new FileHeadCell(path);
            this.filesHeadCells[path]=fileHC;
            this.$filesCol.find(".files").prepend(fileHC.$main);
            for(let d in this.devicesById){
                this.devicesById[d].addFile(path);
            }
        }
        if(disabled!==null){
            fileHC.disabled=disabled;
        }
        return fileHC;
    }

    /**
     *
     * @param path
     * @returns {FileHeadCell}
     */
    getFileHead(path){
        this.addFile(path);
        return this.filesHeadCells[path];
    }
    /**
     * Renvoie un fichier donné sur un machine donnée
     * @param {string} deviceId ip ou "régie"
     * @param {string} path chemin du fichier
     * @param {boolean} strict si true ne renverra l'objet que si il existe
     * @returns {FileCell}
     */
    getDeviceFile(deviceId,path,strict=false){
        if(strict){
            let fc=this.devicesById[deviceId].filesCells[path];
           if(fc){
               return fc;
           }else{
               return false;
           }
        }else{
            this.addFile(path);
            return this.devicesById[deviceId].filesCells[path];
        }

    }

    /**
     * Teste si un fichier est encore utilisé quelque part, si ce n'est pas le cas va effacer la ligne.
     * L'opération se fait avec un petit delay pour éviter que la ligne ne soit recrée par un appel asynchrone
     * @param path
     */
    testFileStillInUse(path){
        let me=this;
        //setTimeout(function(){
            let d;
            for(d in me.devicesById){
                if(me.getDeviceFile(d,path).exists !== -1){
                    //est utilisé
                    me.getFileHead(path).isDeleted=false;
                    return;
                }
            }
            //console.warn("delete file "+path)
            //n'est plus utilisé nulle part
            me.getFileHead(path).isDeleted=true;
            /*
            me.filesHeadCells[path].$main.remove();
            delete me.filesHeadCells[path];
            for(d in me.devicesById){
                me.devicesById[d].filesCells[path].$main.remove();
                delete me.devicesById[d].filesCells[path];
            }
            */
        //},5000);


    }

}