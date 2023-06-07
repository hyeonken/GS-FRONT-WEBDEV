// Carrossel de imagens
// Pegando os inputs do HTML
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Fazendo o botao criar os eventos
 botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        DesativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagem(indice);
    })
 })

 // Função para mostrar a imagem
function mostrarImagem(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

// Função para mudar o botão selecionado
function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

// Função para esconder a imagem que era a ativa
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

// Função para mudar o botão selecionado
function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

// Função para mostrar a hora
function displayTempo(){
    var tempo = new Date();
    var h = tempo.getHours();
    var m = tempo.getMinutes();
    var s = tempo.getSeconds();
    var classifica = document.getElementById("classifica");

    if(h >= 12){
        classifica.innerHTML = "pm";
    }else{
        classifica.innerHTML = "am";
    }

    if(h > 12){
        h = h - 12
    }

    document.getElementById("horas").innerHTML = h;
    document.getElementById("minutos").innerHTML = m;
    document.getElementById("segundos").innerHTML = s;
}
setInterval(displayTempo, 10);

// Mostra data
let dataHoje = document.getElementById("data_hoje")
let hoje = new Date();
let dia = `${hoje.getDate() < 10 ? "0" : ""}${hoje.getDate()}`;
let mes = `${(hoje.getMonth() + 1) < 10 ? "0" : ""}${hoje.getMonth() + 1}`;
let ano = hoje.getFullYear();

dataHoje.textContent = `${dia}/${mes}/${ano}`;


const btnToggle = document.querySelector("#check")
const corbody = document.querySelector("body")


btnToggle.addEventListener("click", ()=> {
    corbody.classList.toggle("dark-mode")
})

