const masterDiv = document.querySelector(".master-div");
masterDiv.style.display = "flex";




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
let colorPickerDivArray = [];
let buttonValidInput = 0;

function makeGrid(numOfSquares) {
    buttonValidInput++;
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
    let currentColor = "red";


    for (let i = 0; i <= gridSize; i++) {
        const div = document.createElement("div");
        div.style.width = "7.2px";
        div.style.height = "7.2px";
        

        div.addEventListener("mouseover", () => {
            if (div.id != "colored") {
                div.style.backgroundColor = currentColor;
            }
            if(mouseCurrentlyPressed){
                div.style.backgroundColor = currentColor;
                div.id = "colored";
            }
        })
        div.addEventListener("mouseout", () => {
            if (div.id != "colored") {
                div.style.backgroundColor = "white";
            }
        })
        div.addEventListener("mousedown", () => {
                div.style.backgroundColor = currentColor;
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

    if(buttonValidInput>0){
        const body = document.querySelector("body");
        for(let h = 0;h<colorPickerDivArray.length;h++){
            body.removeChild(colorPickerDivArray[h]);
        }
        const colorPickerDiv = document.createElement("div");
        colorPickerDiv.id = "color-picker";
        colorPickerDiv.textContent = "Pick a color: "
        
        const colorHolderDiv = document.createElement("div");

        const redDiv = document.createElement("div");
        redDiv.classList.add("colors");
        redDiv.classList.add("red");
        redDiv.addEventListener("click", () =>{
            currentColor = "red";
        })

        const blueDiv = document.createElement("div");
        blueDiv.classList.add("blue");
        blueDiv.classList.add("colors");
        blueDiv.addEventListener("click", () => {
            currentColor = "blue";
        })

        const greenDiv = document.createElement("div");
        greenDiv.classList.add("colors");
        greenDiv.classList.add("green");
        greenDiv.addEventListener("click", () =>{
            currentColor = "green";
        })

        colorHolderDiv.appendChild(redDiv);
        colorHolderDiv.appendChild(blueDiv);
        colorHolderDiv.appendChild(greenDiv);

        colorPickerDiv.appendChild(colorHolderDiv);


    
        
        body.appendChild(colorPickerDiv);
        colorPickerDivArray[0] = colorPickerDiv;
        
    }
}


