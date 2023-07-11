function voltar() {
    const botao = document.querySelector(".btn-subir")
    botao.addEventListener("click", scrollTo(0, 0))
}
function flutuar() {
    const botao = document.querySelector("main-section")
    if (document.documentElement.scrollTop > 20) {
        botao.classList.add('btn-subir')
    }
    if (document.documentElement.scrollTop < 20) {
        botao.classList.remove('btn-subir')
    }
}
window.onscroll = flutuar;


function lerDados() {
    let strDados = localStorage.getItem('db');
    var objDados = {};

    if (strDados) {

        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            cadastros: [
                {
                    nome: "",
                    email: "",
                    telefone: "",
                    idJogador: "",
                    clube: ""
                },
            ]
        };
        salvaDados(objDados);
    }
    return objDados
}


function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

    let botao = document.getElementById('botao');
    botao.addEventListener('click', function(){
    let strnome = document.getElementById('nome').value;

    let novoCadastro = {
        nome: strnome
    }

    objDados.cadastros.push(novoCadastro);

    salvaDados(objDados);
    ImprimirDados();

});

function ImprimirDados() {
    let tela = document.getElementById('usuarios');
    let strHtml = '';
    let dados = lerDados();

    for (i = 0; i < objDados.cadastros.length; i++) {
        strHtml += `<tr><td>${strnome}</td></tr>`
    }
    tela.innerHTML = strHtml;
}
