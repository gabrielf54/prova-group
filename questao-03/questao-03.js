class No {
    constructor(data) {
        this.data = data;
        this.proximoNo = null;
    }
}

class Lista {
    constructor() {
        this.head = null;
    }

    add(data) {
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
        let atual = this.cabeca;

        while (atual) {
            let comparar = atual;

            while (comparar.proximoNo) {
                if (comparar.proximoNo.info === atual.info) {
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

const Lista = new Lista();
Lista.add(2);
Lista.add(1);
Lista.add(4);
Lista.add(5);
Lista.add(5);
Lista.add(1);

console.log("Original:");
Lista.exibe();

Lista.removeDuplicada();

console.log("Modificada:");
Lista.exibe();
