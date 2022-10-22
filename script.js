const container = document.querySelector('.container');
const newSketch = document.querySelector('.newSketch');

newSketch.addEventListener('click', makeNewGrid);

function createGrid(num) {
    for (let i = 1; i <= num; i++) {
        let xsquares = document.createElement('div');
        container.appendChild(xsquares);
        xsquares.setAttribute('class', 'xsquares');
        for (let i = 1; i <= num; i++) {
            let ysquares = document.createElement('div');
            xsquares.appendChild(ysquares);
            ysquares.setAttribute('class', 'xsquares');
        }
    }
    let grid = document.querySelectorAll('.xsquares');
    grid.forEach((square) => square.addEventListener('mouseover', changeColor));
}

function changeColor(event) {
   event.target.style.backgroundColor = 'black';
}

function makeNewGrid() {
    let value = prompt(`Insert a number for squares per side, 1 - 100`);

    if (value > 100 || value <= 0) alert(`That number is not between 1 and 100!`);

    else if (value <= 100) {
        container.replaceChildren();
        createGrid(value);
    }

    else alert(`Please enter a number!`);
}


createGrid(16)

//create button that triggers function that prompts user for a number less than 100, then use input at num variable. 