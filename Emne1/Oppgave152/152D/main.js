//Model
const app = document.getElementById('app');
let currentPage = 'frontpage';

let text = ''
let alphabet = 'abcdefghijklmnopqrstuvwxyzæøå'

const textArray = [] 
const words = []
const wordCounts = []
const allowedChars = []


for(let i of alphabet) {
    allowedChars.push(i);
    allowedChars.push(i.toUpperCase());
}

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
        <h3>Sidebar</h3>
    `;
}

function maincontent() {
    return /* HTML */ `
        ${textInput()}
        ${printArrays()}
    `;
}

function footer() {
    return /* HTML */ `
        <h1>Footer</h1>
    `;
}

function textInput(params) {
    return /* HTML */ `
        <div id='elementscontainer'>
            <label for='texinput'>Lim inn teksten her:
            </label>
            <textarea id='textinput' name='textinput' 
                oninput='text = this.value' rows='5' cols='50'>
            </textarea>
            <button onclick='textCleaner()'>Process text</button>
        </div>
    `;
}

function printArrays() {
    let wordTable = '';
    for (let i = 0; i < words.length; i++ ) {
        wordTable +=`
            <tr>
                <td style='background-color: pink'>${words.at(i)}</td>
                <td style='background-color: lightblue'>${wordCounts.at(i)}</td>
            </tr>
        `;
    }
    return /* HTML */ `
        <div id='tablecontainer'>
            <table>
                <tr>
                    <th>Words</th>
                    <th>WordCounts</th>
                </tr>
                ${wordTable}
            </table>
        </div>
    `;
}

//Controller
function textCleaner() {
    let tempArray =  Array() 
    tempArray.push(text.split(/ |\./))
    for (let i of tempArray.flat()) {
        let word ='';
        for (let char of i) {
            if (allowedChars.includes(char)) {
                word += char;
            }
        }
        if (word != '') textArray.push(word);
    }
    doAsInstructed()
    updateView()
}

function doAsInstructed() {
    for (let word in textArray.flat()) {
        let eazyWord = textArray.at(word)
        if (!words.includes(eazyWord)) {
            words.push(eazyWord);
            wordCounts.push(1)
        } else {
            wordCounts[words.indexOf(eazyWord)]++
        }
    }
    console.log(words, wordCounts)
}
