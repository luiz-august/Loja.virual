window.addEventListener('offline', () => {
 setTimeout(() => {
  if (navigator.onLine === false) {
   document.querySelector('.container').style.display = 'flex';
   document.querySelector('.container').style.flexDirection = 'column';
   document.querySelector('.container').style.alignItems = 'center';
   document.querySelector('.container').style.justifyContent = 'center';
   document.querySelector('.container').style.height = '100vh';

   document.querySelector('body').style.background =
    'linear-gradient(45deg, #d1a3ff, #b084f4, #8f64ff)';
   document.querySelector('body').style.backgroundSize = '400% 400%';
   document.querySelector('body').style.animation =
    'animateBackground 10s infinite alternate';
   document.querySelector('body').style.color = 'white';
   document.querySelector('body').style.fontFamily = 'Arial, sans-serif';
   document.querySelector('body').style.textAlign = 'center';

   const styleSheet = document.styleSheets[0]; // Acessa a primeira folha de estilo do documento
   styleSheet.insertRule(
    `
    @keyframes animateBackground {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }
`,
    styleSheet.cssRules.length
   );
   document.querySelector('.panther img').style.width = '200px';
   document.querySelector('.panther img').style.animation =
    'float 3s infinite alternate';

   styleSheet.insertRule(
    `
@keyframes float {
 0% {
  transform: translateY(0px);
 }
 100% {
  transform: translateY(-20px);
 }
}`
   );

   document.querySelector('.message').style.maxWidth = '600px';
   document.querySelector('.message').style.animation = 'fadeIn 2s ease-in-out';
   document.querySelector('h2').style.fontsize = '24px';
   document.querySelector('h2').style.animation =
    'glow 1.5s infinite alternate';
   styleSheet.insertRule(
    `
    @keyframes glow {
 0% {
  text-shadow: 0px 0px 10px white;
 }
 100% {
  text-shadow: 0px 0px 20px #ffccff;
 }
}`
   );

   document.querySelector('p').style.fontsize = '18px';
   document.querySelector('p').style.opacity = '0';
   document.querySelector('p').style.animation = 'fadeText 3s forwards';

   styleSheet.insertRule(
    `@keyframes fadeText {
 0% {
  opacity: 0;
 }
 100% {
  opacity: 1;
 }
}`
   );

   document.querySelector('section').style.display = 'none';
   document.querySelector('.about-content').style.display = 'none';
   document.querySelector('.about').style.animation = 'none';
   document.querySelector('#about').style.display = 'none';
   document.querySelector('footer').style.display = 'none';
   document.querySelector('header').style.display = 'none';
   document.querySelector('nav').style.display = 'none';
  }
 }, 500);
});

window.addEventListener('online', () => {
 setTimeout(() => {
  if (navigator.onLine === true) {
   // Confirma que está online novamente
   .location.reload(); // Redireciona para a página inicial
  }
 }, 500);
});
