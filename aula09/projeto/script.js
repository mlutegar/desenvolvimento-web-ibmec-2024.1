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

// // Agora vou mexer nos elementos do html para adicionar os dados do html nele
//
// foto = document.querySelector('.foto');
// nome = document.querySelector('.nome');
// posicao = document.querySelector('.posicao');
// descricao = document.querySelector('.descricao');
// nascimento = document.querySelector('.nascimento');
//
// // Vou adicionar os elementos
// foto.innerHTML = `<img src="${dados[0].imagem}" alt="${dados[0].nome}">`;
// nome.innerHTML = dados[0].nome;
// posicao.innerHTML = dados[0].posicao;
// descricao.innerHTML = `<p>${dados[0].descricao}</p>`;
// nascimento.innerHTML = `<p>${dados[0].nascimento}</p>`;

// Criando o card a partir do js
conteudo = document.querySelector('.conteudo');

function criarCard(dados) {
    for (let item of dados) {
        conteudo.innerHTML += `
            <div class="caixa">
                <div class="foto">
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>
                
                <div class="nome">
                    <p>${item.nome}</p>
                </div>
                
                <div class="posicao">
                    <p>${item.posicao}</p>
                </div>
                
                <div class="descricao">
                    <p>${item.descricao}</p>
                    </div>
                <div class="nascimento">
                    <p>${item.nascimento}</p>
                    </div>
            </div>
        `;
    }
}

// criar uma tabela com nome apenas

function criarTabela(dados) {
    let tabela = document.getElementById('tabela');

    for (let item of dados) {
        tabela.innerHTML += `
            <tr>
                <th>${item.nome}</th>
            </tr>
        `;
    }
}

criarTabela(dados);

// Um função que cria um card com os dados do jogador pelo nome

function criarCardPorNome() {
    let nome = document.getElementById('nome').value;
    let jogador = dados.find((item) => item.nome === nome);

    conteudo.innerHTML = `
        <div class="caixa">
            <div class="foto">
                <img src="${jogador.imagem}" alt="${jogador.nome}">
            </div>
            
            <div class="nome">
                <p>${jogador.nome}</p>
            </div>
            
            <div class="posicao">
                <p>${jogador.posicao}</p>
            </div>
            
            <div class="descricao">
                <p>${jogador.descricao}</p>
                </div>
            <div class="nascimento">
                <p>${jogador.nascimento}</p>
                </div>
        </div>
    `;
}