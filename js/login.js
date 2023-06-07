const btnToggle = document.querySelector("#check");
const corbody = document.querySelector("body");
const imgLogin = document.querySelector("#formsGeral img");

btnToggle.addEventListener("click", ()=> {
    corbody.classList.toggle("dark-mode");
    imgLogin.src = "../img/logo_dark.png";
    imgLogin.style.width = "210px";
    imgLogin.style.marginLeft = "2%";
}); 

function isDarkMode() {
    return document.body.classList.contains('dark-mode');
};

function toggleImageMode() {
if (isDarkMode()) {
    // Altera a imagem para o modo escuro
    imgLogin.src = '../img/logo_dark.png';
} else {
    // Altera a imagem para o modo claro
    imgLogin.src = '../img/logo.png';
    imgLogin.style.width = "250px";
    imgLogin.style.marginLeft = "1%";
}};

document.body.addEventListener('change', toggleImageMode);

// Validando formulário

botao.addEventListener('click', () => {
    const userUser = document.querySelector('#idUser').value;
    const userSenha = document.querySelector('#idPass').value;
    const botao = document.querySelector('#btnSubmit');

    if(userUser === '' && userSenha === ''){
        alert('Por favor preencha todos os campos.');
    }else if (userUser === 'Admin' && userSenha === '123456'){
        window.location =
          'https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021';
    } else { alert('Login recusado. Verifique novamente as credenciais.'); };
});
