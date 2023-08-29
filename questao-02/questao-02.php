class NosArvore {
    public $valor;
    public $esquerda;
    public $direita;

    public function __construct($valor) {
        $this->valor = $valor;
        $this->esquerda = null;
        $this->direita = null;
    }
}

function converteArrayParaArvoreBinaria($array) {
    if (count($array) === 0) {
        return null;
    }

    $meioDaArvore = floor(count($array) / 2);
    $noRaiz = new NosArvore($array[$meioDaArvore]);

    $subArrayEsquerda = [];
    for ($i = 0; $i < $meioDaArvore; $i++) {
        $subArrayEsquerda[] = $array[$i];
    }
    $noRaiz->esquerda = converteArrayParaArvoreBinaria($subArrayEsquerda);

    $subArrayDireita = [];
    for ($i = $meioDaArvore + 1; $i < count($array); $i++) {
        $subArrayDireita[] = $array[$i];
    }
    $noRaiz->direita = converteArrayParaArvoreBinaria($subArrayDireita);
    
    return $noRaiz;
}

$arvore = converteArrayParaArvoreBinaria([1, 2, 3, 6, 9, 11, 14, 17]);
print_r($arvore);
