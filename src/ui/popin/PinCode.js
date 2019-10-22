import PopinUi from "./PopinUi"


export default class PinCode extends PopinUi{
    /**
     *
     */
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./pinCode.html"));
        this.value=[];

        this._$circles=this.$main.find(".pin-circle");
        this._$cont=this.$main.find(".confirmation-dots");

        $body.on("click","[popin='PinCode'] [data-value]",function(){
            let val=$(this).attr("data-value");
            switch (val) {
                case "back":
                    me._back();
                    break;
                case "cancel":
                    me._cancel();
                    break;
                default:
                    me._setKey(val);
                    break;
            }
        });
    }

    _back(){
        this.value.pop();
        this._refresh();
    }
    _cancel(){
        this._$circles.removeClass("entered success error");
        this._$cont.removeClass("error");
        this.value=[];
    }
    _setKey(keyval){
        this.value.push(keyval);
        this._refresh();
    }
    _isCorrect(){
        return this.value.join("")===window.ui.pinCode;
    }
    _refresh(){
        let me=this;
        me._$circles.removeClass("entered success error");
        if(this.value.length===4){
            if(this._isCorrect()){
                me._$circles.addClass("success");
                me.emit("SUCCESS");
                me._cancel();
            }else{
                me._$circles.addClass("error");
                me._$cont.addClass("error");
                setTimeout(function(){
                    me._cancel();
                },1000);

            }
        }else{
            for(let i=0;i<this.value.length;i++){
                me._$circles.eq(i).addClass("entered");
            }
        }
    }

}