//Model
const app = document.getElementById('app');
let currentPage = 'frontpage';

const textArray = Array()
const vocalArray = [
    ['a', 'e', 'i', 'o', 'u', 'y', 'æ', 'ø', 'å'],
    ['A', 'E', 'I', 'O', 'U', 'Y', 'Æ', 'Ø', 'Å']
];

const isWordsVocals = {
    words:{},
    vocals:{}
}

const printedArrays = {
    words:[],
    vocals:[]
};

let text = isTextArrayLength = '';

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
            <button onclick="initProcess()">Process input</button>
        </div>
    `;
}

function maincontent() {
    return /* HTML */ `
        <div id="content">
            <p>
                ${isTextArrayLength +' ord: '+ text}
            </p>
            <p>
                ${printedArrays.words}
            </p>
            <p>
                ${printedArrays.vocals}
            </p>
        </div>
    `;
}

function footer() {
    return /* HTML */ `
        <h1>Footer</h1>
    `;
}

//Controller
function initProcess() {
    textArray.push(text.split(' '))
    isTextArrayLength = textArray[0].length;
    console.log(textArray.flat())
    multiCount();
    multiSort();
    prettyArray();
    updateView();
    resetAll();
}

function resetAll() {
    textArray.length = 0;
    Object.assign(isWordsVocals, {
        words:{}, 
        vocals:{}
    });
    Object.assign(printedArrays, {
        words:[], 
        vocals:[]
    });
}

function prettyArray() {
    for (let [key, value] of Object.entries(isWordsVocals.words)) {
        printedArrays.words.push(' '+value+' '+key);
    };
    for (let [key, value] of Object.entries(isWordsVocals.vocals)) {
        printedArrays.vocals.push(' '+value+' '+key);
    };
};

function multiSort() {
    isWordsVocals.words = Object.fromEntries(
        Object.entries(isWordsVocals.words).sort(([,a],[,b]) => b-a)
    );
    isWordsVocals.vocals = Object.fromEntries(
        Object.entries(isWordsVocals.vocals).sort(([,a],[,b]) => b-a)
    );
};

function multiCount() {
    let count, vocalCount;
    for(let word of textArray[0]) {
        count = 0;
        vocalCount = 0;
        for(let i = 0; i < word.length; i++) {
            count++;
            isWordsVocals.words[' bokstav(er) i ' + "'" + word + "'"] = count;
            if(vocalArray.flat().includes(word[i])) {
                vocalCount++;
                isWordsVocals.vocals[' vokal(er) i ' + "'" + word + "'"] = vocalCount;
            };
        };
    };
};
