const triggerSequence = "runaway";
let typedSequence = "";

function handleKeyboardInput(event) {
    typedSequence += event.key.toLowerCase();
    if (typedSequence.includes(triggerSequence)) {
        playPianoCode();
        typedSequence = "";
    }
}
function playPianoCode() {
    const pianoCode = "EEED#D#D#D#C#C#C#AAE...";
    }
document.addEventListener('keydown', handleKeyboardInput);
