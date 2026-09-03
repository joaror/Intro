//Model
const app = document.getElementById('app');

let currentPage = 'frontpage';

let startValue = stopValue = interval = null;
let intLoop = '';


//View
updateView();
function updateView() {
    if (currentPage == 'frontpage') page = frontPage();
    app.innerHTML = /* HTML */ `
        <main>${page}</main>
    `;
}

function frontPage() {
    return /* HTML */ `
        <div id="flexcontainer">
            <div id="header">
                <h1>Header</h1>
            </div>
            <div id="maincontainer">
                <div id="sidebar">
                    <div id="inputs">
                        <input 
                            type="number" 
                            oninput="startValue = this.valueAsNumber" 
                            value="${startValue}"
                            placeholder="Start value"><br>
                        <input 
                            type="number" 
                            oninput="stopValue = this.valueAsNumber" 
                            value="${stopValue}"
                            placeholder="Stop value"><br>
                        <input 
                            type="number" 
                            oninput="interval = this.valueAsNumber" 
                            value="${interval}"
                            placeholder="Interval"><br>
                        <button onclick="addInt()">Run Loop</button>
                        <button onclick="addInt(true)">Reset</button>
                    </div>
                </div>
                <div id="maincontent">
                    ${drawNumbers()}
                </div>
            </div>
            <div id="footer">
                <h1>Footer</h1>
            </div>
        </div>
    `;
}

function drawNumbers() {
    return  /* HTML */ `
        <div style="overflow-wrap:break-word">
            <p>Start value: ${startValue ? startValue : ''}</p>
            <p>Stop value: ${stopValue ? stopValue : ''}</p>
            <p>Output: ${intLoop}</p>
        </div>
    `;
}

//Controller    
function addInt(reset) {
    if (!reset) {
        let i = 0;
        for (i = startValue; i <= stopValue; i += interval) {
            intLoop += i;
        }
        updateView();
    } else {
        startValue = stopValue = interval = null;
        intLoop = '';
        updateView();
    }
}
