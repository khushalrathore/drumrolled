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
