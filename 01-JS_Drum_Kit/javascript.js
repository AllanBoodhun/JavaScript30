function removeTransition(e){
  // if (e.propertyName !== 'animation') return; //
  // this.classList.remove('active');
  console.log("coucou");
}


function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select the audio file from keydown
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select the div from keydown
  if (!audio) return; // stop the function if no song found

  
  key.classList.add('active'); // add css class "active"
  audio.currentTime = 0; // set the timer to 0. Now i can spam
  audio.play(); // play the constant song
  setTimeout(removeClass, 200);

  function removeClass(){
    key.classList.remove('active');
  }
  
}

document.addEventListener('keydown',playSound);






