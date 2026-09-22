//Model
const app = document.getElementById('app');
let currentPage = 'frontpage';

const numbersArray = [];
const theGreatArray = [];
const thePrimeArray = [];
const noGoDigits = [1,2]

let range = 1;
let breakLoop = false;

let tries = 0;
let digits = 0;

let pageIndex = 0;
let evenOrOdd = '';
let isPrime = '';
let isOdd = 0;
let isEven = 0;

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
            <button onclick="resetArrays()">RESET</button>
            <input type="number" id="rangenumber" oninput="range = this.value" placeholder="input range">
            <button onclick="changePage('decrease')">Previous page</button>
            <button onclick="changePage('increase')">Next page</button>
            <h3>Genererte arrays : ${tries.toLocaleString('no-NO')}</h3>
            <h3>Genererte siffer : ${digits.toLocaleString('no-NO')}</h3>
            <h3>Primes : ${thePrimeArray}</h3>
            <h3>Odds : ${isOdd}</h3>
            <h3>Evens : ${isEven}</h3>
        </div>
    `;
}

function maincontent() {
    return /* HTML */ `
        <div id="maybeprime">${evenOrOdd, isPrime}</div>
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

function resetArrays() {
    numbersArray.length = 0;
    theGreatArray.length = 0;
    tries = digits = 0;
    updateView();
}

function checkArray() {
    let maybeSorted = [...numbersArray]
    const stringArray = JSON.stringify(maybeSorted);
    const ascendArray = JSON.stringify(maybeSorted.sort((a, b) => a-b));
    const descendArray = JSON.stringify(maybeSorted.sort((a, b) => b-a));
    stringArray == ascendArray ? 
        (breakLoop = !breakLoop, console.log('SORTED acsending', ascendArray)) :
    stringArray == descendArray ? 
        (breakLoop = !breakLoop, console.log('SORTED descending', descendArray)) :
    null;
}

function arrayFiller(amount) {
    breakLoop = false;
    while (true) {
        numbersArray.length = 0;
        tries ++;
        while (true) {
            digits ++
            let digit = Math.floor(Math.random() * 10) + 1;
            if(!noGoDigits.includes(digit) && !numbersArray.includes(digit)) {
                numbersArray.push(digit);
                if (numbersArray.length >= amount) break;
            }
        }
        theGreatArray.push(numbersArray.flat())
        //checkArray();
        isOddEvenPrime();
        checkPrime();
        tries > 5000 ? breakLoop = true : breakLoop = false
        if (breakLoop) {
            break;
        } 
    }
    updateView();
}

function isOddEvenPrime() {
    let sum = 1;
    for (let i of numbersArray) {
        sum *= i;
    }
    evenOrOdd = sum % 2 == 0 ? isEven++ : isOdd++
}

function checkPrime(params) {
    isPrime = true;
    let sum = 1;
    for (let i of numbersArray) {
        sum *= i;
    }
    for(let i = 1; i < sum; i++) {
        if (sum % i === 0) {
            //console.log('not prime');
            isPrime = false;
            break
        }
    }
    console.log(sum)
    if (isPrime) {
        thePrimeArray.push(sum)
        breakLoop = !breakLoop
        console.log(numbersArray)
    };
}