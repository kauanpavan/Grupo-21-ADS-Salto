let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

//verificando preenchimento correto
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome';
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
});

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 2) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuário *Insira no mínimo 3 caracteres';
        usuario.setAttribute('style', 'border-color: red');
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuário';
        usuario.setAttribute('style', 'border-color: green');
        validUsuario = true;
    }
});

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 4) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no mínimo 5 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
});

//Confirmando que mesmo que o user muda a senha a confirmaçao acompanha 
confirmSenha.addEventListener('keyup', () => {
    if (senha.value !== confirmSenha.value || senha.value.length < 5) {
        labelConfirmSenha.setAttribute('style', 'color: red');
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
        confirmSenha.setAttribute('style', 'border-color: red');
        validConfirmSenha = false;
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green');
        labelConfirmSenha.innerHTML = 'Confirmar Senha';
        confirmSenha.setAttribute('style', 'border-color: green');
        validConfirmSenha = true;
    }
});

senha.addEventListener('keyup', () => {
    if (senha.value !== confirmSenha.value || senha.value.length < 5) { //vai verificar se os dois estao iguais em tempo real
        labelConfirmSenha.setAttribute('style', 'color: red');
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
        confirmSenha.setAttribute('style', 'border-color: red');
      
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green');
        labelConfirmSenha.innerHTML = 'Confirmar Senha';
        confirmSenha.setAttribute('style', 'border-color: green');
        
    }
});

function cadastrar() { //cadastro
    if (validNome && validUsuario && validSenha && validConfirmSenha) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
        listaUser.push(
        {
          nomeCad: nome.value,
          userCad: usuario.value,
          senhaCad: senha.value
        }
        )
    
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrado com sucesso..</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(()=>{
        
    window.location.href = './login.html'

    }, 3000)
    } else {
        msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = ''
    }
}
