class NosArvore {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

function converteArrayParaArvoreBinaria(array) {
    if (array.length === 0) {
        return null;
    }

    const meioDaArvore = Math.floor(array.length / 2);
    const noRaiz = new NosArvore(array[meioDaArvore]);

    const subArrayEsquerda = [];
    for (let i = 0; i < meioDaArvore; i++) {
        subArrayEsquerda.push(array[i]);
    }
    noRaiz.esquerda = converteArrayParaArvoreBinaria(subArrayEsquerda);

    const subArrayDireita = [];
    for (let i = meioDaArvore + 1; i < array.length; i++) {
        subArrayDireita.push(array[i]);
    }
    noRaiz.direita = converteArrayParaArvoreBinaria(subArrayDireita);
    
    return noRaiz;
}

const arvore = converteArrayParaArvoreBinaria([1, 2, 3, 6, 9, 11, 14, 17]);
console.log(arvore);
