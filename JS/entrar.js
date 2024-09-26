function entrar() {
  let usuario = document.querySelector('#usuario');
  let userLabel = document.querySelector('#userLabel');

  let senha = document.querySelector('#senha');
  let senhaLabel = document.querySelector('#senhaLabel');

  let msgError = document.querySelector('#msgError');
  let listaUser = [];

  let userValid = {
      nome: '',
      user: '',
      senha: '',
  };

  listaUser = JSON.parse(localStorage.getItem('listaUser'));

  if (listaUser === null) {
      listaUser = [];
  }

  listaUser.forEach((item) => {
      if(usuario.value == item.userCad && senha.value == item.senhaCad){ //recebendo os valores
          userValid = {
              nome: item.nomeCad,
              user: item.userCad,
              senha: item.senhaCad
          };
      }
  });

  if(usuario.value.trim() === '' || senha.value.trim() === '') {
      msgError.setAttribute('style', 'display: block');
      msgError.innerHTML = 'Preencha todos os dados corretamente';
      return; // Sai da função se um dos campos estiver vazio
  }

  if(usuario.value == userValid.user && senha.value == userValid.senha) {
    window.location.href = './index.html'

      
      let mathRandom = Math.random().toString(16).substr(2); //criaçao do token pra validaçao 
      let token = mathRandom + mathRandom;
      localStorage.setItem('token', token);
  } else {

      userLabel.setAttribute('style', 'color: red');
      usuario.setAttribute('style', 'border-color: red');
      senhaLabel.setAttribute('style', 'color: red');
      senha.setAttribute('style', 'border-color: red');
      msgError.setAttribute('style', 'display: block');
      msgError.innerHTML = 'Usuário ou senha incorretos';
      usuario.focus();
  }
}
