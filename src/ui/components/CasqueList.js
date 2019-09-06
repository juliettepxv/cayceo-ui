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
     * @return {Casque}
     */
    addCasque(numero){
        let c=new Casque(numero);
        this.list[numero]=c;
        this.$main.append(c.$main);
        return c;
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
