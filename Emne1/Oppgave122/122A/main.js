document.addEventListener("keydown", handleKeyDown);

let selectedSquareIndex = 15;
const boardSize = 64;

function showBoard() {

    const pattern = '<div></div>';
    const isBoard = document.getElementById('board')

    isBoard.innerHTML = '';

    i = boardSize;
    while (i >= 0) {
        i == selectedSquareIndex ? isBoard.firstElementChild.setAttribute('class', 'selected') :
            isBoard.insertAdjacentHTML("afterbegin", pattern);
        i--;
    }
}

function isMoving(increment) {
    increment > 0 ? selectedSquareIndex += increment : selectedSquareIndex += increment;
    showBoard();
    checkPosition();
}

function handleKeyDown(e) {
    if (e.keyCode == "38" && selectedSquareIndex > 7) {
        isMoving(-8);
    }
    if (e.keyCode == "40" && selectedSquareIndex < 56) {
        isMoving(8);
    }
    if (e.keyCode == "37" && selectedSquareIndex > 0) {
        isMoving(-1);
    }
    if (e.keyCode == "39" && selectedSquareIndex < 63) {
        isMoving(1);
    }
}

function checkPosition() {
    document.getElementById("up").disabled =
        selectedSquareIndex <= 7 ? true : false;
    document.getElementById("left").disabled =
        selectedSquareIndex == 0 ? true : false;
    document.getElementById("down").disabled =
        selectedSquareIndex >= 56 ? true : false;
    document.getElementById("right").disabled =
        selectedSquareIndex == 63 ? true : false;
}
