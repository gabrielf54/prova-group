function isPalindroma($palavra) {
    $certo = str_split(strtolower($palavra));
    $contrario = [];
    $contador = 0;

    for ($i = count($certo) - 1; $i >= 0; $i--) {
        $contrario[$contador] = $certo[$i];
        $contador++;
    }

    $contador = 0;
    for ($i = 0; $i < count($certo); $i++) {
        if ($certo[$i] === $contrario[$i]) {
            $contador++;
        }
    }

    return $contador === count($certo);
}

if (isPalindroma("Rever")) {
    echo "É palíndroma";
} else {
    echo "Não é palíndroma";
}
