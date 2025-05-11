window.addEventListener('offline', () => {
 setTimeout(() => {
  window.location.href = 'error.html';
 }, 500); // Pequeno atraso para garantir a detecção
});

window.addEventListener('online', () => {
 setTimeout(() => {
  window.location.href = 'index.html';
 }, 500);
});
