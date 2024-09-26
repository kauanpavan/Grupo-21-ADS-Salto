// Verifica se há uma token no Local Storage
if (localStorage.getItem('token')) {
  
  setTimeout(function() {
    // Remove a token do Local Storage após ALGUNS MINUTOS
    localStorage.removeItem('token');
    console.log('Token removida do Local Storage após alguns minutos.');
  }, 1200000); // 20 minutos em milissegundos
} else {
  console.log('Nenhuma token encontrada no Local Storage.');

}
