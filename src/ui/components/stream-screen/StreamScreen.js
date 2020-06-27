export default class StreamScreen{

    constructor() {
        this.$main=$(require("./stream-screen.html"));
        this.$stream=this.$main.find(".stream");
        $body.append(this.$main);
        /**
         * L'url de limage a rafraichir
         * @type {string}
         * @private
         */
        this._imgUrl="";
        this._loop=null;
        this.resolution={
            w:undefined,
            h:undefined
        };
        this.mouse={
            x:undefined,
            y:undefined
        };
        this.ip=null;
        let me=this;
        setTimeout(function(){
            me._initListeners();
        },1000);
    }

    _initListeners(){
        let me=this;
        this.$main.find(".close").on("click",function(){
            me.stop();
            me.hide();
        });
        this.$stream.on("mousemove",function(e){
            me.mouse.x=Math.round(me.resolution.w/me.$stream.width()*e.offsetX);
            me.mouse.y=Math.round(me.resolution.h/me.$stream.height()*e.offsetY);

            me._refreshProps();
        })
        this._refreshProps();
    }

    setIp(ip){
        this.ip=ip;
        this._refreshProps();
    }
    setResolution(w,h){
        this.resolution.w=w;
        this.resolution.h=h;
        this._refreshProps();
    }

    _refreshProps(){
        this.$main.find(".ip").text(this.ip);
        this.$main.find(".resolution-w").text(this.resolution.w);
        this.$main.find(".resolution-h").text(this.resolution.h);
        this.$main.find(".mouse-x").text(this.mouse.x);
        this.$main.find(".mouse-y").text(this.mouse.y);
    }

    show(ip){
        this.streamIp=ip;
        this.$main.addClass("active");
        this.play();
    }
    hide(){
        this.$main.removeClass("active");
        ui.emit(CMD.CASQUE_CLOSE_STREAM_SCREEN,this.streamIp);
        this.stop();
    }



    set imgUrl(value) {
        console.error("stream",value);
        this._imgUrl = value;
        this.$stream.attr("src",value);

    }



    stop(){
        if(this._loop){
            this.$main.removeClass("active");
            clearInterval(this._loop);
            this._loop=null;
        }
    }
    play(){
        let me=this;
        this.stop();
        this._loop=setInterval(
            function(){
                me.$stream.attr("src",me._imgUrl+"?r="+Math.random());
            }
            ,500
        );
    }


}