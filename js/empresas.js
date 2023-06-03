const btnToggle = document.querySelector("#check")
const corbody = document.querySelector("body")
console.log(btnToggle);

btnToggle.addEventListener("click", ()=> {
    corbody.classList.toggle("dark-mode")
})