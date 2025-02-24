const masterDiv = document.querySelector(".master-div");
masterDiv.style.display = "flex";

// masterDiv.style.flexShrink = "1";


const button = document.querySelector(".button-prompt");

button.addEventListener("click", () => {
    let customSize = +prompt("Enter number of squares: ");

    if (typeof (customSize) === "number" && customSize <= 100 && customSize > 0) {
        makeGrid(customSize);
    }
    else console.log("Try again!");
});

let gridMade = false;
let parentDivArray = [];

function makeGrid(numOfSquares) {
    if (parentDivArray.length > 0) {
        for (let k = 0; k < parentDivArray.length; k++) {
            masterDiv.removeChild(parentDivArray[k]);
        }
        parentDivArray.splice(0, parentDivArray.length - 1);
    }

    const gridSize = numOfSquares * numOfSquares;
    const divArray = [];
    let parentDivArrayCounter = 0;
    let mouseCurrentlyPressed = false;


    for (let i = 0; i <= gridSize; i++) {
        const div = document.createElement("div");
        div.style.width = "7.2px";
        div.style.height = "7.2px";
        // div.style.border = "1px solid red";

        div.addEventListener("mouseover", () => {
            if (div.id != "colored") {
                div.style.backgroundColor = "yellow";
            }
            if(mouseCurrentlyPressed){
                div.style.backgroundColor = "black";
                div.id = "colored";
            }
        })
        div.addEventListener("mouseout", () => {
            if (div.id != "colored") {
                div.style.backgroundColor = "white";
            }
        })
        div.addEventListener("mousedown", () => {
                div.style.backgroundColor = "black";
                div.id = "colored";
                mouseCurrentlyPressed = true;
        })
        div.addEventListener("mouseup", () =>{
            mouseCurrentlyPressed = false;
        })
        

        divArray[i] = div;

        if (i % numOfSquares == 0 && i > 0) {
            const parentDiv = document.createElement("div");
            parentDiv.style.display = "flex";
            parentDiv.style.alignItems = "center";
            parentDiv.style.justifyContent = "center";
            const masterDiv = document.querySelector(".master-div");
            for (let j = i - numOfSquares; j < i; j++) {
                parentDiv.appendChild(divArray[j]);
            }
            masterDiv.appendChild(parentDiv);
            parentDivArray[parentDivArrayCounter] = parentDiv;
            parentDivArrayCounter++;
        }
    }



    gridMade = true;
}