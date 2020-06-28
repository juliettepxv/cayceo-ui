export default class StreamScreen{

    constructor() {
        this.$main=$(require("./stream-screen.html"));
        this.$stream=this.$main.find(".stream");
        this.touchStart={
            x:0,
            y:0
        };
        this.touchEnd={
            x:0,
            y:0
        };
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
        /**
         * Convertit les positions de souris locale en positions sur le casque en fonction de sa résolutions
         * @param e
         */
        let calculateMousePos=function(e){
            me.mouse.x=Math.round(me.resolution.w/me.$stream.width()*e.offsetX);
            me.mouse.y=Math.round(me.resolution.h/me.$stream.height()*e.offsetY);
        };
        this.$stream.on("mousemove",function(e){
            calculateMousePos(e);
            me._refreshProps();
        });
        this.$stream.on("click",function(e){
            calculateMousePos(e);
            me._refreshProps();
            ui.emit(CMD.CASQUE_INPUT_TAP,me.mouse.x,me.mouse.y,me.streamIp)
        });
        this.$stream.on("touchstart",function(e){
            me.touchStart.x=e.originalEvent.changedTouches[0].clientX;
            me.touchStart.y=e.originalEvent.changedTouches[0].clientY;
            //ui.emit(CMD.CASQUE_INPUT_SCROLL_Y,delta,me.streamIp)
        });
        this.$stream.on("touchend",function(e){
            me.touchEnd.x=e.originalEvent.changedTouches[0].clientX;
            me.touchEnd.y=e.originalEvent.changedTouches[0].clientY;
            console.log(CMD.CASQUE_INPUT_SWIPE,me.touchStart,me.touchEnd);
            ui.emit(CMD.CASQUE_INPUT_SWIPE,
                me.touchStart.x,
                me.touchStart.y,
                me.touchEnd.x,
                me.touchEnd.y,
                1600,
                me.streamIp
                )
        });

        this._refreshProps();
    }

    /**
     * Définit l'ip du casque utilisé
     * @param ip
     */
    setIp(ip){
        this.ip=ip;
        this._refreshProps();
    }

    /**
     * Définit la résolution d'écran du casque utilisé
     * @param w
     * @param h
     */
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

    /**
     * Affiche la fenêtre
     * @param ip
     */
    show(ip){
        this.streamIp=ip;
        this.$main.addClass("active");
        this.play();
    }

    /**
     * Masque la fenêtre
     */
    hide(){
        this.$main.removeClass("active");
        ui.emit(CMD.CASQUE_CLOSE_STREAM_SCREEN,this.streamIp);
        this.stop();
    }


    /**
     * Définit l'image affichée
     * @param value
     */
    set imgUrl(value) {
        console.error("stream",value);
        this._imgUrl = value;
        this.$stream.attr("src",value);

    }

    /**
     * Arrete la boucle de mise à jour
     */
    stop(){
        if(this._loop){
            this.$main.removeClass("active");
            clearInterval(this._loop);
            this._loop=null;
        }
    }

    /**
     * Démarre la boucle de mise à jour
     */
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