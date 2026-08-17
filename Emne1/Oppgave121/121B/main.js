function spawnTable() {
    let getTable = new Array();
    getTable.push(["Dag", "Time", "Minutt", "Temperatur"]);
    getTable.push([1, 10, 0, 5]);
    getTable.push([1, 10, 15, 6]);
    getTable.push([1, 10, 30, 7]);

    let table = document.createElement("table");
    table.border = "1";

    let columnCount = getTable[0].length;

    let row = table.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
        let headerCell = document.createElement("th");
        headerCell.innerHTML = getTable[0] [i];
        row.appendChild(headerCell);
    }

    for (let i = 1; i < getTable.length; i++) {
        row = table.insertRow(-1);
        for (let j = 0; j < columnCount; j++) {
            let cell = row.insertCell(-1);
            cell.innerHTML = getTable[i] [j];
        }
    }
    
    let dvTable = document.getElementById("tablecontainer");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

let isContainer = document.getElementById("tablecontainer"), isTable;
let value1, value2, value3, value4;

function createTable() {
    isContainer.innerHTML = /*HTML*/`
        <table id="mytable">
            <tr>
                <th>Dag</th>
                <th>Time</th>
                <th>Minutt</th>
                <th>Temperatur</th>
            </tr>
        </table>`
    isTable = document.getElementById("mytable");
}

function insertTable() {
    isTable.innerHTML += /* HTML */ `
        <tr>
            <td>${value1}</td>
            <td>${value2}</td>
            <td>${value3}</td>
            <td>${value4}</td>
        </tr>
    `
    value3 += 15;
    value4 += 1;
}

function makeTable() {
    value1 = 1, value2 = 10, value3 = 0, value4 = 5;
    createTable();
    let rows = 3;
    let i = rows;
    while(i > 0) {
        insertTable();
        i--;
    }
};

