//Model
const app = document.getElementById('app');
let currentPage = 'frontpage';

const number7 = Array();
const gameGridArray = ['1', '2', '3', '4', '5', '6', '7', '8', ' '];


//View
updateView();
function updateView() {
    let page = '';
    if (currentPage == 'frontpage') page = frontPage();
        app.innerHTML = /* HTML */ `
            <main>${page}</main>
        `;
}

function frontPage() {
    return /* HTML */ `
        <div id="flexcontainer">
            <div id="header">
                ${header()}
            </div>
            <div id="maincontainer">
                <div id="sidebar">
                    ${sidebar()}
                </div>
                <div id="maincontent">
                    ${maincontent()}
                    
                </div>
            </div>
            <div id="footer">
                ${footer()}
            </div>
        </div>
    `;
}

function header() {
    return /* HTML */ `
        <h1>Header</h1>
    `;
}

function sidebar() {
    return /* HTML */ `
        <h1>Sidebar</h1>
    `;
}

function maincontent() {
    return /* HTML */ `
        <div id='gamecontainer'>
            <div id='numbersgame' >${gameGrid()}</div>
        </div>
    `;
}

function footer() {
    return /* HTML */ `
        <h1>Footer</h1>
    `;
}

function gameGrid() {
    let isSquares = '';
    for(let i of gameGridArray) {
        isSquares += `
            <div id='${i}'>${i}</div>
        `;
    }
    return isSquares;
}
//Controller

addEventListener('click', (event) => {
    if (gameGridArray.includes(event.target.id)) {
        someFunction(gameGridArray.indexOf(event.target.id));
        updateView();
    }
})

function someFunction(clicked) {
    let isBlank = gameGridArray.indexOf(' ');
    if (calculateMoves(isBlank, clicked)) {
        gameGridArray[isBlank] = gameGridArray.at(clicked);
        gameGridArray[clicked] = ' ';
    }
}

function calculateMoves(blank, clicked) {
    let move;
    blank -3 == clicked ? move = true :
    blank +3 == clicked ? move = true :
    blank -1 == clicked ? move = true :
    blank +1 == clicked ? move = true : move = false;
    if((blank == 6 && clicked == 5) || 
        (blank == 5 && clicked == 6) ||
        (blank == 2 && clicked == 3) || 
        (blank == 3 && clicked == 2)) move = false;
    return move
}

function makeNumbers() {
    for(let i = 100; i < 1000; i +=7){
        number7.push(i)
    }
    console.log(number7.flat())
}

function numSum(numbersarray) {
    let sum = 0;
    for(number of numbersarray) {
        sum += number
    }
    console.log(sum);
}
