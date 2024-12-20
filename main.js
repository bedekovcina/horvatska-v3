let errorMessageBox;

function showErrorMessage() {
  if (!errorMessageBox) {
    errorMessageBox = document.createElement('div');
    errorMessageBox.classList.add('error-message-box');
    errorMessageBox.innerHTML = `
      <h2>GREŠKA.</h2>
      <p>horvatska v1 jos nece bit dokle god ne pronađem source kod originalne stranice</p>
      <button class="fine-button">Dombro.</button>
      <button class="help-button">Puši kurac</button>
    `;

    document.body.appendChild(errorMessageBox);

    const fineButton = document.querySelector('.fine-button');
    const helpButton = document.querySelector('.help-button');

    fineButton.addEventListener('click', () => {
      errorMessageBox.style.display = 'none';
    });

    helpButton.addEventListener('click', () => {
      window.location.href = 'https://www.youtube.com/watch?v=GMgsFZ4rkEI';
    });
  } else {
    errorMessageBox.style.display = 'block';
  }

  const sound = new Audio('zvuk/err.mp3');
  sound.play();
}

  function playSound() {
    const audio = new Audio('zvuk/BA.mp3');
    audio.play();
  }

  function explodeEffect() {
const explosionSound = new Audio('zvuk/allah.mp3'); 

explosionSound.onended = () => {
  
  const explosionImage = document.createElement('img');
  explosionImage.src = 'slike/boom.png'; 
  explosionImage.style.position = 'fixed';
  explosionImage.style.top = '0';
  explosionImage.style.left = '0';
  explosionImage.style.width = '100vw';
  explosionImage.style.height = '100vh';
  explosionImage.style.zIndex = 999;
  document.body.appendChild(explosionImage);

  
  const backgroundSound = new Audio('zvuk/boom.mp3'); 
  backgroundSound.play();


  setTimeout(() => {
    document.body.removeChild(explosionImage);
  }, 5000);
};

explosionSound.play();
}

function playSoundOBI() {
  const audio = new Audio('zvuk/OBI.mp3');
  audio.play();
}

function playSoundERMES() {
  const audio = new Audio('zvuk/ERMES.mp3');
  audio.play();
}

let inactivityTimer;
const inactivityTimeout = 10 * 60 * 1000;
const sound = new Audio('zvuk/inactivity.mp3'); 
function resetInactivityTimer() {
 
  clearTimeout(inactivityTimer);


  sound.pause();
  sound.currentTime = 0;  

 
  inactivityTimer = setTimeout(() => {
    sound.play(); 
  }, inactivityTimeout);
}


const activityEvents = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];

activityEvents.forEach(event => {
  window.addEventListener(event, resetInactivityTimer);
});


resetInactivityTimer();

function showImage(element) {
  const lightbox = document.getElementById('lightbox');
  const fullImage = document.getElementById('full-image');

  fullImage.src = element.src; 
  lightbox.style.display = 'flex'; 
}

function hideImage() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none'; 
}

function playSoundSMRAD() {
  const audio = new Audio('zvuk/prnija.mp3');
  audio.play();
}

console.log("ako citas ovo gej si")