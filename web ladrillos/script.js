
const animatedElements = document.querySelectorAll('.animated-img');

const observerOptions = {
  threshold: 0.2 // El elemento se activa cuando el 20% es visible
};

// Función que activa la animación
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in'); // Se activa clase CSS para animar
      observer.unobserve(entry.target); // Deja de observar el elemento
    }
  });
};

// Creamos el observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observamos todos los elementos
animatedElements.forEach(el => observer.observe(el));

/* ===================== LIGHTBOX GALERÍA ===================== */
const lightboxImages = document.querySelectorAll('.lightbox');

// Creamos elementos del lightbox
const lightboxOverlay = document.createElement('div');
lightboxOverlay.id = 'lightboxOverlay';
document.body.appendChild(lightboxOverlay);

const lightboxImg = document.createElement('img');
lightboxImg.id = 'lightboxImg';
lightboxOverlay.appendChild(lightboxImg);

// Cerrar lightbox al hacer clic en overlay
lightboxOverlay.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
});

// Función para abrir imagen en lightbox
lightboxImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxOverlay.style.display = 'flex';
  });
});

/* EFECTOS EXTRA */
// Btn WhatsApp 
const whatsappButton = document.querySelector('.whatsapp-float');
setInterval(() => {
  whatsappButton.classList.toggle('pulse');
}, 2000);


