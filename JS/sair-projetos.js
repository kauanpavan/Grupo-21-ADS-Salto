

if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = './login.html'
}



function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = './index.html'
}