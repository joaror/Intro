//Model
const app = document.getElementById('app');
let currentPage = 'frontpage';

let text = newText = newTextUpper = '';

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
            <button onclick="charCount(text)">Process input</button>
        </div>
    `;
}

function maincontent() {
    return /* HTML */ `
        <p>${newText}<br>
           ${newTextUpper}</p>
    `;
}

function footer() {
    return /* HTML */ `
        <h1>Footer</h1>
    `;
}

//Controller

function charCount(text) {
    for(let i = 0; i <= text.length; i++) {
        text.charAt(i) == 'a' ? 
            newText += text.charAt(i) : 
        text.charAt(i) == 'A' ? 
            newTextUpper += text.charAt(i) :  null;
        };
    newText = newText.length +': '+ newText.charAt(0);
    newTextUpper = newTextUpper.length +': '+ newTextUpper.charAt(0);
    updateView();
    newText = newTextUpper = '';
}
