// TESTANDO VAR, LET E CONST

let nome = 'Michel';

// Teste usando var
function returnSobrenomeVar(nome) {
    var sobrenome = ' Lutegar';

    if (nome === 'Michel') {
        var sobrenome = ' DOrsi';
        console.log('Dentro do if (com var): ' + nome + sobrenome);
    }
    console.log('Fora do if (com var): ' + nome + sobrenome);
}

// Teste usando let
function returnSobrenomeLet(nome) {
    let sobrenome = ' Lutegar';

    if (nome === 'Michel') {
        let sobrenome = ' DOrsi';
        console.log('Dentro do if (com let): ' + nome + sobrenome);
    }
    console.log('Fora do if (com let): ' + nome + sobrenome);
}

// Teste usando const
function returnSobrenomeConst(nome) {
    const sobrenome = ' Lutegar';

    if (nome === 'Michel') {
        const sobrenome = ' DOrsi';
        console.log('Dentro do if (com const): ' + nome + sobrenome);
    }
    console.log('Fora do if (com const): ' + nome + sobrenome);
}

// O var não respeita o escopo de bloco, então ele sobrescreve a variável sobrenome
console.log('Testando var:\n');
returnSobrenomeVar("Michel");

// O let respeita o escopo de bloco, então ele não sobrescreve a variável sobrenome
console.log('\nTestando let:\n');
returnSobrenomeLet("Michel");

// O const respeita o escopo de bloco, então ele não sobrescreve a variável sobrenome
console.log('\nTestando const:\n');
returnSobrenomeConst("Michel");

// TESTANDO ARRAY
console.log('\nTestando array:\n');
let array = [1, 2, 3, 4, 5];
console.log("Array inicial: " + array + "\n");

// Verificando o tamanho do array
console.log("Tamanho do array: " + array.length + "\n");

// Recuperação de um elemento do array pelo índice
console.log("Recuperando o elemento de índice 2: " + array[2] + "\n");

// Adicionando um elemento no final do array
array.push(6);
console.log("Adicionando o elemento 6 no final do array: " + array + "\n");
console.log("Tamanho do array: " + array.length + "\n");

// Removendo o último elemento do array
let elementoRemovido = array.pop();
console.log("Removendo o último elemento do array (valor removido: " + elementoRemovido + "): " + array + "\n");
console.log("Tamanho do array: " + array.length + "\n");

// Adicionando um elemento no início do array
array.unshift(0);
console.log("Adicionando o elemento 0 no início do array: " + array + "\n");
console.log("Tamanho do array: " + array.length + "\n");

// Removendo o primeiro elemento do array
let elementoShiftado = array.shift();
console.log("Removendo o primeiro elemento do array (valor removido: " + elementoShiftado + "): " + array + "\n");
console.log("Tamanho do array: " + array.length + "\n");