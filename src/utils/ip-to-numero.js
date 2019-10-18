/**
 * à partir de 192.168.0.99 renverra 99
 * @param {string} ip adresse ip
 * @returns {string}
 */
window.ipToNumero=function(ip){
    ip=ip.split(".");
    let numero=ip[ip.length-1];
    numero=numero.split("");
    return numero[numero.length-1];
};