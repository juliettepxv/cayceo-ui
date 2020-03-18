require("./dialog.less");
export default class Dialog {
    constructor() {
        this.$main=$(require("./dialog.html"));
        this.$message=this.$main.find("[dialog='message']");
        this.$oui=this.$main.find("[dialog='oui']");
        this.$non=this.$main.find("[dialog='non']");
        this.$cancel=this.$main.find("[dialog='cancel']");
        this.$disabler=this.$main.find("[dialog='disabler']");
    }

    /**
     * Ferme la popin
     */
    close(){
        this.$main.remove();
    }

    /**
     * Affiche la popin
     * @returns {Dialog}
     */
    display(){
        let me=this;
        $("body").append(this.$main);

        this.$cancel.off("click").on("click",function(){
            me.close();
        });
        this.$disabler.off("click").on("click",function(){
            me.close();
        });
        this.oui("oui");
        this.non("non");
        this.setText("...");
        return this;
    }

    /**
     * Définit le label et l'action sur le bouton oui
     * @param label
     * @param cb
     * @returns {Dialog}
     */
    oui(label="oui",cb){
        this.$oui.text(label);
        this.$oui.off("click");
        if(cb){
            this.$oui.on("click",function(){
                cb();
            });
        }
        return this;
    }

    /**
     * Définit le label et l'action sur le bouton non
     * @param label
     * @param cb
     * @returns {Dialog}
     */
    non(label="non",cb){
        let me =this;
        this.$non.text(label);
        this.$non.off("click");
        if(!cb){
            cb=function(){
                me.close();
            }
        }
        this.$non.on("click",function(){
            cb();
        });
        return this;
    }

    /**
     * Définit le texte principal
     * @param text
     * @returns {Dialog}
     */
    setText(text){
        this.$message.html(text);
        return this;
    }

}