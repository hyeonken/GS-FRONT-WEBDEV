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