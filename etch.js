const maxSize = 64;

//select elements
const gridContainer = document.getElementById("grid-container");
const changeSizeButton = document.getElementById("size-button");

//add Event listeners
window.addEventListener("load", setDefaultGrid);
changeSizeButton.addEventListener("click", changeSize);

function setDefaultGrid() {
    createGrid(16);
}

function createGrid(size) {

    console.log(gridContainer);

    //set grid size
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    //fill grid
    for (let i = 0; i < size*size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");

        //add eventListener
        gridSquare.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridSquare);
    }
}

function changeColor(e) {
    
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function changeSize() {

    //get input from user
    const input = prompt(`What should the new size be?\n`
                        + `Enter a number between 1 and ${maxSize}`);

    //if user canceled input
    if (input === null) {
        return;
    }

    //parse new size
    const newSize = parseInt(input);
    
    //if input is valid
    if (newSize !== NaN && (newSize >= 1 && newSize <= maxSize)) {
        
        //clear grid
        clearGrid();

        //create grid with new size
        createGrid(newSize);

    } else {
        alert(`Input invalid!\nPlease enter an number between 1 and ${maxSize}`);

        //call changeSize recursively to get new input
        changeSize();
    }
}

function clearGrid() {
    
    //this removes all children from the grid container
    gridContainer.textContent = '';
}