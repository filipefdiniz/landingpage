function voltar() {
    const botao = document.querySelector(".btn-subir");
    botao.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 1500
        });
    });
}

function makeFloatButton() {
    var el = document.querySelector('.btn-subir');

    if (document.documentElement.scrollTop > 100) {
        el.classList.add('fixedElement');
    }   
    if(document.documentElement.scrollTop < 100 ){
        el.classList.remove('fixedElement');
    }
    
}

window.addEventListener('scroll', makeFloatButton);




function salvarCadastro() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let idJogador = document.getElementById('idJogador').value;
    let clube = document.getElementById('clube').value;

    let novoCadastro = {
        nome: nome,
        email: email,
        telefone: telefone,
        idJogador: idJogador,
        clube: clube
    };

    let dados = lerDados();
    dados.cadastros.push(novoCadastro);
    salvaDados(dados);
}

function lerDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            cadastros: []
        };
        salvaDados(objDados);
    }
    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

document.getElementById('botao').addEventListener('click', function () {
    salvarCadastro();
    window.location.href = 'cadastros.html';
});
