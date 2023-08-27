function contadorManeiras(n: number) {
    if (n === 0 || n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    }

    let maneiraSegundoDegrau = 2;
    let maneiraPrimeiroDegrau = 1;
    let maneiraNenhumDegrau = 1;
    let maneirasTotais = 0;

    for (let i = 3; i <= n; i++) {
        maneirasTotais = maneiraSegundoDegrau + maneiraPrimeiroDegrau + maneiraNenhumDegrau;
        maneiraNenhumDegrau = maneiraPrimeiroDegrau;
        maneiraPrimeiroDegrau = maneiraSegundoDegrau;
        maneiraSegundoDegrau = maneirasTotais;
    }

    return maneirasTotais;
}

const numeroDegraus: number = 3;
const maneiras: number = contadorManeiras(numeroDegraus);
console.log("Número de maneiras possíveis: " + maneiras);
