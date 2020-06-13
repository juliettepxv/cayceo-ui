import PopinUi from "./PopinUi"

export default class Qrcode extends PopinUi{
    /**
     *
     */
    constructor(){
        super();
        this.$main=$(require("./Qrcode.html"));
    }

    setImg(url){
        this.$main.find("img.qr").attr("src",url);
    }

}