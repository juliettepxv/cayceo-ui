export default class FileHeadCell {


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
        this._isApk=false;
        /**
         * Si true alors le fichier devra exister sur la régie uniquement
         * @type {boolean}
         */
        this._isThumbnail=false;

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
    get isLogo() {
        return this._isLogo;
    }
    set isLogo(value) {
        if(value){
            //désactive les autres
            for(let file of ui.devicesTable.filesHeadCellsArray()){
                if(file.isLogo){
                    file.isLogo=false;
                }
            }
            //présent sur la régie, pas sur les casques
            for(let fc of this.fileCellsArray()){
                if(fc.casque()){
                    fc.shouldExists=-1;
                }else{
                    fc.shouldExists=1;
                }
            }
        }
        this.$contenuName.text(value?'logo':'old logo');
        this.$main.attr("is-logo",value?'1':'');
        this._isLogo = value;
    }

    get isApk() {
        return this._isApk;
    }

    set isApk(value) {
        this._isApk = value;
    }

    get isThumbnail() {
        return this._isThumbnail;
    }

    set isThumbnail(value) {
        this._isThumbnail = value;
    }
}