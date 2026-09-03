//Model
const app = document.getElementById('app');
let currentPage = 'frontpage';

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
        <pre id="output"></pre>
    `;
}

function footer() {
    return /* HTML */ `
        <h1>Footer</h1>
    `;
}

//Controller
function writeLine(a, b, c) {
    for(let i = 0; i < a; i++) {
        writeSpace();
    }
    for(let i = 0; i < b; i++) {
        writeHash();
    }
    for(let i = 0; i < c; i++) {
        writeLineBreak();
    }
}

writeLine(0,8,1);
writeLine(1,6,1);
writeLine(2,4,1);
writeLine(3,2,1);

    function writeHash() {
        document.getElementById('output').innerText += '#';
    }

    function writeSpace() {
        document.getElementById('output').innerText += ' ';
    }

    function writeLineBreak() {
        document.getElementById('output').innerText += '\n';
    }