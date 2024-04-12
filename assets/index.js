document.addEventListener('keydown', function(event) {
    event.preventDefault();
    var audio;
    switch (event.key) {
        case '1':
            audio = document.getElementById('piano-1');
            break;
        case '2':
            audio = document.getElementById('piano-2');
            break;
        case '3':
            audio = document.getElementById('piano-3');
            break;
        case '4':
            audio = document.getElementById('piano-4');
            break;
        case '5':
            audio = document.getElementById('piano-5');
            break;
        case '6':
            audio = document.getElementById('piano-6');
            break;
        case '7':
            audio = document.getElementById('piano-7');
            break;
        case '8':
            audio = document.getElementById('piano-8');
            break;
        case '9':
            audio = document.getElementById('piano-9');
            break;
        case '0':
            audio = document.getElementById('piano-0');
            break;
        case ' ':
            audio = document.getElementById('meow');
            break;
        case 'b':
            audio = document.getElementById('tambourine');
            break;
        case 'c':
            audio = document.getElementById('cymball');
            break;
        case 'f':
            audio = document.getElementById('cowbell');
            break;
        default:
            return;
    }
    audio.pause(); 
    audio.currentTime = 0;
    audio.play();
});
window.onload = function() {
    var numbersDiv = document.getElementById('numbers');
    numbersDiv.classList.add('hidden');
};
document.getElementById('instrument').addEventListener('change', function() {
    var instrument = this.value;
    var numbersDiv = document.getElementById('numbers');
    var leftButton = document.getElementById('leftButton');
    var rightButton = document.getElementById('rightButton');

if (instrument.includes('Piano') || instrument.includes('Marimba')) {
      numbersDiv.classList.remove('hidden');
      leftButton.classList.add('hidden');
      rightButton.classList.add('hidden');
    } 
if (instrument.includes('Bongos')) {
      numbersDiv.classList.add('hidden');
      leftButton.classList.remove('hidden');
      rightButton.classList.remove('hidden');
    }  
    if (instrument.includes('Cymball') || instrument.includes('Meow') || instrument.includes('Tambourine') || instrument.includes('Cowbell')) {
      numbersDiv.classList.add('hidden');
      leftButton.classList.add('hidden');
      rightButton.classList.remove('hidden');
    } 

  });