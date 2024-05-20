# Drum Rolled

Drum Rolled is a dynamic web application that allows users to play various musical instruments using their keyboard. This project demonstrates the use of HTML, CSS, and JavaScript to create an interactive audio experience.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Demo

You can view a live demo of the project [here](https://drumrolled.vercel.app/).
## Features

- Play different musical notes and sounds using keyboard keys.
- Instrument selection to switch between different sounds.
- Responsive design to ensure compatibility across various devices.
- Inspired by the popular [bongo.cat](https://bongo.cat/) project.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/khushalrathore/drumrolled.git
    ```
2. Navigate to the project directory:
    ```bash
    cd drumrolled
    ```
3. Open `index.html` in your preferred web browser.

## Usage

- Press keys `1` to `0` to play piano notes.
- Press the space bar to play the "meow" sound.
- Use the instrument selector to choose between different instruments:
  - Bongos (keys: Left and Right buttons)
  - Cymball (key: C)
  - Cowbell (key: F)
  - Meow (space bar)
  - Tambourine (key: B)
  - Piano (keys: 1 to 0)
  - Marimba (keys: Q to P)

## Code Overview

### HTML

The HTML structure includes the necessary audio elements for each instrument, a header with control buttons, a main section with a form for selecting instruments, and a footer with credits.

### CSS

The CSS file (`assets/index.css`) styles the buttons, layout, and overall appearance of the web application.

### JavaScript

The JavaScript file (`assets/index.js`) contains event listeners for keyboard inputs and dynamically updates the UI based on the selected instrument. It handles:
- Playing the corresponding audio for each key press.
- Displaying and hiding UI elements based on the selected instrument.

### Example Code

#### HTML
```html
<audio id="piano-1" src="assets/notes/C-sharp.mp3"></audio>
<!-- Additional audio elements -->
<div class="piano-bar">
  <button class="btn-1" id="active">1</button>
  <!-- Additional buttons -->
</div>
```

#### JavaScript
```javascript
document.addEventListener('keydown', function(event) {
    event.preventDefault();
    var audio;
    switch (event.key) {
        case '1': audio = document.getElementById('piano-1'); break;
        // Additional cases for other keys
        default: return;
    }
    audio.pause();
    audio.currentTime = 0;
    audio.play();
});
```

## Acknowledgements

- Inspired by [bongo.cat](https://bongo.cat/).
- Website by [Khushal Rathore](https://www.linkedin.com/in/khushalrathore).

## Contact

For any inquiries, please contact Khushal Rathore via [LinkedIn](https://www.linkedin.com/in/khushalrathore).

