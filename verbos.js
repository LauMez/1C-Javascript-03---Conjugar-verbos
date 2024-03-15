function yoPresente(raiz) {
    return raiz + "o";
}

function tuPresente(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "as";
    else return raiz + "es";
}

function elPresente(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "a";
    else return raiz + "e";
}

function nosotrosPresente(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "amos";
    else return raiz + "emos";
}

function ellosPresente(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "an";
    else return raiz + "en";
}

function vosotrosPresente(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "ais";
    else return raiz + "eis";
}

function yoPasado(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "e";
    else return raiz + "i";
}

function tuPasado(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "aste";
    else return raiz + "iste";
}

function elPasado(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "o";
    else return raiz + "io";
}

function nosotrosPasado(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "amos";
    else return raiz + "imos";
}

function ellosPasado(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "aron";
    else return raiz + "ieron";
}

function vosotrosPasado(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "aiste";
    else return raiz + "eis";
}

function yoFuturo(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "are";
    else return raiz + "ere";
}

function tuFuturo(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "aras";
    else return raiz + "eras";
}

function elFuturo(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "ara";
    else return raiz + "era";
}

function nosotrosFuturo(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "aremos";
    else return raiz + "eremos";
}

function ellosFuturo(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "aran";
    else return raiz + "eran";
}

function vosotrosFuturo(raiz, descinencia) {
    if(descinencia == "ar") return raiz + "areis";
    else return raiz + "ereis";
}

function esDescidencia(palabra) {
    if(palabra == "ar" || palabra == "er" || palabra == "ir") return true;
}

const palabra = prompt("Digitar un verbo: ");

let mensaje;
let verbo;
let descinencia = "";
let raiz = "";

mensaje = palabra.split(" ");
verbo = mensaje[0];

for(let i = 0; i < verbo.length-2; i++) {
    raiz += verbo[i];
}

descinencia = verbo[verbo.length-2] + verbo[verbo.length-1];   

if(esDescidencia(descinencia)) {
    document.write("Presente: " + "<br>");
    document.write("Yo " + yoPresente(raiz));
    document.write("<br>" + "Tu " + tuPresente(raiz, descinencia));
    document.write("<br>" + "El " + elPresente(raiz, descinencia));
    document.write("<br>" + "Nosotros " + nosotrosPresente(raiz, descinencia));
    document.write("<br>" + "Ellos " + ellosPresente(raiz, descinencia));
    document.write("<br>" + "Vosotros " + vosotrosPresente(raiz, descinencia));

    document.write("<br>" + "<br>" + "Pasado: " + "<br>");
    document.write("Yo " + yoPasado(raiz));
    document.write("<br>" + "Tu " + tuPasado(raiz, descinencia));
    document.write("<br>" + "El " + elPasado(raiz, descinencia));
    document.write("<br>" + "Nosotros " + nosotrosPasado(raiz, descinencia));
    document.write("<br>" + "Ellos " + ellosPasado(raiz, descinencia));
    document.write("<br>" + "Vosotros " + vosotrosPasado(raiz, descinencia));

    document.write("<br>" + "<br>" + "Futuro: " + "<br>");
    document.write("Yo " + yoFuturo(raiz));
    document.write("<br>" + "Tu " + tuFuturo(raiz, descinencia));
    document.write("<br>" + "El " + elFuturo(raiz, descinencia));
    document.write("<br>" + "Nosotros " + nosotrosFuturo(raiz, descinencia));
    document.write("<br>" + "Ellos " + ellosFuturo(raiz, descinencia));
    document.write("<br>" + "Vosotros " + vosotrosFuturo(raiz, descinencia));
}
