class No {
    public $data;
    public $proximoNo;

    public function __construct($data) {
        $this->data = $data;
        $this->proximoNo = null;
    }
}

class Lista {
    public $head;

    public function __construct() {
        $this->head = null;
    }

    public function add($data) {
        $novoNo = new No($data);
        if (!$this->head) {
            $this->head = $novoNo;
            return;
        }

        $atual = $this->head;
        while ($atual->proximoNo) {
            $atual = $atual->proximoNo;
        }

        $atual->proximoNo = $novoNo;
    }

    public function removeDuplicada() {
        $atual = $this->head;

        while ($atual) {
            $comparar = $atual;

            while ($comparar->proximoNo) {
                if ($comparar->proximoNo->data === $atual->data) {
                    $comparar->proximoNo = $comparar->proximoNo->proximoNo;
                } else {
                    $comparar = $comparar->proximoNo;
                }
            }

            $atual = $atual->proximoNo;
        }
    }

    public function exibe() {
        $atual = $this->head;
        while ($atual) {
            echo $atual->data . "\n";
            $atual = $atual->proximoNo;
        }
    }
}

$lista = new Lista();
$lista->add(2);
$lista->add(1);
$lista->add(4);
$lista->add(5);
$lista->add(5);
$lista->add(1);

echo "Original:\n";
$lista->exibe();

$lista->removeDuplicada();

echo "Modificada:\n";
$lista->exibe();
