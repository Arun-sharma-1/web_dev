const boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('.game-info')
const newGamebtn = document.querySelector('.btn');

let currentPlayer;
let gameGrid;
const winnningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

initGame()
function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""]
    boxes.forEach((box, index) => {
        box.textContent = "";
        box.style.pointerEvents = "all";
        box.classList.remove("win")
    })
    newGamebtn.classList.remove('active');
    gameInfo.textContent = `Current Player - ${currentPlayer}`


}

function swapTurn() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }

    gameInfo.textContent = `Current-Player ${currentPlayer}`;
}
function checkGameOver() {
    let winner = "";
    winnningPositions.forEach((position) => {
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") &&
            (gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]])
        ) {
            // koi ek row match ho gyi h 
            winner = gameGrid[position[0]] === "X" ? "X":"O";

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");


            //winner mil gya h too diable pointer events
            boxes.forEach((box)=>{
                box.style.pointerEvents = "none";
            })
        }
    })

    if(winner !== "")
    {
        console.log(winner)
        gameInfo.textContent = `Winner is - ${winner}`;
        newGamebtn?.classList.add("active");
        return;
    }

    // tie ho gya ho too
    let fillcount = 0;
    gameGrid.forEach((box) => {
        if (box !== "") {
            fillcount++;
        }
    });

    if(fillcount === 9)
    {
        gameInfo.textContent = `Game Tied...`;
        newGamebtn?.classList.add("active");
    }
}
function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].innerText = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        gameGrid[index] = currentPlayer;

        //swap users
        swapTurn();
        //check if someone win
        checkGameOver();

    }
    
}

// Add Event Listener to all Boxes to Get Player Input
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
});

newGamebtn?.addEventListener('click', initGame)