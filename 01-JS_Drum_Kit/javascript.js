document.addEventListener('keydown',function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select the audio file from keydown
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select the div from keydown
  console.log(key)

  if (!audio) return; // stop the function if no song found
  audio.currentTime = 0; // set the timer to 0. Now i can spam
  audio.play(); // play the constant song
  
});