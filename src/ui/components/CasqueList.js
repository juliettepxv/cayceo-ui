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
     * La liste des casques sous forme de tableau
     * @returns {Casque[]}
     */
    arrayList(){
        let a=[];
        for(let c in this.list){
            a.push(this.list[c])
        }
        return a;
    }

    /**
     * Crée et ajoute un casque à la liste et renvoie le Casque créé
     * @param {string} fullIp
     * @return {Casque}
     */
    addCasque(fullIp){
        let c=new Casque(fullIp);
        this.list[fullIp]=c;
        this.$main.append(c.$main);
        return c;
    }

    /**
     * Supprime un casque de la liste
     * @param  {string} ip adresse ip du casque
     */
    removeCasque(ip){
        let c=this.getCasqueByIp(ip);
        if(c){
            c.$main.remove();
            this.list[ip]=null;
            delete this.list[ip];
        }
    }
    /**
     * Renvoie un casque par son ip
     * @param {string} ip
     * @returns {Casque}
     */
    getCasqueByIp(ip){
        return this.list[ip];
    }

    /**
     *
     * @returns {CasqueList}
     */
    static inst(){
        return CasqueList._inst;
    }
}
