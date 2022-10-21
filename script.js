const container = document.querySelector('.container');
const newSketch = document.querySelector('.newSketch');

newSketch.addEventListener('click', makeNewGrid);

function createGrid(num) {
    let product = num * num;

    for (let i = 1; i <= product; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('class', 'squares');

        if (i % num == 0) {
            let pbreak = document.createElement('br');
            container.appendChild(pbreak);
        }
    }
    let grid = document.querySelectorAll('.squares');
    console.log(grid);
    grid.forEach((square) => square.addEventListener('mouseover', changeColor));
}

function changeColor(event) {
   event.target.style.backgroundColor = 'black';
}

function makeNewGrid() {
    let value = prompt(`Insert a number for squares per side, 1 - 100`);

    if (value > 100 || value <= 0) alert(`That number is not between 1 and 100!`);

    else if (value <= 100) {
        alert(`working`);
    }

    else alert(`Please enter a number!`);
}


createGrid(100)

//create button that triggers function that prompts user for a number less than 100, then use input at num variable. 
//grid must stay same size no matter what number is inputted

