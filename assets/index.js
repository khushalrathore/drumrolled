document.addEventListener('keydown', function(event) {
  if (event.key === '1') {
    event.preventDefault();
    var audio = document.getElementById('piano-3');
    audio.pause(); 
    audio.currentTime = 0;
    audio.play();
  }
});
