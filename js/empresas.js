const btnToggle = document.querySelector("#check")
const corbody = document.querySelector("body")

btnToggle.addEventListener("click", ()=> {
    corbody.classList.toggle("dark-mode")
})

// Validação de formulário

const form = document.querySelector('form');
const email = document.getElementById('idEmail');
const telefone = document.getElementById('idNumber');
const nome = document.querySelector('.nome');

// Função que escuta quando o submit acontece, dispara as validações e 
// em caso de validação correta, dispara um alerta de cadastro realizado.
form.addEventListener('submit' , (e) => {
    e.preventDefault()
    alert('Cadastro realizado!')
})

function validarNome(nome) {
  if (nome.length < 2) {
    return false;
  }
  return true;
}

var re = /\S+@\S+\.\S+/;

email.addEventListener('keyup', () => {
  if (re.test(email.value) !== true) {
    textEmail.textContent = 'Formato: nome@mail.com';
  } else {
    textEmail.textContent = '';
  }
});

telefone.addEventListener('keyup', () => {
  if (telefone.value.length < 15) {
    textFone.textContent = 'Formato: (11)11111-1111';
  } else {
    textFone.textContent = '';
  }
});

nome.addEventListener('keyup', () => {
  if (nome.value.length < 2) {
    textName.textContent = 'No mínimo 2 caracteres';
  } else {
    textName.textContent = '';
  }
});

// Formata o numero de telefone enquanto
// o usuário digita.

telefone.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)); // Dispara quando digitado no campo
telefone.addEventListener('change', (e) => mascaraTelefone(e.target.value)); // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
  valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
  telefone.value = valor; // Insere o(s) valor(es) no campo
};
