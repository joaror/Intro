//Model
const app = document.getElementById('app');

let currentPage = 'frontpage';
let newText = '';

//View
updateView();
drawDoubleUp();
function updateView() {
    if (currentPage == 'frontpage') page = frontPage();
    app.innerHTML = /* HTML */ `
        <main>${page}</main>
    `;
}

function drawDoubleUp() {
    document.getElementById('doubleup').innerHTML = /* HTML */ `${newText}`;
}
    
function frontPage() {
    return /* HTML */ `
        <input type="text" id="tekst" placeholder="tekst">
        <input type="number" id="length" placeholder="maks lengde"><br>
        <button onclick="addText()">Gjenta</button>
        <button onclick="addText(true)">Reset</button>
        <div id="doubleup"></div>
    `;
}

//Controller    
function addText(reset) {
    const text = document.getElementById('tekst');
    const maxLength = document.getElementById('length');
    
    if (!reset) {
        if ((newText + text.value).length <= maxLength.value) {
            newText += text.value;
        }
    } else {
        newText = ''
    }
    drawDoubleUp();
}