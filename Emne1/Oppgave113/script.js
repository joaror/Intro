let isWidth = 40;
let eArray = document.querySelectorAll(".imageContainer");

function reSize(larger) {
    larger ? isWidth +=5 : isWidth -=5;
    eArray.forEach(e => e.style.setProperty("width", isWidth+"px"));
};
