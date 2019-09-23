import Casque from "./Casque";

export default class CasqueList{
    constructor(){
        if(CasqueList._inst){
            alert("CasqueList est un sigleton!!!");
            return;
        }
        CasqueList._inst=this;
        this.$main=$(require("./casque-list.html"));
        /**
         * La liste des casques
         * @type {Casque[]}
         */
        this.list={};
    }

    /**
     * Crée et ajoute un casque à la liste et renvoie le Casque créé
     * @param {string} numero Numero affiché du casque
     * @param {string} fullIp
     * @return {Casque}
     */
    addCasque(numero,fullIp){
        let c=new Casque(numero,fullIp);
        this.list[numero]=c;
        this.$main.append(c.$main);
        return c;
    }

    /**
     * Supprime un casque de la liste
     * @param  {string} numero Numero affiché du casque
     */
    removeCasque(numero){
        let c=this.getCasqueByNumero(numero);
        if(c){
            c.$main.remove();
            this.list[numero]=null;
            delete this.list[numero];
        }
    }
    /**
     * Renvoie un casque par son numéro
     * @param numero
     * @returns {Casque}
     */
    getCasqueByNumero(numero){
        return this.list[numero];
    }

    /**
     *
     * @returns {CasqueList}
     */
    static inst(){
        return CasqueList._inst;
    }
}
