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

// Adicionando um elemento no final do array
array.push(6);
console.log("Adicionando um elemento no final do array: " + array + "\n");

// Removendo o último elemento do array
array.pop();
console.log("Removendo o último elemento do array: " + array + "\n");