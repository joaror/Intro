const kaffe = document.getElementById('kaffecanvas');
const ctxKaffe = kaffe.getContext('2d');

const powerBtn = document.getElementById('powerbutton');
const startBtn = document.getElementById('startbutton');
const abortBtn = document.getElementById('abortbutton');
const drainBtn = document.getElementById('drainbutton');

let isEmpty = 0, maxVolume = -64, initFillLiquid = 0, initDrainLiquid = 0, lastFrameStamp, brewTimer; 
let coffeeVolume = isEmpty;
let waterVolume = isEmpty;
let fillLiquid = initFillLiquid;
let drainLiquid = initDrainLiquid;

let animationRate = 10;

const brewStates = {
    isOn:false, isAborting:false, inProcess:false, 
    isFilling:false, isBrewing:false, 
    isCoffee:false, isDraining:false
};

const abortStates = {
    coffeeLevel:0, waterLevel:0
};

function checkStates() {
    console.log(brewStates);
    console.log(abortStates);
    console.log(drainLiquid, fillLiquid);
};

function setBrewer() {
    kaffetrakter();
    brewLoop();
}

addEventListener('click', (event) => {
    let btnId = event.target.id;
    if (btnId == 'powerbutton') {
        powerSwitch();
    } else if (btnId == 'startbutton') {
        Object.assign(brewStates, {isFilling:true, inProcess:true});
        brewHelper(null, 0.5, brewStates.isFilling);
    } else if (btnId == 'drainbutton') {
        Object.assign(brewStates, {isDraining:true, isCoffee:false});
        brewHelper(coffeeVolume, 0.1, brewStates.isFilling, brewStates.isBrewing, brewStates.isDraining);
    } else if (btnId == 'abortbutton') {
        abortBrew();
    } else if (btnId == 'logbutton') {
        checkStates();
    }
});

function powerSwitch() {
    brewStates.isOn ? 
        (Object.assign(brewStates, {isOn:false, isCoffee:false}), 
            Object.assign(abortStates, {coffeeLevel:coffeeVolume, waterLevel:waterVolume}), 
            clearInterval(brewTimer)) :
        brewStates.isOn = true;
};

function btnLogic() {
    if (brewStates.isOn) {
        if (!brewStates.inProcess){
            startBtn.removeAttribute('disabled');
            abortBtn.setAttribute('disabled', '');
        } else if (brewStates.inProcess) {
            startBtn.setAttribute('disabled', '');
            abortBtn.removeAttribute('disabled');
            if (!brewStates.isCoffee){
                drainBtn.setAttribute('disabled', '');
            } else {
                drainBtn.removeAttribute('disabled');
            }
        }
    } else {
        drainBtn.setAttribute('disabled', '');
        abortBtn.setAttribute('disabled', '');
        startBtn.setAttribute('disabled', '');
    }
}

function abortBrew() {
    clearInterval(brewTimer);
    Object.assign(brewStates, {isFilling:false, isBrewing:false, isAborting:true, isCoffee:false});
    Object.assign(abortStates, {coffeeLevel:coffeeVolume, waterLevel:waterVolume});
    fillLiquid = abortStates.coffeeLevel;
    drainLiquid = abortStates.waterLevel;
    brewEngine(0.2, brewStates.isFilling, brewStates.isBrewing, brewStates.isDraining, brewStates.isAborting);
}

function resetBrewer() {
    Object.assign(brewStates, {isAborting:false, inProcess:false, isCoffee:false, isDraining:false});
    fillLiquid = initFillLiquid;
    drainLiquid = initDrainLiquid;
    coffeeVolume = isEmpty;
    waterVolume = isEmpty;
}

function brewHelper(liquid, rate, filling, brewing, draining) {
    fillLiquid = initFillLiquid;
    drainLiquid = liquid;
    brewEngine(rate, filling, brewing, draining);
}

function brewEngine(rate, filling, brewing, draining, aborting) {
    brewTimer = setInterval(() => {
        if (filling) {
            fillLiquid -= rate;
        } else if (brewing) {
            fillLiquid -= rate;
            drainLiquid += rate;
        } else if (draining) {
            drainLiquid += rate;
        } else if (aborting) {
            fillLiquid += rate;
            drainLiquid += rate;
        }
    }, 10);
}

function brewDynamics() {
    if (brewStates.isFilling) {
        waterVolume = fillLiquid;
        if (waterVolume <= maxVolume) {
            clearInterval(brewTimer);
            Object.assign(brewStates, {isFilling:false, isBrewing:true});
            brewHelper(waterVolume, 0.05, brewStates.isFilling, brewStates.isBrewing);
        }
    } else if (brewStates.isBrewing) {
        coffeeVolume = fillLiquid;
        waterVolume = drainLiquid;
        if (coffeeVolume <= maxVolume) {
            clearInterval(brewTimer);
            Object.assign(brewStates, {isBrewing:false, isCoffee:true});
        }
    } else if (brewStates.isDraining) {
        coffeeVolume = drainLiquid;
        if (coffeeVolume >= isEmpty) {
            clearInterval(brewTimer);
            resetBrewer();
        }
    } else if (brewStates.isAborting) {
        if (coffeeVolume < isEmpty || waterVolume < isEmpty) {
            if (coffeeVolume < isEmpty) {
                coffeeVolume = fillLiquid;
            } 
            if (waterVolume < isEmpty) {
                waterVolume = drainLiquid;
            }
        } else {
            clearInterval(brewTimer);
            resetBrewer();
        }
    }
}

function isWater() {
    ctxKaffe.clearRect(311, 319, 38, -66);
    ctxKaffe.fillStyle = "#66a7db";
    ctxKaffe.fillRect(311, 319, 38, waterVolume); //vann
}

function isCoffee() {
    ctxKaffe.clearRect(181, 389, 78, -65);
    ctxKaffe.fillStyle = "#352818";
    ctxKaffe.fillRect(181, 389, 78, coffeeVolume); //kaffe
}

function draw() {
    isWater();
    isCoffee();
    if (brewStates.isOn) {
        ctxKaffe.fillStyle = "red";
        ctxKaffe.fillRect(335, 415, 5, 5);    //poweron
        if (brewStates.isCoffee) {
            ctxKaffe.fillStyle = "green";
            ctxKaffe.fillRect(325, 415, 5, 5);    //brewready
        } else if (!brewStates.inProcess || brewStates.isAborting) {
            ctxKaffe.fillStyle = "black";
            ctxKaffe.fillRect(325, 415, 5, 5); 
        }
    } else {
        ctxKaffe.fillStyle = "black";
        ctxKaffe.fillRect(335, 415, 5, 5);
        ctxKaffe.fillRect(325, 415, 5, 5);
    }
}

function kaffetrakter() {
    ctxKaffe.fillStyle = "black"
    ctxKaffe.fillRect(155, 225, 200, 25);   //trakterkanal
    ctxKaffe.fillRect(214, 265, 9, 4);      //trakterkanaldyse 
    ctxKaffe.fillRect(182, 250, 76, 15);    //trakterkanaldyseTopp 
    
    ctxKaffe.fillRect(315, 320, 30, 80);    //stamme
    ctxKaffe.strokeRect(310, 250, 40, 70);  //vanntank
    ctxKaffe.fillRect(170, 390, 100, 10);   //plata
    ctxKaffe.fillRect(155, 400, 200, 25);   //sokkel
    ctxKaffe.strokeRect(180, 320, 80, 70);  //kaffekolbe
    ctxKaffe.fillRect(182, 293, 76, 30);    //filterkopp
    ctxKaffe.fillRect(201, 285, 38, 8);     //filterkopptopp 
}
 
function brewLoop(time) {
    lastFrameStamp === undefined ? deltaTime = animationRate : deltaTime = time - lastFrameStamp;
    if (deltaTime >= animationRate) {
        brewDynamics();
        btnLogic();
        draw();
        lastFrameStamp = time;
    }
    requestAnimationFrame(brewLoop);
};
