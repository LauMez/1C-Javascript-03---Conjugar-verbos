function yoPresente(raiz) {
    document.write("Yo " + raiz + "o" + "<br>");
}

function tuPresente(raiz, descinencia) {
    if(descinencia == "ar") document.write("Tu " + raiz + "as" + "<br>");
    else document.write("Tu " + raiz + "es" + "<br>");
}

function elPresente(raiz, descinencia) {
    if(descinencia == "ar") document.write("El " + raiz + "a" + "<br>");
    else document.write("El " + raiz + "e" + "<br>");
}

function nosotrosPresente(raiz, descinencia) {
    if(descinencia == "ar") document.write("Nosotros " + raiz + "amos" + "<br>");
    else document.write("Nosotros " + raiz + "emos" + "<br>");
}

function ellosPresente(raiz, descinencia) {
    if(descinencia == "ar") document.write("Ellos " + raiz + "an" + "<br>");
    else document.write("Ellos " + raiz + "en" + "<br>");
}

function vosotrosPresente(raiz, descinencia) {
    if(descinencia == "ar") document.write("Vosotros " + raiz + "ais" + "<br>");
    else document.write("Vosotros " + raiz + "eis" + "<br>");
}

function conjugarPresente(raiz, descinencia) {
    yoPresente(raiz);
    tuPresente(raiz, descinencia);
    elPresente(raiz, descinencia);
    nosotrosPresente(raiz, descinencia);
    ellosPresente(raiz, descinencia);
    vosotrosPresente(raiz, descinencia);
}

function yoPasado(raiz, descinencia) {
    if(descinencia == "ar") document.write("Yo " + raiz + "e" + "<br>");
    else document.write("Yo " + raiz + "i" + "<br>");
}

function tuPasado(raiz, descinencia) {
    if(descinencia == "ar") document.write("Tu " + raiz + "aste" + "<br>");
    else document.write("Tu " + raiz + "iste" + "<br>");
}

function elPasado(raiz, descinencia) {
    if(descinencia == "ar") document.write("El " + raiz + "o" + "<br>");
    else document.write("El " + raiz + "io" + "<br>");
}

function nosotrosPasado(raiz, descinencia) {
    if(descinencia == "ar") document.write("Nosotros " + raiz + "amos" + "<br>");
    else document.write("Nosotros " + raiz + "imos" + "<br>");
}

function ellosPasado(raiz, descinencia) {
    if(descinencia == "ar") document.write("Ellos " + raiz + "aron" + "<br>");
    else document.write("Ellos " + raiz + "ieron" + "<br>");
}

function vosotrosPasado(raiz, descinencia) {
    if(descinencia == "ar") document.write("Vosotros " + raiz + "aiste" + "<br>");
    else document.write("Vosotros " + raiz + "eis" + "<br>");
}

function conjugarPasado(raiz, descinencia) {
    yoPasado(raiz, descinencia);
    tuPasado(raiz, descinencia);
    elPasado(raiz, descinencia);
    nosotrosPasado(raiz, descinencia);
    ellosPasado(raiz, descinencia);
    vosotrosPasado(raiz, descinencia);
}

function yoFuturo(raiz, descinencia) {
    if(descinencia == "ar") document.write("Yo " + raiz + "are" + "<br>");
    else document.write("Yo " + raiz + "ere" + "<br>");
}

function tuFuturo(raiz, descinencia) {
    if(descinencia == "ar") document.write("Tu " + raiz + "aras" + "<br>");
    else document.write("Tu " + raiz + "eras" + "<br>");
}

function elFuturo(raiz, descinencia) {
    if(descinencia == "ar") document.write("El " + raiz + "ara" + "<br>");
    else document.write("El " + raiz + "era" + "<br>");
}

function nosotrosFuturo(raiz, descinencia) {
    if(descinencia == "ar") document.write("Nosotros " + raiz + "aremos" + "<br>");
    else document.write("Nosotros " + raiz + "eremos" + "<br>");
}

function ellosFuturo(raiz, descinencia) {
    if(descinencia == "ar") document.write("Ellos " + raiz + "aran" + "<br>");
    else document.write("Ellos " + raiz + "eran" + "<br>");
}

function vosotrosFuturo(raiz, descinencia) {
    if(descinencia == "ar") document.write("Vosotros " + raiz + "areis" + "<br>");
    else document.write("Vosotros " + raiz + "ereis" + "<br>");
}

function conjugarFuturo(raiz, descinencia) {
    yoFuturo(raiz, descinencia);
    tuFuturo(raiz, descinencia);
    elFuturo(raiz, descinencia);
    nosotrosFuturo(raiz, descinencia);
    ellosFuturo(raiz, descinencia);
    vosotrosFuturo(raiz, descinencia);
}

function esDescidencia(palabra) {
    if(palabra == "ar" || palabra == "er" || palabra == "ir") return true;
}

function conjugarVerbos(palabra) {
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
        conjugarPresente(raiz, descinencia);
        document.write("<br>" + "<br>" + "Pasado: " + "<br>");
        conjugarPasado(raiz, descinencia);
        document.write("<br>" + "<br>" + "Futuro: " + "<br>");
        conjugarFuturo(raiz, descinencia);
    }
}

const verbo = prompt("Digitar un verbo: ");
conjugarVerbos(verbo);