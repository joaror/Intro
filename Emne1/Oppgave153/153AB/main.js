//Model
const app = document.getElementById('app');
let currentPage = 'frontpage';

const numbersArray = Array();
const theGreatArray = []

let range = 1;
let breakLoop = false;

let tries = 0;
let digits = 0;

let pageIndex = 0;

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
        <h1>Main content</h1>
        
    <div>
        <button onclick="arrayFiller(range)">FILL ARRAY</button>
        <button onclick="numbersArray.length = 0">RESET ARRAY</button>
        <input type="number" id="rangenumber" oninput="range = this.value" placeholder="input range">
        <button onclick="changePage('decrease')">Previous page</button>
        <button onclick="changePage('increase')">Next page</button>
    </div>
    <div>${arrayPrinter()}</div>
    `;
}

function footer() {
    return /* HTML */ `
        <h1>Footer</h1>
    `;
}

function arrayPrinter() {
    let isGreatArray = `<div></div>`;
    for(let i of theGreatArrayPages(theGreatArray, pageIndex, 200)) {
        isGreatArray += `<div>${i}</div>`
    };
    return /* HTML */ `
        <h1>Genererte arrays : ${tries.toLocaleString('no-NO')}</h1>
        <h1>Genererte siffer : ${digits.toLocaleString('no-NO')}</h1>
        <div id='columnarray'>${isGreatArray}</div>
    `;
}

function theGreatArrayPages(array, pageIndex, pageSize) {
    let page = [];
    let skipCount = pageIndex * pageSize;
    let takeCount = pageSize;
    for (let elements of array) {
        skipCount--;
        if (skipCount >= 0) continue;
        if (takeCount <= 0) break;
        takeCount--;
        page.push(elements);
    }
    return page;
}

//Controller

function changePage(change) {
    if (change == 'increase') {
        pageIndex++;
        updateView();
    } else if (change == 'decrease') {
        if (pageIndex <= 0) {
            console.log('Nothing to see here', pageIndex);
        } else {
            pageIndex--;
            updateView();
        }
    }
}

function arrayFiller(amount) {
    breakLoop = false;
    while (true) {
        numbersArray.length = 0;
        tries ++;
        if (numbersArray.length < amount) {
            while (true) {
                let digit = Math.floor(Math.random() * amount) + 1;
                digits ++
                if(!numbersArray.includes(digit)) {
                    numbersArray.push(digit);
                    if (numbersArray.length >= amount) break;
                }
            }
        } 
        theGreatArray.push(numbersArray.flat())
        checkArray();
        if (breakLoop) {
            break;
        } 
    }
    updateView();
}

function checkArray() {
    const stringArray = JSON.stringify(numbersArray);
    const ascendArray = JSON.stringify(numbersArray.sort((a, b) => a-b));
    const descendArray = JSON.stringify(numbersArray.sort((a, b) => b-a));
    stringArray == ascendArray ? 
        (breakLoop = !breakLoop, console.log('SORTED acsending', ascendArray)) :
    stringArray == descendArray ? 
        (breakLoop = !breakLoop, console.log('SORTED descending', descendArray)) :
    null;
}
