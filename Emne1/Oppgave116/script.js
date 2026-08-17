function show1() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>1</h1>
        <button onclick="show2()">Øke med én</button>
        <button onclick="show2()">Doble</button>
    `;
}

function show2() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>2</h1>
        <button onclick="show3()">Øke med én</button>
        <button onclick="show4()">Doble</button>
    `;
}
function show3() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>3</h1>
        <button onclick="show4()">Øke med én</button>
        <button onclick="show6()">Doble</button>
    `;
}
function show4() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>4</h1>
        <button onclick="show5()">Øke med én</button>
        <button onclick="show8()">Doble</button>
    `;
}
function show5() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>5</h1>
        <button onclick="show6()">Øke med én</button>
        <button onclick="show10()">Doble</button>
    `;
}
function show6() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>6</h1>
        <button onclick="show7()">Øke med én</button>
        <button onclick="show12()">Doble</button>
    `;
}
function show7() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>7</h1>
        <button onclick="show8()">Øke med én</button>
        <button onclick="show1()">Reset</button>
    `;
}
function show8() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>8</h1>
        <button onclick="show9()">Øke med én</button>
        <button onclick="show1()">Reset</button>
    `;
}
function show9() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>9</h1>
        <button onclick="show10()">Øke med én</button>
        <button onclick="show1()">Reset</button>
    `;
}
function show10() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>10</h1>
        <button onclick="show11()">Øke med én</button>
        <button onclick="show1()">Reset</button>
    `;
}
function show11() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>11</h1>
        <button onclick="show12()">Øke med én</button>
        <button onclick="show1()">Reset</button>
    `;
}
function show12() {
    document.getElementById('dinId').innerHTML = /*HTML*/`
        <h1>12</h1>
        <button onclick="show1()">Reset</button>
    `;
}
show1();

let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");

let btnBox = document.getElementById("btncontainer");
let isLiving = document.getElementById("apartment");
let isInside = false;

function isMoving(position) {
     if (position == "start") {
        btnBox.innerHTML = `<button id="1" onclick="isMoving('hallway')">Enter</button>
                            <button id="2" onclick="isMoving('kitchen')" disabled></button>
                            <button id="3" onclick="isMoving('livingroom')" disabled></button>
                            <button id="4" onclick="isMoving('bathroom')" disabled></button>`;

        !isInside ? isLiving.innerHTML= `<div>
                                            <p>You are finally here, infront of the apartment.<br>
                                            Would you like to enter?</p>
                                        </div>` : isLiving.innerHTML= `<div>
                                            <p>You went back outside, nothing to see.<br>
                                            Would you like to go back inside?</p>
                                        </div>`

    } else if (position == "hallway") {
        btnBox.innerHTML = `<button id="1" onclick="isMoving('start')">Exit</button>
                            <button id="2" onclick="isMoving('kitchen')">Kitchen</button>
                            <button id="3" onclick="isMoving('livingroom')">Livingroom</button>
                            <button id="4" onclick="isMoving('bathroom')">Bathroom</button>`;
                            
        !isInside ? isLiving.innerHTML = `<div>
                                            <p>You entered the apartment and are standing in the hallway.<br>
                                            You see doors leading to the bathroom,<br>
                                            the livingroom and the kitchen.<br>
                                            Where would you like to explore?</p>
                                        </div>` : isLiving.innerHTML = `<div>
                                            <p>You are standing in the hallway.<br>
                                            You see the same doors leading to the bathroom,<br>
                                            the livingroom and the kitchen.<br>
                                            Where would you like to explore?</p>
                                        </div>`;
        isInside = true;

    } else if (position == "kitchen") {
        isInside = true;
        btnBox.innerHTML = `<button id="1" onclick="isMoving('hallway')">Hallway</button>
                            <button id="2" onclick="isMoving('kitchen')" disabled>Kitchen</button>
                            <button id="3" onclick="isMoving('livingroom')">Livingroom</button>
                            <button id="4" onclick="isMoving('bathroom')" disabled>Bathroom</button>`;
                            
        isLiving.innerHTML = `<div><p>You are standing in the kitchen.<br>
                                Would you like to enter the livingroom, or go back to the hallway?</p>
                            </div>`;

    } else if (position == "livingroom") {
        isInside = true;
        btnBox.innerHTML = `<button id="1" onclick="isMoving('hallway')">Hallway</button>
                            <button id="2" onclick="isMoving('kitchen')">Kitchen</button>
                            <button id="3" onclick="isMoving('livingroom')" disabled>Livingroom</button>
                            <button id="4" onclick="isMoving('bathroom')" disabled>Bathroom</button>`;

        isLiving.innerHTML = `<div><p>You are standing in the livingroom.<br>
                                Would you like to enter the kitchen, or go back to the hallway?</p>
                            </div>`;

    } else if (position == "bathroom") {   
        isInside = true;
        btnBox.innerHTML = `<button id="1" onclick="isMoving('hallway')">Hallway</button>
                            <button id="2" onclick="isMoving('kitchen')" disabled>Kitchen</button>
                            <button id="3" onclick="isMoving('livingroom')" disabled>Livingroom</button>
                            <button id="4" onclick="isMoving('bathroom')" disabled>Bathroom</button>`;

        isLiving.innerHTML = `<div><p>You are standing in the bathroom.<br>
                                Would you go back to the hallway?</p>
                            </div>`;
    }
}
