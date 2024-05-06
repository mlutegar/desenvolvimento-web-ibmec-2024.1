// Não vamos usar o map, pois o map gera uma nova array, e não queremos isso
// Vamos usar o forEach, que é uma função que percorre a array e executa uma função para cada item

// forEach: array.forEach((item, index, array) => console.log(item, index, array));

// Um exemplo do forEach que percorre a array feminino e imprime no console o nome de cada umas delas

function imprimirNomeForEach(array) {
    array.forEach((item) => console.log(item.nome));
}

// Usando o while para percorrer a array feminino
function imprimirNomeWhile(array) {
    let index = 0;
    while (index < array.length) {
        console.log(`A posição da ${array[index].nome} é ${array[index].posicao}`);
        index++;
    }
}

// Usando o for para percorrer a array feminino

function imprimirNomeFor(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(`A altura da ${array[index].nome} é ${array[index].altura}`);
    }
}

// Usando o for of para percorrer a array feminino
// O for of é uma forma mais simples de percorrer uma array, pois ele não precisa de um contador

function imprimirNomeForOf(array) {
    for (let item of array) {
        console.log(`O peso da ${item.nome} é ${item.peso}`);
    }
}