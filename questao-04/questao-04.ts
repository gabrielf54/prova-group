function isPalindroma(palavra: string): boolean {
    const certo = palavra.toLowerCase().split("");
    const contrario: string[] = [];
    let contador = 0;

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

    return contador === certo.length;
}

if (isPalindroma("Rever")) {
    console.log("É palíndroma");
} else {
    console.log("Não é palíndroma");
}
