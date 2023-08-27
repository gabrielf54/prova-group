function contadorManeiras($n) {
    if ($n === 0 || $n === 1) {
        return 1;
    } else if ($n === 2) {
        return 2;
    }

    $maneiraSegundoDegrau = 2;
    $maneiraPrimeiroDegrau = 1;
    $maneiraNenhumDegrau = 1;
    $maneirasTotais = 0;

    for ($i = 3; $i <= $n; $i++) {
        $maneirasTotais = $maneiraSegundoDegrau + $maneiraPrimeiroDegrau + $maneiraNenhumDegrau;
        $maneiraNenhumDegrau = $maneiraPrimeiroDegrau;
        $maneiraPrimeiroDegrau = $maneiraSegundoDegrau;
        $maneiraSegundoDegrau = $maneirasTotais;
    }

    return $maneirasTotais;
}

$numeroDegraus = 3;
$maneiras = contadorManeiras($numeroDegraus);
echo "Número de maneiras possíveis: " . $maneiras;
