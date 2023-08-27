class Pilha {
    private $items = [];

    public function push($item) {
        array_push($this->items, $item);
    }

    public function pop() {
        if (!$this->isEmpty()) {
            return array_pop($this->items);
        }
    }

    public function peek() {
        $count = count($this->items);
        return $this->items[$count - 1];
    }

    public function isEmpty() {
        return empty($this->items);
    }
}

function sortPilha($pilha) {
    $tempPilha = new Pilha();

    while (!$pilha->isEmpty()) {
        $temp = $pilha->pop();

        while (!$tempPilha->isEmpty() && $tempPilha->peek() > $temp) {
            $pilha->push($tempPilha->pop());
        }

        $tempPilha->push($temp);
    }

    while (!$tempPilha->isEmpty()) {
        $pilha->push($tempPilha->pop());
    }
}

$pilha = new Pilha();
$pilha->push(34);
$pilha->push(3);
$pilha->push(31);
$pilha->push(98);
$pilha->push(92);
$pilha->push(23);

echo "Pilha original: ";
print_r($pilha);

sortPilha($pilha);

echo "Pilha modificada: ";
print_r($pilha);
