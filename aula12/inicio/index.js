const alvo = 'e8d95a51f3af4a3b134bf6bb680a213a';

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    if (hex_md5(entrada) === alvo) {
        mensagem.innerHTML = 'Senha correta';
    } else {
        mensagem.innerHTML = 'Senha incorreta';
    }
}