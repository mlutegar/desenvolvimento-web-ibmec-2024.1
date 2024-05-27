// FUNÇÕES

// deslogar: Função que desloga o usuário
function deslogar() {
    document.getElementById('btn_deslogar').onclick = () => {
        sessionStorage.setItem('login', 'false');
        window.location.href = 'index.html';
    }
}

// exibir_segredo: Função que exibe o segredo
function exibir_segredo() {
    const segredo = document.getElementById('segredo');
    segredo.innerHTML = 'ESCONDIDA';
}

// PÁGINA

if (sessionStorage.getItem('login') === 'true') {
    exibir_segredo();
} else {
    alert('Você não está logado');
}

deslogar();