body = document.querySelector('body');
body.style.backgroundColor = '#f8f9fa';

const divPesquisa = document.createElement('div');
divPesquisa.style.textAlign = 'center';
divPesquisa.style.padding = '2rem';
divPesquisa.style.margin = '20px';


const inputPesquisa = document.createElement('input');
inputPesquisa.type = 'text';
inputPesquisa.style.width = '60%'; // Largura do input
inputPesquisa.style.padding = '10px 20px'; // Padding para aumentar a área de digitação
inputPesquisa.style.marginTop = '8px'; // Margem superior
inputPesquisa.style.border = '1px solid #ccc'; // Borda sólida com cor cinza clara
inputPesquisa.style.borderRadius = '5px'; // Bordas arredondadas
inputPesquisa.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Sombra sutil para dar profundidade
inputPesquisa.style.outline = 'none'; // Remove o contorno ao focar
inputPesquisa.style.transition = 'all 0.3s ease'; // Transição suave para efeitos de foco

// Efeito ao focar no input
inputPesquisa.addEventListener('focus', function() {
    this.style.borderColor = '#80bdff'; // Muda a cor da borda ao focar
    this.style.boxShadow = '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'; // Sombra externa azul ao focar
});

divPesquisa.appendChild(inputPesquisa);

document.body.appendChild(divPesquisa);

// conteudo: div que vai receber os cards
const conteudo = document.createElement('div');

conteudo.style = `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
`;

// Adicionando a div conteudo no body do html
document.body.appendChild(conteudo);

const montaCard = (atleta) => {
    const card = document.createElement('div');
    card.style = `
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas:
            "foto posicao"
            "foto nome"
            "descricao descricao"
            "nascimento nascimento";
            "botafogo botafogo";
        gap: 10px;
        width: 700px;
        height: 500px;
        border-radius: 15px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        padding: 20px;
        background-color: #fff;`;

    const foto = document.createElement('div');
    foto.style = `
        grid-area: foto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 5px;`;

    const img = document.createElement('img');
    img.src = atleta.imagem;
    img.alt = `Foto de ${atleta.nome}`;
    img.style = `
        width: 100%;
        height: auto;
        max-width: 200px;
        max-height: 200px;
        border-radius: 50%;
        object-fit: cover;
        object-position: top center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;`;

    foto.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
    });

    foto.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = 'none';
    });

    const posicao = document.createElement('div');
    posicao.style = `
    grid-area: posicao;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-bottom: 3px solid #ccc;  // Bordas sutis na parte inferior
    margin: 10px;               // Margem ao redor da div
    padding: 20px;              // Padding interno
    transition: border-color 0.3s ease, color 0.3s ease;  // Transições suaves para a borda e a cor do texto`;

    const posicaoText = document.createElement('p');
    posicaoText.innerText = atleta.posicao;
    posicaoText.style = `
    font-size: 30px;                 // Tamanho da fonte
    font-weight: bold;               // Peso da fonte
    text-transform: uppercase;       // Texto em maiúsculas
    color: #333;                     // Cor inicial do texto
    letter-spacing: 1.5px;           // Espaçamento entre as letras
    transition: color 0.3s ease;     // Transição suave para a cor do texto`;

    const nome = document.createElement('div');
    nome.style = `
        grid-area: nome;
        display: flex;
        justify-content: center;
        align-items: center;`;

    const nomeText = document.createElement('p');
    nomeText.innerText = atleta.nome;
    nomeText.style = `
        font-size: 24px;
        font-weight: bold;
        color: #555;`;

    const descricao = document.createElement('div');
    descricao.style = `
        grid-area: descricao;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;`;

    const descricaoText = document.createElement('p');
    descricaoText.innerText = atleta.descricao;
    descricaoText.style = `
        text-align: justify;
        font-size: 16px;
        color: #666;`;

    const nascimento = document.createElement('div');
    nascimento.style = `
        grid-area: nascimento;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;`;

    const nascimentoText = document.createElement('p');
    nascimentoText.innerText = atleta.nascimento;
    nascimentoText.style = `
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: #444;`;

    const botafogo = document.createElement('img');
    botafogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1200px-Botafogo_de_Futebol_e_Regatas_logo.svg.png';
    botafogo.style = `
        grid-area: botafogo;
        width: 10px;
        height: auto;`;


    card.appendChild(foto);
    foto.appendChild(img);
    card.appendChild(posicao);
    posicao.appendChild(posicaoText);
    card.appendChild(nome);
    nome.appendChild(nomeText);
    card.appendChild(descricao);
    descricao.appendChild(descricaoText);
    card.appendChild(nascimento);
    nascimento.appendChild(nascimentoText);
    card.appendChild(botafogo);

    return card;
}

function criarCard(dados) {
    for (let item of dados) {
        conteudo.appendChild(montaCard(item));
    }
}

criarCard(dados);

// inputPesquisa.onchange: evento que é disparado toda vez que o valor do input é alterado
inputPesquisa.oninput = (event) => {
    const inputValue = event.target.value;

    if ((inputValue.length < 3) || (inputValue === '')) {
        conteudo.innerHTML = '';
        criarCard(dados);
        return;
    }

    console.log(inputValue);

    const filtrado = dados.filter(
        (elemento) => elemento.nome.toLowerCase().includes(inputValue.toLowerCase()) || elemento.posicao.toLowerCase().includes(inputValue.toLowerCase())
    );

    conteudo.innerHTML = '';

    filtrado.forEach((elemento) => {
        conteudo.appendChild(montaCard(elemento));
    });
}

