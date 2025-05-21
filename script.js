const products = [
 {
  id: 1,
  name:
   'Moletom Familia do Grau 244 Estampado Premium Original Grau Corte Osascorte Bike Moto Blusa de Frio',
  price: 67.15,
  image:
   'https://down-tx-br.img.susercontent.com/br-11134207-7qukw-lic7568z4k1r2d.webp',
  category: 'clothes',
  description: '',
  link: 'https://s.shopee.com.br/7pgalOsp5H',
  sizes: ['P', 'M', 'G', 'GG'],
 },
 {
  id: 2,
  name:
   'Tênis Feminino Academia - Tenis Feminino Casual - Tênis meia Confortável Sem Cadarço',
  price: 23.89,
  image:
   'https://down-br.img.susercontent.com/file/sg-11134201-22110-6jwj8xx4hgjv8b',
  category: 'shoes',
  description: '',
  sizes: ['39', '38', '37', '36', '35', '34'],
  link: 'https://s.shopee.com.br/5VIenB5WGw',
 },
 {
  id: 3,
  name: 'Corrente Colar Masculino Prata grossa aço inox, cordão prata.',
  price: 39.9,
  image:
   'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lylbzo7diew5ce',
  category: 'accessories',
  description:
   'Relógio clássico com pulseira em couro genuíno e mostrador elegante.',

  link: 'https://s.shopee.com.br/6VBDCp3pze',
 },
 {
  id: 4,
  name:
   'Kit 2 Calça Moletom Masculina Com Punho E Elastico Peluciada Muito Confortavel Com Forro',
  price: 64.9,
  image:
   'https://down-br.img.susercontent.com/file/br-11134207-7r98o-ly1nnmc08q7z0b',
  category: 'clothes',
  description:
   'Calça jeans com lavagem moderna e corte reto. Combina com qualquer look.',
  sizes: ['M', 'G', 'GG', 'G1', 'G2', 'G3'],
  link: 'https://s.shopee.com.br/2qHunP5els',
 },
 {
  id: 5,
  name:
   "2025 Nova Série 8 Relógio T800 Ultra Smart Watch Esportivo Sem Fio À Prova D'água T800 Ultra2 MAX",
  price: 46.6,
  image:
   'https://down-ws-br.img.susercontent.com/br-11134207-7r98o-ltf8m6f1us5b8b.webp',
  category: 'accessories',
  description: '',
  link: 'https://s.shopee.com.br/5Afpcybxrk',
 },
 {
  id: 6,
  name: 'Tênis Masculino Header Kicks Original Mais Vendido Promoção',
  price: 39.9,
  image:
   'https://down-zl-br.img.susercontent.com/br-11134207-7r98o-luar5qdkbko5ac.webp',
  category: 'shoes',
  description: '',
  sizes: ['38', '39', '40', '41', '42'],
  link: 'https://s.shopee.com.br/5AfpXxnCRC',
 },
 {
  id: 7,
  name:
   'Tênis Malha Respirável Calce Fácil Esportivo Academia Treino Caminhada Corrida Masculino Feminino',
  price: 38.97,
  image:
   'https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lokb77estvahba.webp',
  category: 'shoes',
  description: '',
  sizes: ['43', '42', '41', '40', '39', '38', '37', '36', '35', '34'],
  link: 'https://s.shopee.com.br/3LEACDTbpi',
 },
 {
  id: 8,
  name:
   'Kit tenis esportivo + relogio + meia Tenis masculino esportivo leve envio imediato esportivo marca famosa corrida solado',
  price: 58.52,
  image:
   'https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljoafwt2pvgq50',
  category: 'shoes',
  description: '',
  sizes: ['44', '43', '42', '41', '40', '39', '38', '37', '36', '35', '34'],
  link: 'https://s.shopee.com.br/3VXZvNOIC9',
 },
 {
  id: 9,
  name:
   'Moletom Premium Masculino Com Capuz Bolso Canguru Liso Feminina Blusa De Frio Casaco Flanelado',
  price: 49.53,
  image:
   'https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m2ttlfzdmsr775.webp',
  category: 'clothes',
  description: '',
  link: 'https://s.shopee.com.br/60EwaLVizz',
  sizes: ['P', 'M', 'G', 'GG'],
 },
 {
  id: 10,
  name:
   'KIT 2 Calça Jeans Jogger Masculina Premium com Lycra - Sarja com Punho, Conforto e Estilo',
  price: 59.0,
  image:
   'https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m2gs4kt0ze4m0b.webp',
  category: 'clothes',
  description: '',
  link: 'https://s.shopee.com.br/1g5xQynyrD',
  sizes: ['M', 'GG', 'G', 'P'],
 },
];

// DOM Elements
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const filterButtons = document.querySelectorAll('.filter-btn');
const productsGrid = document.querySelector('.products-grid');
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close-modal');

// Navigation toggle
navToggle.addEventListener('click', () => {
 navLinks.classList.toggle('active');
});

// Filter products
function filterProducts(category) {
 const filteredProducts =
  category === 'all'
   ? products
   : products.filter((product) => product.category === category);

 displayProducts(filteredProducts);
}

// Display products
function displayProducts(productsToShow) {
 productsGrid.innerHTML = productsToShow
  .map(
   (product) => `
        <div class="product-card" onclick="showProductDetails(${product.id})">
            <img src="${product.image}" alt="${
    product.name
   }" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <button class="buy-button" onclick="buyProduct(event, ${
                 product.id
                })">
                    Comprar Agora
                </button>
            </div>
        </div>
    `
  )
  .join('');
}

// Show product details in modal
function showProductDetails(productId) {
 const product = products.find((p) => p.id === productId);

 if (!product) {
  console.error(`Produto com ID ${productId} não encontrado.`);
  return;
 }

 // Certifica que product.sizes existe
 const sizesHtml = product.sizes
  ? product.sizes
     .map((size) => `<button class="size-btn">${size}</button>`)
     .join('')
  : '<p>Sem tamanhos disponíveis</p>';

 const modalContent = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details">
            <h2>${product.name}</h2>
            <p class="product-price">R$ ${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <div class="size-selector">
                <h4>Tamanhos Disponíveis:</h4>
                <div class="sizes">
                    ${sizesHtml}
                </div>
            </div>
            <button class="buy-button" onclick="buyProduct(event, ${
             product.id
            })">
                Comprar Agora
            </button>
        </div>
    `;

 modal.querySelector('.modal-body').innerHTML = modalContent;
 modal.style.display = 'block';
   document.body.style.overflow = 'auto';
 modal.style.overflowY = 'auto';
}

// Buy product
function buyProduct(event, productId) {
 event.stopPropagation();
 const product = products.find((p) => p.id === productId);

 if (product && product.link) {
  window.location.href = product.link;
 } else {
  alert('Este produto não possui um link de compra.');
 }
}

// Close modal
closeModal.addEventListener('click', () => {
 modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
 if (e.target === modal) {
  modal.style.display = 'none';
 }
});

// Filter button click handlers
filterButtons.forEach((button) => {
 button.addEventListener('click', () => {
  // Remove active class from all buttons
  filterButtons.forEach((btn) => btn.classList.remove('active'));
  // Add active class to clicked button
  button.classList.add('active');
  // Filter products
  filterProducts(button.dataset.category);
 });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
 if (window.scrollY > 50) {
  document.querySelector('.navbar').style.background =
   'rgba(255, 255, 255, 0.95)';
 } else {
  document.querySelector('.navbar').style.background = '#fff';
 }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
 displayProducts(products);
});
