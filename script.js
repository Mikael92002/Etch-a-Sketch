const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center"
body.style.flexShrink = "1";

const button = document.querySelector(".button-prompt");

button.addEventListener("click", () =>{
let customSize = +prompt("Enter number of squares: ");

if(typeof(customSize) === "number" && customSize<=100){
makeGrid(customSize);
}
else console.log("Try again!");
});

let gridMade = false;
let parentDivArray = [];

function makeGrid(numOfSquares){
    if(gridMade){
        for(let k = 0;k<parentDivArray.length;k++){
            body.removeChild(parentDivArray[k]);
        }
    }

    const gridSize = numOfSquares*numOfSquares;
    const divArray = [];
    let parentDivArrayCounter = 0;


for(let i = 0;i<=gridSize;i++){
    const div = document.createElement("div");
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.border = "1px solid red";
    div.style.margin = "2px";
    divArray[i] = div;

    if(i % numOfSquares == 0 && i>0){
        const parentDiv = document.createElement("div");
        parentDiv.style.display = "flex";
        parentDiv.style.alignItems = "center";
        parentDiv.style.justifyContent = "center";
        const body = document.querySelector("body");
        for(let j = i-numOfSquares;j<i;j++){
            parentDiv.appendChild(divArray[j]);
        }
        body.appendChild(parentDiv);
        parentDivArray[parentDivArrayCounter] = parentDiv;
        parentDivArrayCounter++;
    }
}

gridMade = true;
}