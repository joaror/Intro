const kaffe = document.getElementById("kaffecanvas");
const ctxKaffe = kaffe.getContext("2d");

function draw() {
    kaffetrakter();
    isWater();
    isCoffee();
}

function kaffetrakter() {
    ctxKaffe.fillRect(155, 225, 200, 25);   //trakterkanal
    ctxKaffe.fillRect(182, 250, 76, 15);    //trakterkanaldyseTopp 
    ctxKaffe.fillRect(214, 265, 9, 4);      //trakterkanaldyse 
    
    ctxKaffe.strokeRect(310, 250, 40, 70);  //vanntank
    ctxKaffe.fillRect(315, 320, 30, 80);    //stamme
    ctxKaffe.fillRect(170, 390, 100, 10);   //plata
    ctxKaffe.fillRect(155, 400, 200, 25);   //sokkel
    ctxKaffe.strokeRect(180, 320, 80, 70);  //kaffekolbe
    ctxKaffe.fillRect(182, 293, 76, 30);    //filterkopp
    ctxKaffe.fillRect(201, 285, 38, 8);     //filterkopptopp 
}

function  isWater() {
    ctxKaffe.fillStyle = "#66a7db";
    ctxKaffe.fillRect(311, 319, 38, -30); //vann
}

function isCoffee() {
    ctxKaffe.fillStyle = "#352818";
    ctxKaffe.fillRect(181, 389, 78, -40); //kaffe
}
