let isVector = document.getElementById("mySvg");

let circleX = document.getElementById("circleX"),
    circleY = document.getElementById("circleY"),
    circleR = document.getElementById("circleR"),
    circleColor = document.getElementById("circlecolor");

let rectX = document.getElementById("rectx"),
    rectY = document.getElementById("recty"),
    rectWidth = document.getElementById("rectwidth"),
    rectHeight = document.getElementById("rectheight"),
    rectColor = document.getElementById("rectcolor");

function addCircleFromInput() {
    addCircle(circleX.value, circleY.value, circleR.value, circleColor.value);
}

function addRectFromInput() {
    addRect(rectX.value, rectY.value, rectWidth.value, rectHeight.value, rectColor.value)
}

function addRect(x, y, w, h, color) {
    isVector.insertAdjacentHTML("beforeend", /*HTML*/ `<rect width="${w}" height="${h}" x="${x}" y="${y}" rx="0" ry="0" fill="${color}"/>`);
}

function addCircle(x, y, r, color) {
    isVector.insertAdjacentHTML("beforeend", /*HTML*/ `<circle cx="${x}" cy="${y}" r="${r}" stroke="green" stroke-width="4" fill="${color}"/>`);
}
