class Pilha {
    private items: number[];

    constructor() {
        this.items = [];
    }

    push(item: number) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function sortPilha(pilha: Pilha) {
    const tempPilha = new Pilha();

    while (!pilha.isEmpty()) {
        const temp = pilha.pop();

        while (!tempPilha.isEmpty() && tempPilha.peek() > temp) {
            pilha.push(tempPilha.pop());
        }

        tempPilha.push(temp);
    }

    while (!tempPilha.isEmpty()) {
        pilha.push(tempPilha.pop());
    }
}

const pilha = new Pilha();
pilha.push(34);
pilha.push(3);
pilha.push(31);
pilha.push(98);
pilha.push(92);
pilha.push(23);

console.log("Pilha original:", pilha);

sortPilha(pilha);

console.log("Pilha modificada:", pilha);
