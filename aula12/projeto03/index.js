import { hex_sha256 } from 'sha256.js';

// validar_senha: Função que valida a senha inserida no campo de senha
function validar_senha(alvo) {
    document.getElementById('btn_login').onclick = () => {
        const senha = document.getElementById('senha').value;
        const usuario = document.getElementById('usuario').value;

        const mensagem = document.getElementById('mensagem');

        if (hex_sha256(usuario+senha) === alvo) {
            mensagem.innerHTML = 'Senha correta';
            save_login_session();
            window.location.href = 'secreto.html';
        } else {
            mensagem.innerHTML = `Senha incorreta`;
        }
    }
}

// save_login_session: Função que guarda no sessionStorage que o login foi feito
function save_login_session() {
    sessionStorage.setItem('login', 'true');
}

validar_senha('2bc0a4934e329a57b5923120fff2ce69c5dc99da952da901b46c3c3412d2ec90');