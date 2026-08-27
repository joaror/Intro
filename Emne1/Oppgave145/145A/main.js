// Model
const app = document.getElementById('app');
const boardSquares = document.getElementsByClassName('square');

let currentPage = 'frontpage';
let gamePiece = `<img src="https://getacademy.no/hubfs/GET_RGB_logo-01-2.png" />`;
let targetSquare = 0;
let isLeft = 'disabled', isRight = '', isUp = 'disabled', isDown = '';

//View
updateView();
function updateView() {
    let page = ''
    doBtns();

    if (currentPage == 'frontpage') page = frontPage();
        app.innerHTML = /*HTML*/ `
            ${header()}
            <main>${page}</main>
    `;
    getSquare(targetSquare);
}

function header() {
    return /*HTML*/ `
        <header>
            DRY-prinsippet - 
            Don't Repeat Yourself
        </header>
        <h3>
            JavaScript
        </h3>
        <li>Endre HTML av en tag ut fra id</li>
        <li>Lage egne kommandoer, dvs. funksjoner</li>
        <li>onclick</li>
    `;
}

function frontPage() {
    return /*HTML*/ ` 
        ${drawBoard()}
        ${drawBtns()}
    `;   
}

function drawBoard() {
    let square = `<div class="square"></div>`;
    return /* HTML */ `
        <div class="board">
            ${square.repeat(4)}
        </div>
    `;
}

function drawBtns() {
    return /* HTML */ `
        <div class="buttons">
            <button id='up' ${isUp}>▲</button>
            <div>
                <button id='left' ${isLeft}>◀</button>
                <button id='right' ${isRight}>▶</button>
            </div>
            <button id='down' ${isDown}>▼</button>
        </div>
    `;
}

//Controller
function getSquare(index) {
    boardSquares[index].innerHTML = /* HTML */ `
        ${gamePiece}
    `;
}

function doBtns() {
    if (targetSquare <= 1) {
        isUp = 'disabled';
        isDown = '';
        if (targetSquare == 1) {
            isRight = 'disabled';
            isLeft = '';
        } else {
            isLeft = 'disabled';
            isRight = '';
        }
    } else if (targetSquare >= 2) {
        isDown = 'disabled';
        isUp = '';
        if (targetSquare == 2) {
            isLeft = 'disabled';
            isRight = '';
        } else {
            isRight = 'disabled';
            isLeft = '';
        }
    }
};

addEventListener('click', (event) => {
    let isBtn = event.target.id;
    if (isBtn == 'up') {
        targetSquare -= 2;
        updateView();
    } else if (isBtn == 'down') {
        targetSquare += 2;
        updateView();
    } else if (isBtn == 'left') {
        targetSquare -= 1;
        updateView();
    } else if (isBtn == 'right') {
        targetSquare += 1;
        updateView();
    }
});
