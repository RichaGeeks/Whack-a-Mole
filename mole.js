let currentMole;
let currentPlant;
let score = 0;
let gameOver = false ;


window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in our html
    for(let i= 0; i<9 ;i++ ){
        //create a div tag 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click" , selectTile);
        document.getElementById("board").appendChild(tile);

    }

    setInterval(setMole ,1000); //1000 milliseconds == 1 seconds
    setInterval(setPlant, 2000);
}

function getRandomtile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (gameOver){
        return;
    }

    if (currentMole) {
        currentMole.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src ="monty-mole.png";

    let num = getRandomtile();
    if(currentPlant && currentPlant.id == num) {
        return;
    }
    currentMole = document.getElementById(num);
    currentMole.appendChild(mole);
}

function setPlant() {

    if (gameOver){
        return; 
    }
    if (currentPlant) {
        currentPlant.innerHTML ="";
    }

    let plant = document.createElement("img");
    plant.src ="piranha-plant.png";

    let num = getRandomtile();
    if(currentMole && currentMole.id == num) {
        return;
    }
    currentPlant = document.getElementById(num);
    currentPlant.appendChild(plant);
}

function selectTile() {

    if (gameOver) {
        return;
    }
    if(this == currentMole){
        score += 10
        document.getElementById("score").innerText = score.toString();
    } else if (this == currentPlant) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true ;
    }
}

