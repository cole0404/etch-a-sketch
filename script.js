const container = document.querySelector('.container');
const newSketch = document.querySelector('.newSketch');



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

}

createGrid(16)

//create button that triggers function that prompts user for a number less than 100, then use input at num variable. 
//grid must stay same size no matter what number is inputted

