let dados;

const pegaDados = async (url) => {
    const response = await fetch(url);
    const dados = await response.json();
    return dados;
}

pegaDados('https://botafogo-atletas.mange.li/feminino').then(
    (entrada) => {
        dados = entrada;
        });

body = document.querySelector('body');
body.style.backgroundColor = '#f8f9fa';

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

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const montaCard = (atleta) => {
    const card = document.createElement('article');
    card.style = `
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas:
            "foto posicao"
            "foto nome"
            "descricao descricao"
            "nascimento nascimento";
        gap: 10px;
        width: 700px;
        height: 500px;
        border-radius: 15px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        padding: 20px;
        background-color: #fff;`;

    card.dataset.id = atleta.id;
    card.dataset.nome = atleta.nome;
    card.dataset.posicao = atleta.posicao;
    card.dataset.descricao = atleta.descricao;
    card.dataset.imagem = atleta.imagem;
    card.dataset.elenco = atleta.elenco;
    card.dataset.nomeCompleto = atleta.nome_completo;
    card.dataset.nascimento = atleta.nascimento;
    card.dataset.altura = atleta.altura;

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
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        `
    ;


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

    return card;
}

const criarCard = () => {
    // const nome = getCookie('nome')
    // const posicao = getCookie('posicao')
    // const descricao = getCookie('descricao')
    // const imagem = getCookie('imagem')
    // const elenco = getCookie('elenco')
    // const nomeCompleto = getCookie('nomeCompleto')
    // const nascimento = getCookie('nascimento')
    // const altura = getCookie('altura')

    // const nome = localStorage.getItem('nome')
    // const posicao = localStorage.getItem('posicao')
    // const descricao = localStorage.getItem('descricao')
    // const imagem = localStorage.getItem('imagem')
    // const elenco = localStorage.getItem('elenco')
    // const nomeCompleto = localStorage.getItem('nomeCompleto')
    // const nascimento = localStorage.getItem('nascimento')
    // const altura = localStorage.getItem('altura')

    const parametros = new URLSearchParams(window.location.search);
    const nome = parametros.get('nome');
    const posicao = parametros.get('posicao');
    const descricao = parametros.get('descricao');
    const imagem = parametros.get('imagem');
    const elenco = parametros.get('elenco');
    const nomeCompleto = parametros.get('nomeCompleto');
    const nascimento = parametros.get('nascimento');
    const altura = parametros.get('altura');

    const atleta = {
        id: 1,
        nome: nome,
        posicao: posicao,
        descricao: descricao,
        imagem: imagem,
        elenco: elenco,
        nome_completo: nomeCompleto,
        nascimento: nascimento,
        altura: altura

}
    return montaCard(atleta);
}

conteudo.appendChild(criarCard());