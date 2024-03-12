var texto = null;
var result = null;
let notTextUno = null;
let notTextDos = null;

function encriptarTexto() {
    texto = document.getElementById("texto").value;
    if(texto == ""){
        result = document.getElementById("result").innerHTML = "";
        if(result == ""){
            document.getElementById("imagen").style.display = "block"; // Muestra la imagen
            document.getElementById("notTextUno").style.display = "block"; // Muestra el primer texto
            document.getElementById("notTextDos").style.display = "block";// Muestra el segundo texto
            console.log("Error, campo vacío");
        }
    } else {
        texto = texto.replace(/[aeiou]/g, reemplazarVocales);
        console.log(texto);
        result = document.getElementById("result").innerHTML = texto;
        document.getElementById("imagen").style.display = "none";
        document.getElementById("notTextUno").style.display = "none";
        document.getElementById("notTextDos").style.display = "none";
    }
}

function desEncriptarTexto() {
    texto = document.getElementById("texto").value;
    if(texto == ""){
        result = document.getElementById("result").innerHTML = "";
        if(result == ""){
            document.getElementById("imagen").style.display = "block"; // Muestra la imagen
            document.getElementById("notTextUno").style.display = "block"; // Muestra el primer texto
            document.getElementById("notTextDos").style.display = "block";// Muestra el segundo texto
            console.log("Error, campo vacío");
        }
    } else {
        texto = texto.replace(/ai/g, 'a');
        texto = texto.replace(/enter/g, 'e');
        texto = texto.replace(/imer/g, 'i');
        texto = texto.replace(/ober/g, 'o');
        texto = texto.replace(/ufat/g, 'u');
        console.log(texto);
        result = document.getElementById("result").innerHTML = texto;
        document.getElementById("imagen").style.display = "none";
        document.getElementById("notTextUno").style.display = "none";
        document.getElementById("notTextDos").style.display = "none";
    }
}

function reemplazarVocales(texto) {
    switch (texto) {
        case 'a':
            return 'ai';
        case 'e':
            return 'enter';
        case 'i':
            return 'imer';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';
        default:
            return texto; // Si no es una vocal, devuelve el mismo caracter
    }
}

function copyText() {
    document.getElementById("result").value;
    if(result == ""){
        console.log("No tiene mensaje para copiar");
    } else {
        console.log(result);
        navigator.clipboard.writeText(result)
        .then(() => {
            console.log('Texto copiado al portapapeles correctamente.');
        })
        .catch(err => {
            console.error('Error al copiar el texto al portapapeles: ', err);
        });
    }
}