const areaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");
const sinMensaje = document.getElementById("sinMensaje")
const instruccion = document.getElementById("instruccion")
const botonCopiar = document.getElementById("botonCopiar")


//´La letra "e" es convertida para "enter"´
//´La letra "i" es convertida para "imes"´
//´La letra "a" es convertida para "ai"´
//´La letra "o" es convertida para "ober"´
//´La letra "u" es convertida para "ufat"´

function botonEncriptar() {
    const textoEncriptado = encriptar(areaTexto.value)
    mensaje.value = textoEncriptado
    areaTexto.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    sinMensaje.style.display = "none";
    instruccion.style.display = "none";
    botonCopiar.style.display = "block";
    return stringEncriptada

    
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(areaTexto.value)
    mensaje.value = textoEncriptado
    areaTexto.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptada

}

function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

