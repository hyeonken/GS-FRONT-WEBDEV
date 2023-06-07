const btnToggle = document.querySelector("#check");
const corbody = document.querySelector("body");

btnToggle.addEventListener("click", ()=> {
    corbody.classList.toggle("dark-mode");
});

alert('Seja bem-vindo!');
