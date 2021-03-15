const gridContainer = document.getElementById("grid-container");

window.addEventListener("load", setDefaultGrid)

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
        // gridSquare.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridSquare);
    }
}

function changeColor() {
    
}