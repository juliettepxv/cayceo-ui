import FileCell from "./FileCell";
export default class DeviceCol{
    /**
     *
     * @param id
     * @param {Casque} casque
     */
    constructor(id,casque) {
        this.$main=$(require("./device-col.html"));
        this.id=id;
        /**
         *
         * @type {Casque}
         */
        this.casque=casque;
        if(!casque){
            this.$main.addClass("is-regie");
        }

        this.$id=this.$main.find(".id");
        this.$id.text(this.id);

        this.$name=this.$main.find(".name");
        this.$online=this.$main.find(".online");
        this.$plugged=this.$main.find(".plugged");
        this.$apk=this.$main.find(".apk");
        this.$contenusReady=this.$main.find(".contenusReady");

        if(this.casque){
            this.$name.text(this.casque.numero);
            this.$main.css("order",this.casque.numero);
        }else{
            this.$name.text(this.id);
            this.$id.text("");
        }
        this.filesCells={};
        this.$files=this.$main.find(".files");
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




}