export default class Casque {
    /**
     *
     * @param {string} numero Numéro affiché du casque
     */
    constructor(numero){
        this.$main=$(require("./casque.html"));
        /**
         * @type {string} numero Numéro affiché du casque
         */
        this.numero=numero;
        //affiche le numero du casque
        this.$main.find(".nb").text(numero);
        this.$main.attr("casque",numero);

        this._setState(Casque.STATE_HORS_LIGNE);
    }

    /**
     *
     * @param {string} state disponible|en attente|en cours|hors ligne|déchargé
     * @zzzprivate
     */
    _setState(state){
        this.$main.attr("state",state);
    }

    /**
     * Ajoute un casque à la liste et le renvoie
     * @param {string} numero Numero affiché du casque
     * @return {Casque}
     */
    static addCasque(numero){
        let c=new Casque(numero);
        Casque.list[numero]=c;
        return c;
    }

    /**
     * Renvoie un casque par son numero
     * @param numero
     * @returns {Casque}
     */
    static getCasqueByNumero(numero){
        return Casque.list[numero];
    }
}

/**
 *
 * @type {Casque[]}
 */
Casque.list={};
Casque.STATE_DISPONIBLE="STATE_DISPONIBLE";
Casque.STATE_EN_COURS="STATE_EN_COURS";
Casque.STATE_EN_ATTENTE="STATE_EN_ATTENTE";
Casque.STATE_HORS_LIGNE="STATE_HORS_LIGNE";
Casque.STATE_DECHARGE="STATE_DECHARGE";

