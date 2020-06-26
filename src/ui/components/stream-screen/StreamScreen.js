export default class StreamScreen{

    constructor() {
        /**
         * L'url de limage a rafraichir
         * @type {string}
         * @private
         */
        this._imgUrl="";
        this._loop=null;
        let me=this;
        setTimeout(function(){
            me._initListeners();
        },1000);
    }

    _initListeners(){
        let me=this;
        this.$main().find(".close").on("click",function(){
            me.stop();
            me.hide();
        })
    }

    show(ip){
        this.streamIp=ip;
        this.$main().addClass("active");
        this.play();
    }
    hide(){
        this.$main().removeClass("active");
        ui.emit(CMD.CASQUE_CLOSE_STREAM_SCREEN,this.streamIp);
        this.stop();
    }

    $main(){
        return $("#stream-screen");
    }
    $stream(){
        return this.$main().find(".stream");
    }


    set imgUrl(value) {
        console.error("stream",value);
        this._imgUrl = value;
        this.$stream().attr("src",value);

    }



    stop(){
        if(this._loop){
            this.$main().removeClass("active");
            clearInterval(this._loop);
            this._loop=null;
        }
    }
    play(){
        let me=this;
        this.stop();
        this._loop=setInterval(
            function(){
                me.$stream().attr("src",me._imgUrl+"?r="+Math.random());
            }
            ,500
        );
    }


}