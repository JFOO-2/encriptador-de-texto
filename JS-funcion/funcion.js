function encriptar() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    const textoEncriptado = aplicarEncriptacion(textoEntrada);
    document.getElementById('textoSalida').value = textoEncriptado;
    document.getElementById('textoSalida').style.backgroundImage = 'none';
}

function desencriptar() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    const textoDesencriptado = aplicarDesencriptacion(textoEntrada);
    document.getElementById('textoSalida').value = textoDesencriptado;
    document.getElementById('textoSalida').style.backgroundImage = 'none';
}

function copiarTexto() {
    const textoSalida = document.getElementById('textoSalida');
    textoSalida.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function aplicarEncriptacion(texto) {
    const llaves = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    };

    return texto
        .toLowerCase()
        .split('')
        .map(letra => llaves[letra] || letra)
        .join('');
}

function aplicarDesencriptacion(texto) {
    const llaves = {
        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober: 'o',
        ufat: 'u'
    };

    let textoDesencriptado = texto;

    for (const [encriptado, original] of Object.entries(llaves)) {
        textoDesencriptado = textoDesencriptado.split(encriptado).join(original);
    }

    return textoDesencriptado;
}

