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

function openLightboxGalerie(){
  document.querySelector('.galerie_lightbox').style.display = 'flex';
  document.querySelector('footer').style.display = 'none';
}
function closeLightboxGalerie(){
  document.querySelector('.galerie_lightbox').style.display = 'none';
  document.querySelector('footer').style.display = 'block';
}
const lightboxGalerie = document.querySelector('.galerie_lightbox');
if (lightboxGalerie) {
  lightboxGalerie.addEventListener('click', function(e) {
    if (e.target === this) closeLightboxGalerie();
  });
}
