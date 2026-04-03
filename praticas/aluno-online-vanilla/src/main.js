const formLogin = document.getElementById('form-login');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');

function limparErro(input, elementoErro) {
  elementoErro.textContent = '';
  input.classList.remove('input-erro');
}

function exibirErro(input, elementoErro, mensagem) {
  elementoErro.textContent = mensagem;
  input.classList.add('input-erro');
}

formLogin.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValor = inputEmail.value.trim();
  const senhaValor = inputSenha.value.trim();

  limparErro(inputEmail, erroEmail);
  limparErro(inputSenha, erroSenha);

  let formularioValido = true;

  if (emailValor === '') {
    exibirErro(inputEmail, erroEmail, 'O campo de email é obrigatório.');
    formularioValido = false;
  }

  if (senhaValor === '') {
    exibirErro(inputSenha, erroSenha, 'O campo de senha é obrigatório.');
    formularioValido = false;
  }

  if (formularioValido) {
    window.location.href = 'index.html';
  }
});

inputEmail.addEventListener('input', function () {
  limparErro(inputEmail, erroEmail);
});

inputSenha.addEventListener('input', function () {
  limparErro(inputSenha, erroSenha);
});