export default class FileHeadCell {


    constructor(path) {
        this.path=path;
        this.$main=$(require("./file-head-cell.html"));
        this.$main.find(".path").text(path);
        this.$disabled=this.$main.find(".disabled");
        this.$contenuName=this.$main.find(".contenuName");
        this.$serverPath=this.$main.find(".serverPath");
        this._contenuName="";
        this._serverPath="";
        this.$main.attr("name",path);
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
}