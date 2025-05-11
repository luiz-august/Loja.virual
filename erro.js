window.addEventListener('offline', () => {
 setTimeout(() => {
  if (navigator.onLine === false) {
   // Confirma que ainda está offline
   window.location.href = 'error.html'; // Redireciona para a página de erro
  }
 }, 500);
});

window.addEventListener('online', () => {
 setTimeout(() => {
  if (navigator.onLine === true) {
   // Confirma que está online novamente
   window.location.href = 'index.html'; // Redireciona para a página inicial
  }
 }, 500);
});
