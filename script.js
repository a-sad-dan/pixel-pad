// Selecting the input and output elements
const sliderInput = document.querySelector('#count');
const sliderOutput = document.querySelector("#grid_size");
// Setting the Default value of the slider
sliderInput.value = 16;
// Output the default value
sliderOutput.textContent = sliderInput.value;
// output Value of on every change
sliderInput.addEventListener("input", () => {
    sliderOutput.textContent = sliderInput.value;
});


// Making divs for the pad

const pad = document.querySelector("#pad");


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        newDiv = document.createElement("div");
        pad.appendChild(newDiv);
    }
}

console.log("Hellow world");