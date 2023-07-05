const pad = document.getElementById('pad');
// Selecting the slider
const slider = document.getElementById('count');

const gridSizeOutput = document.getElementById('grid_size');


// Function to output current slider value
function updateGridSizeText() {
    gridSizeOutput.textContent = `${slider.value} X ${slider.value}`;
};

let canvasColor = '';
let selectedColor = '';
let isLightenToggled = 0;
let isDarkenToggled = 0;
let isRandomColorToggled = 0;

const colorInput = document.getElementById('colorInput');
selectedColor = colorInput.value;


let isGridToggled = 1;
function toggleGrid() {
    const pixels = document.querySelectorAll('.pixel');
    if (isGridToggled == 1) {
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].classList.add('no-border');
        }
        isGridToggled = 0;
    }
    else {
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].classList.remove('no-border');
        }
        isGridToggled = 1;
    }
}


// Function to add the required number of divs to the pad
function updatePad() {
    const numPixels = parseInt(slider.value);

    pad.style.gridTemplateColumns = `repeat(${numPixels},1fr)`;

    for (let i = 0; i < numPixels ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.classList.add('canvas');
        if (isGridToggled == 0) {
            pixel.classList.add("no-border");
        }
        pixel.style.filter = 'brightness(100%)';
        const pixelSide = 660 / numPixels;
        pixel.style.width = `${pixelSide}px`;
        pixel.style.height = `${pixelSide}px`;
        pad.appendChild(pixel);
    };
    const pixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseenter", function (event) {
            if (event.buttons) {
                if (isPenToggled == 1) {
                    pixels[i].style.backgroundColor = `${selectedColor}`;
                    selectColor();
                    pixels[i].classList.remove("canvas");
                }
                if (isEraserToggled == 1) {
                    pixels[i].style.backgroundColor = `${canvasColor}`;
                }
                if (isDarkenToggled == 1) {
                    let currentBrightness = matchValue(pixels[i].style.filter)
                    let newBrightness = currentBrightness - 10;
                    pixels[i].style.filter = `brightness(${newBrightness}%)`;
                }
                if (isLightenToggled == 1) {
                    let currentBrightness = matchValue(pixels[i].style.filter)
                    let newBrightness = currentBrightness + 10;
                    pixels[i].style.filter = `brightness(${newBrightness}%)`;
                }
            };
        });
        pixels[i].addEventListener("mousedown", function () {
            if (isPenToggled == 1) {
                pixels[i].style.backgroundColor = `${selectedColor}`;
                selectColor();
                pixels[i].classList.remove("canvas");
            }
            if (isEraserToggled == 1) {
                pixels[i].style.backgroundColor = `${canvasColor}`;
            }
            if (isDarkenToggled == 1) {
                let currentBrightness = matchValue(pixels[i].style.filter)
                let newBrightness = currentBrightness - 10;
                pixels[i].style.filter = `brightness(${newBrightness}%)`;
            }
            if (isLightenToggled == 1) {
                let currentBrightness = matchValue(pixels[i].style.filter)
                let newBrightness = currentBrightness + 10;
                pixels[i].style.filter = `brightness(${newBrightness}%)`;
            }
        });
        pixels[i].addEventListener("mouseleave", function (event) {
            if (event.buttons) {

                if (isPenToggled == 1) {
                    pixels[i].style.backgroundColor = `${selectedColor}`;
                    selectColor();
                    pixels[i].classList.remove("canvas");
                }
                if (isEraserToggled == 1) {
                    pixels[i].style.backgroundColor = `${canvasColor}`;
                }
                if (isDarkenToggled == 1) {
                    let currentBrightness = matchValue(pixels[i].style.filter)
                    let newBrightness = currentBrightness - 10;
                    pixels[i].style.filter = `brightness(${newBrightness}%)`;
                }
                if (isLightenToggled == 1) {
                    let currentBrightness = matchValue(pixels[i].style.filter)
                    let newBrightness = currentBrightness + 10;
                    pixels[i].style.filter = `brightness(${newBrightness}%)`;
                }
            }
        });
    };
};



// Function to match Regex to find the brightness value of a pixel
function matchValue(string) {
    const numRegex = /[0-9]+/;
    let matches = string.match(numRegex);
    const value = parseInt(matches[0]);
    return value;
}



for (let i = 0; i < 16 ** 2; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.classList.add('canvas');
    pixel.style.filter = 'brightness(100%)';
    pixel.style.backgroundColor = 'rgb(243, 243, 243)';
    const pixelSide = pad.offsetWidth / 16;
    pixel.style.width = `${pixelSide}px`;
    pixel.style.height = `${pixelSide}px`;
    pad.appendChild(pixel);
};


slider.addEventListener("input", function () {
    clearPad()
    updatePad()
    updateGridSizeText()
});


function clearPad() {
    pad.innerHTML = '';
}





let isPenToggled = 1;
let isEraserToggled = 0;


const pixels = document.querySelectorAll('.pixel');

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseenter", function (event) {
        if (event.buttons) {
            if (isPenToggled == 1) {
                pixels[i].style.backgroundColor = `${selectedColor}`;
                pixels[i].classList.remove("canvas");
                selectColor();
            }
            if (isEraserToggled == 1) {
                pixels[i].style.backgroundColor = `${canvasColor}`;
            }
            if (isDarkenToggled == 1) {
                let currentBrightness = matchValue(pixels[i].style.filter)
                let newBrightness = currentBrightness - 10;
                pixels[i].style.filter = `brightness(${newBrightness}%)`;
            }
            if (isLightenToggled == 1) {
                let currentBrightness = matchValue(pixels[i].style.filter)
                let newBrightness = currentBrightness + 10;
                pixels[i].style.filter = `brightness(${newBrightness}%)`;
            }
        };
    });
    pixels[i].addEventListener("mouseleave", function (event) {
        if (event.buttons) {
            if (isPenToggled == 1) {
                pixels[i].style.backgroundColor = `${selectedColor}`;
                pixels[i].classList.remove("canvas");
                selectColor();
            }
            if (isEraserToggled == 1) {
                pixels[i].style.backgroundColor = `${canvasColor}`;
            }
            if (isDarkenToggled == 1) {
                let currentBrightness = matchValue(pixels[i].style.filter)
                let newBrightness = currentBrightness - 10;
                pixels[i].style.filter = `brightness(${newBrightness}%)`;
            }
            if (isLightenToggled == 1) {
                let currentBrightness = matchValue(pixels[i].style.filter)
                let newBrightness = currentBrightness + 10;
                pixels[i].style.filter = `brightness(${newBrightness}%)`;
            }
        };
    });
    pixels[i].addEventListener("mousedown", function () {
        if (isPenToggled == 1) {
            pixels[i].style.backgroundColor = `${selectedColor}`;
            pixels[i].classList.remove("canvas");
            selectColor();
        }
        if (isEraserToggled == 1) {
            pixels[i].style.backgroundColor = `${canvasColor}`;
        }
        if (isDarkenToggled == 1) {
            let currentBrightness = matchValue(pixels[i].style.filter)
            let newBrightness = currentBrightness - 10;
            pixels[i].style.filter = `brightness(${newBrightness}%)`;
        }
        if (isLightenToggled == 1) {
            let currentBrightness = matchValue(pixels[i].style.filter)
            let newBrightness = currentBrightness + 10;
            pixels[i].style.filter = `brightness(${newBrightness}%)`;
        }
    });
};

// Function to toggle pen
const eraser = document.getElementById('eraser');
const pen = document.getElementById('pen');

function togglePen() {
    if (isPenToggled) {
        pen.classList.toggle('toggled');
        isPenToggled = 0;

    }

    else {
        if (isEraserToggled) {
            eraser.classList.toggle('toggled');
            isEraserToggled = 0;

        }
        pen.classList.toggle('toggled');
        isPenToggled = 1;
    }
};


function toggleEraser() {
    if (isEraserToggled) {
        isEraserToggled = 0;
        eraser.classList.toggle('toggled');
    }
    else {
        if (isPenToggled) {
            pen.classList.toggle('toggled');
            isPenToggled = 0;
        }
        eraser.classList.toggle('toggled')
        isEraserToggled = 1;
    }
};

// Function to toggle darken and lighten

const darken = document.querySelector("#darken");
const lighten = document.querySelector("#lighten");

function toggleDarken() {
    if (isDarkenToggled == 0) {
        isPenToggled = 0;
        pen.classList.remove('toggled');
        isEraserToggled = 0;
        eraser.classList.remove('toggled');
        isLightenToggled = 0;
        darken.classList.add("toggled");
        isDarkenToggled = 1;
    }
    else {
        isDarkenToggled = 0;
        darken.classList.remove("toggled");
        isPenToggled = 1;
        pen.classList.add("toggled");
    }

}

function toggleLighten() {
    if (isLightenToggled == 0) {
        isPenToggled = 0;
        pen.classList.remove('toggled');
        isEraserToggled = 0;
        darken.classList.remove("toggled");
        isDarkenToggled = 0;
        eraser.classList.remove('toggled');
        lighten.classList.add('toggled');
        isLightenToggled = 1;
    }
    else {
        isLightenToggled = 0;
        lighten.classList.remove('toggled');
        isPenToggled = 1;
        pen.classList.add('toggled');
    }
}

let randomColor = document.querySelector('#random-color');
function toggleRandomColor() {
    if (isRandomColorToggled == 1) {
        randomColor.classList.remove('toggled');
        isRandomColorToggled = 0;
    }
    else {
        isRandomColorToggled = 1;
        randomColor.classList.add('toggled');
    }
}

function getRandomRGBValue() {
    const value = Math.floor(Math.random() * 255);
    return value;
}

function selectColor() {

    if (isRandomColorToggled == 1) {
        selectedColor = `rgb(${getRandomRGBValue()},${getRandomRGBValue()},${getRandomRGBValue()})`
    }
    else {
        colorInput.addEventListener('input', function () {
            selectedColor = colorInput.value;
        });
        selectedColor = colorInput.value;
    }
}
function clearCanvas() {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "unset";
        pixels[i].classList.add('canvas');

    }
};



// Adding event listeners

document.querySelector('#canvas-color').addEventListener('input', () => changeCanvasColor());
let canvas = document.getElementsByClassName('canvas');

// Changing the Pixels which are part of the canvas and changing their value
function changeCanvasColor() {
    let canvas = document.querySelectorAll('.canvas');
    canvasColor = document.querySelector("#canvas-color").value;
    for (let i = 0; i < canvas.length; i++) {
        canvas[i].style.backgroundColor = `${canvasColor}`;
    }
    console.log('treid to change bg color')
}



// NOte to self
// UPDATE TOGGLE FOR eraser and pen

// Refactor the Code and make functions for repeated code base
// Add relevant comments for each function
// Try removing canvas class from the darkened/lightened pixels


