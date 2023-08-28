const canvas = document.querySelector('.canvas');
let ifRainbow = true;
let eraser = false;
let grid = 16;

const colorButton = document.querySelector('.color');
const rainbowButton = document.querySelector('.rainbow');
const eraserButton = document.querySelector('.eraser');
const clearButton = document.querySelector('.clear');
const btns = document.querySelectorAll('.btn');

colorButton.addEventListener('click', () => {ifRainbow = false; eraser = false; cssButtonToggle(colorButton)})
rainbowButton.addEventListener('click', () => {ifRainbow = true; eraser = false; cssButtonToggle(rainbowButton)})
eraserButton.addEventListener('click', () => {eraser = true; cssButtonToggle(eraserButton)})
clearButton.addEventListener('click',clear)

function cssButtonToggle(mainButton) {
    console.log(mainButton);
    btns.forEach(btn => btn.classList.remove('activated'));
    mainButton.classList.add('activated');
}

function clear() {
    let columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.querySelectorAll('.canvasElement').forEach(canvasElement => {
            canvasElement.style.backgroundColor = 'rgb(255,255,255)'})});
};

function makeCanvas(gridValue) {

    for (let i = 0; i < gridValue; i++) {

        let column = document.createElement('div');
        column.classList.add('column');
        canvas.appendChild(column);

        for (let j = 0; j < gridValue; j++) {
            let pixel2 = document.createElement('div');
            pixel2.classList.add('canvasElement');
            column.appendChild(pixel2);

            pixel2.addEventListener('mouseover', draw)
        }
    };
};

function draw() {
     if (ifRainbow == true && eraser == false) {
        rainbowDraw(this);
     }
     else if (eraser == true) {
        erase(this);
     }
     else {

     };
};

function rainbowDraw(element) {
    element.style.backgroundColor = `rgb(${colorGenerator()}, ${colorGenerator()},${colorGenerator()})`;
};

function colorGenerator() {
    return Math.floor(Math.random() * (255 - 1) + 1);
};

function erase(element) {
    element.style.backgroundColor = `rgb(255,255,255)`;
};

function colorDraw() {

};

makeCanvas(grid);