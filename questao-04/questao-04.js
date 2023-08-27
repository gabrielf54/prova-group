if (isPalindroma("Rever")) {
    console.log("É palíndroma");
} else {
    console.log("Não é palíndroma");
}

function isPalindroma(palavra) {
    let certo = palavra.toLowerCase().split("");
    let contrario = [];
    contador = 0;
    
    for (let i = certo.length - 1; i >= 0; i--) {
        contrario[contador] = certo[i];
        contador++;
    }
    
    contador = 0;
    for (let i = 0; i < certo.length; i++) {
        if (certo[i] === contrario[i]) {
            contador++;
        }
    }
    return contador === certo.length
}