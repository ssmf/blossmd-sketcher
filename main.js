const canvas = document.querySelector('.canvas');
const ifRainbow = false;

const colorButton = document.querySelector('.rainbow');

function makeCanvas(grid) {

    for (let i = 0; i < grid; i++) {

        let column = document.createElement('div');
        column.classList.add('column');
        canvas.appendChild(column);

        for (let j = 0; j < grid; j++) {
            let pixel2 = document.createElement('div');
            pixel2.classList.add('canvasElement');
            column.appendChild(pixel2);

            pixel2.addEventListener('mouseover', draw)
        }
    };
};

function draw() {
    rainbowDraw(this);
};

function rainbowDraw(element) {
    element.style.backgroundColor = `rgb(${colorGenerator()}, ${colorGenerator()},${colorGenerator()})`;
};

function colorGenerator() {
    return Math.floor(Math.random() * (255 - 1) + 1);
};

makeCanvas(16);