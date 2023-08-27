class No {
    data: number;
    proximoNo: No | null;

    constructor(data: number) {
        this.data = data;
        this.proximoNo = null;
    }
}

class Lista {
    head: No | null;

    constructor() {
        this.head = null;
    }

    add(data: number) {
        const novoNo = new No(data);
        if (!this.head) {
            this.head = novoNo;
            return;
        }

        let atual = this.head;
        while (atual.proximoNo) {
            atual = atual.proximoNo;
        }

        atual.proximoNo = novoNo;
    }

    removeDuplicada() {
        let atual = this.head;

        while (atual) {
            let comparar = atual;

            while (comparar.proximoNo) {
                if (comparar.proximoNo.data === atual.data) {
                    comparar.proximoNo = comparar.proximoNo.proximoNo;
                } else {
                    comparar = comparar.proximoNo;
                }
            }

            atual = atual.proximoNo;
        }
    }

    exibe() {
        let atual = this.head;
        while (atual) {
            console.log(atual.data);
            atual = atual.proximoNo;
        }
    }
}

const lista = new Lista();
lista.add(2);
lista.add(1);
lista.add(4);
lista.add(5);
lista.add(5);
lista.add(1);

console.log("Original:");
lista.exibe();

lista.removeDuplicada();

console.log("Modificada:");
lista.exibe();
