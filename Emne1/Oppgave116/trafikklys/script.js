let red = document.getElementById("top");
let yellow = document.getElementById("mid");
let green = document.getElementById("bottom");

let lightSequence = 0

function cycleStates() {
    if (lightSequence == 0) {
        red.classList.toggle("red");
        lightSequence += 1;

    } else if (lightSequence == 1) {
        yellow.classList.toggle("yellow");
        lightSequence += 1;
        
    } else if (lightSequence == 2) {
        red.classList.toggle("red");
        yellow.classList.toggle("yellow");
        green.classList.toggle("green");
        lightSequence += 1;
        
    } else if (lightSequence == 3) {
        yellow.classList.toggle("yellow");
        green.classList.toggle("green");
        lightSequence += 1;
        
    } else if (lightSequence == 4) {
        yellow.classList.toggle("yellow");
        lightSequence = 0;
        cycleStates();
    }
}
