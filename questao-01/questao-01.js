function contadorManeiras(n) {
    if (n === 0 || n === 1) {
        return 1;     //Se a escada tiver 0 ou 1 degrau, retorna 1 maneira
    } else if (n === 2) {
        return 2;     //Se a escada tiver 2 degraus, retorna 2 maneiras
    }

    let maneiraSegundoDegrau = 2;
    let maneiraPrimeiroDegrau = 1;
    let maneiraNenhumDegrau = 1;
    let maneiraDegrauAtual = 0;

    for (let i = 3; i <= n; i++) {
        maneiraDegrauAtual = maneiraSegundoDegrau + maneiraPrimeiroDegrau + maneiraNenhumDegrau;
        maneiraNenhumDegrau = maneiraPrimeiroDegrau;
        maneiraPrimeiroDegrau = maneiraSegundoDegrau;
        maneiraSegundoDegrau = maneiraDegrauAtual;
    }

    return maneiraDegrauAtual;
}

const numeroDegraus = 6;
const maneiras = contadorManeiras(numeroDegraus);
console.log("Número de maneiras possíveis: " + maneiras);
