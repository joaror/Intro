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
        <div>
            <button onclick="arrayFiller(range)">FILL ARRAY</button>
            <button onclick="reset()">RESET</button>
            <input type="number" id="rangenumber" oninput="range = this.value" placeholder="input range">
            <button onclick="changePage('decrease')">Previous page</button>
            <button onclick="changePage('increase')">Next page</button>
        </div>
        <div>
            <h3>Genererte arrays : ${tries.toLocaleString('no-NO')}</h3>
            <h3>Genererte siffer : ${digits.toLocaleString('no-NO')}</h3>
            <h3>Sortert array: ${JSON.stringify(numbersArray)}</h3>

        </div>
    `;
}

function maincontent() {
    return /* HTML */ `
        <div>
            <h1>The great array pages</h1>
        </div>    
        <div>
            ${arrayPrinter()}
        </div>
    `;
}

function footer() {
    return /* HTML */ `
        <h1>Footer</h1>
    `;
}

function arrayPrinter() {
    let isGreatArray = `<div></div>`;
    for(let i of theGreatArrayPages(theGreatArray, pageIndex, 300)) {
        isGreatArray += `<div>${i}</div>`
    };
    return /* HTML */ `
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
