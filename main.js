const canvas = document.querySelector('.canvas');

function makeCanvas(grid) {

    for (let i = 0; i < grid; i++) {

        let column = document.createElement('div');
        column.classList.add('column');
        canvas.appendChild(column);

        for (let j = 0; j < grid; j++) {
            let pixel2 = document.createElement('div');
            pixel2.classList.add('canvasElement');
            column.appendChild(pixel2);

            
        }
    };
};

makeCanvas(16);