//Model
const app = document.getElementById('app');
let currentPage = 'frontpage';

const textArray = []

let text = '';

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
        <div id="inputs">
            <input type="text" 
                value="${text}" 
                oninput="text = this.value" 
                placeholder="input">
            <button onclick="prettyArray(text)">Process input</button>
        </div>
    `;
}

function maincontent() {
    return /* HTML */ `
        <p>${text}<br>
        ${textArray}</p>
    `;
}

function footer() {
    return /* HTML */ `
        <h1>Footer</h1>
    `;
}

//Controller
function prettyArray(text) {
    for (let [key, value] of Object.entries(charSorted(text))) {
        textArray.push(key+':'+value);
    }   
    console.log(textArray);
    updateView();
    textArray.length = 0;
}

function charSorted(text) {
    const sortedChars = Object.fromEntries(
        Object.entries(charCount(text)).sort(([,a],[,b]) => b-a)
    );
    return sortedChars;
}

function charCount(text) {
    const countedChars = {}; 
    for (let char of [...text].sort()){
        countedChars[char] = (countedChars[char] || 0) + 1;
        };
    return countedChars;
};
