document.querySelectorAll('#block_text_règlement p').forEach(p => {
  const imgElement = document.createElement('img');
  imgElement.src = "images/Logo_AWTD_2.png";
  imgElement.style.width = "1.5rem";
  imgElement.style.display = "block";
  imgElement.style.margin = "1.5rem auto";
  p.insertAdjacentElement('afterend', imgElement);
});
document.querySelectorAll('.text_page div').forEach(div => {
  const imgElement = document.createElement('img');
  imgElement.src = "images/Logo_AWTD_2.png";
  imgElement.style.width = "1.5rem";
  imgElement.style.display = "block";
  imgElement.style.margin = "2rem auto";
  div.insertAdjacentElement('afterend', imgElement);
});
function openLightbox(src){
  document.getElementById('image_lightbox').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox(){
  document.getElementById('lightbox').style.display = 'none';
}
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  lightbox.addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });
}

function go_left() {
  const slider = document.querySelector('.photo-accueil');
  const imageSize = window.innerWidth * 0.32;
  if (slider.scrollLeft <=10) {
    slider.scrollLeft = imageSize*3;
  } else {
      slider.scrollBy({
        left: -imageSize,
        behavior: 'smooth'
      });
  }}

function go_right() {
  const slider = document.querySelector('.photo-accueil');
  const imageSize = window.innerWidth * 0.32;
  if (slider.scrollLeft + slider.clientWidth + imageSize >= slider.scrollWidth) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollBy({
      left: imageSize,
      behavior: 'smooth'
    });
  }}


const photoAccueil = document.querySelector('.photo-accueil');
if (photoAccueil) {
  let isDragging = false;
  let startX;
  let scrollLeft;
  let isScrolling = false;

  photoAccueil.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - photoAccueil.offsetLeft;
    scrollLeft = photoAccueil.scrollLeft;
    photoAccueil.style.userSelect = 'none';
  });

  photoAccueil.addEventListener('mouseleave', () => {
    isDragging = false;
    photoAccueil.style.userSelect = '';
  });

  photoAccueil.addEventListener('mouseup', () => {
    isDragging = false;
    photoAccueil.style.userSelect = '';
  });

  photoAccueil.addEventListener('mousemove', (e) => {
    photoAccueil.style.userSelect = 'none';
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - photoAccueil.offsetLeft;
    const walk = (x - startX) * 2; // le multiplicateur ajuste la vitesse du scroll
    photoAccueil.scrollLeft = scrollLeft - walk;
  });

  photoAccueil.addEventListener('scroll', () => {
    if (isScrolling) return;
    isScrolling = true;

    const scrollMax = photoAccueil.scrollWidth / 2;

    if (photoAccueil.scrollLeft >= scrollMax) {
      photoAccueil.scrollLeft -= scrollMax;
    }

    if (photoAccueil.scrollLeft <=10) {
      photoAccueil.scrollLeft = scrollMax;
    }

    isScrolling = false;
  });
}

let bouton_menu = document.querySelector('.bouton_menu');
let bouton_fermer = document.querySelector('.bouton_fermer');
let body = document.querySelector('body');

bouton_menu.addEventListener('click', function(){
  body.classList.add('open')
})
bouton_fermer.addEventListener('click', function(){
  body.classList.remove('open')
})

// Création d'un lightbox en cliquant sur l'image de la page galerie
function openLightboxGalerie(element) {
  const lightbox = element.nextElementSibling;
  if (lightbox && lightbox.classList.contains('galerie_lightbox')) {
    lightbox.style.display = 'flex';
    document.querySelector('footer').style.display = 'none';

    // Ajout du gestionnaire de clic pour fermer en dehors
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightboxGalerie(e.target);
    });
  }
}

function closeLightboxGalerie(element) {
  const lightbox = element.closest('.galerie_lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
    document.querySelector('footer').style.display = 'block';
  }
}

document.querySelectorAll('.galerie_onglet > div').forEach(dossier => {
  // Récupérer toutes les images sauf celle du bouton exit
  const images = Array.from(dossier.querySelectorAll('.galerie_lightbox img[src]'))
                      .map(img => img.src)
                      .filter(src => !src.includes('icone/exit.png'));

  // Choisir une image au hasard ou image par défaut
  let imgChoisie;
  if (images.length > 0) {
    const randomIndex = Math.floor(Math.random() * images.length);
    imgChoisie = images[randomIndex];
  } else {
    imgChoisie = 'photo/camera.png';
  }

  // Appliquer en background au h4
  const h4 = dossier.querySelector('h4');
  if (h4) {
    h4.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${imgChoisie}')`;
    h4.style.backgroundSize = '100% auto';
    h4.style.backgroundRepeat = 'no-repeat';
    h4.style.backgroundPosition = 'center center';
  }
});


// 1. Récupérer toutes les images des lightbox sauf celles des dossiers vides
const toutesImages = [];

document.querySelectorAll('.galerie_lightbox').forEach(lightbox => {
  const images = Array.from(lightbox.querySelectorAll('img[src]'))
                      .filter(img => !img.src.includes('icone/exit.png'));
  if (images.length > 0) {
    images.forEach(img => toutesImages.push(img.src));
  }
});

// 2. Appliquer le diaporama si au moins une image est trouvée
const imageAccueil = document.getElementById('image_accueil_galerie');

if (imageAccueil && toutesImages.length > 0) {
  let index = Math.floor(Math.random() * toutesImages.length); // démarrage aléatoire
  // Fonction pour changer l’image
  const changerImage = () => {
    imageAccueil.src = toutesImages[index];
    index = (index + 1) % toutesImages.length; // boucle circulaire
  };
  changerImage(); // afficher la première
  // Défilement toutes les 5 secondes
  setInterval(changerImage, 5000);
}
