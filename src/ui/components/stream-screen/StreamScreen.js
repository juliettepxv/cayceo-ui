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

        // TOUCH / CLICK
        this.$stream.on("click",function(e){
            calculateMousePos(e);
            me._refreshProps();
            ui.emit(CMD.CASQUE_INPUT_TAP,me.mouse.x,me.mouse.y,me.streamIp)
        });

        //scroll WHEEL
        this.$stream.on("wheel",function(e){
            let delta=e.originalEvent.deltaY;
            ui.emit(CMD.CASQUE_INPUT_SCROLL_Y,delta,me.streamIp)
        });

        //TOUCH MOVE SWIPE
        this.$stream.on("touchstart",function(e){
            //TODO convertir les coordonnées (là c'est des coordonnées window.screen, ça fonctionne pour les swipes les plus courrants mais bon...)
            me.touchStart.x=e.originalEvent.changedTouches[0].clientX;
            me.touchStart.y=e.originalEvent.changedTouches[0].clientY;
        });
        this.$stream.on("touchend",function(e){
            //TODO convertir les coordonnées (là c'est des coordonnées window.screen, ça fonctionne pour les swipes les plus courrants mais bon...)
            me.touchEnd.x=e.originalEvent.changedTouches[0].clientX;
            me.touchEnd.y=e.originalEvent.changedTouches[0].clientY;
            ui.emit(CMD.CASQUE_INPUT_SWIPE,
                me.touchStart.x,
                me.touchStart.y,
                me.touchEnd.x,
                me.touchEnd.y,
                1600,
                me.streamIp
                )
        });


        //boutons
        this.$main.on("click",".actions>button[keycode]",function(e){
           let code=$(this).attr("keycode");
           ui.emit(CMD.CASQUE_INPUT_TOUCH,code,me.streamIp);
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
    }

    /**
     * Masque la fenêtre
     */
    hide(){
        this.$main.removeClass("active");
        ui.emit(CMD.CASQUE_CLOSE_STREAM_SCREEN,this.streamIp);
    }


    /**
     * Définit l'image affichée
     * @param value
     */
    set imgUrl(value) {
        let me=this;
        me.$stream.removeClass("fresh");
        setTimeout(function(){
            me.$stream.addClass("fresh");
        },10);
        this.$stream.attr("src",value+"?r="+Math.random());
        //this.$stream.attr("src",value);
    }

}