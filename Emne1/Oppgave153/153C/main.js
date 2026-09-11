//Model
const app = document.getElementById('app');
let currentPage = 'frontpage';

let isRawAlphabet = 'abcdefghijklmnopqrstuvwxyzæøå'
let isAlphabet = [] ;

for (let i of isRawAlphabet) {
    isAlphabet.push(i.toUpperCase())
}

let isAlphaLength = [...isRawAlphabet].length

let isTextInput = '';

let isCipherAlphabet =[]
let isCipheredWords = [];

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
            <textarea id='texttocipher' 
                name='textinput' 
                oninput='isTextInput = this.value' 
                rows='5' cols='20'>
            </textarea>
            <div id='buttons'>
                <button onclick='cipherText()'>Cipher text</button>
                <button onclick=''>deCipher text</button>
                <button onclick='newCipher()'>New Cipher</button>
            </div>
        </div>
    `;
}

function maincontent() {
    return /* HTML */ `
        <div>
            <h1>${isCipheredWords.join('|')}</h1>
        </div>
    `;
}

function footer() {
    return /* HTML */ `
        <h1>Footer</h1>
    `;
}

//Controller

function newCipher() {
    let n = 0;
    let isCipher = []
    while(true){
        let digit = Math.floor(Math.random() * isAlphaLength) +1
        if(!isCipher.includes(digit)) {
            isCipher.push(digit);
            if(isCipher.length >= isAlphaLength) break;
        }
    }
    for(let i of isCipher) {
        isCipherAlphabet[n] = isAlphabet.at(i-1)
        n++
    }
    console.table(isCipherAlphabet)
}

function cleanText() {
    let tempWords = []
    let wordsToCipher = []
    tempWords.push(...isTextInput.toUpperCase().split(/ |\./))
    for(let i of tempWords) {
        if (i != '') {
            wordsToCipher.push(i)
        }
    }
    return wordsToCipher
}

function cipherText() {
    for (let i of cleanText()) {
        let cipherWord = ''
        for (char of i) {
            cipherWord += isCipherAlphabet.at(isAlphabet.indexOf(char))
        }
        isCipheredWords.push(cipherWord)
    }
    updateView();
}

newCipher();
