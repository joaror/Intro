function isElements() {
    document.getElementById("inserthere").innerHTML = /* HTML */ `
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname"><br/>
        
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname"><br/>
    
        <label for="zero2hundred">En til hundre:</label><br/>
        <input type="range" min="1" max="100" step="1" id="zero2hundred"><br/>

        <label for="number">Skriv inn et tall:</label><br/>
        <input type="number" id="number"><br/>`;

    theLoops();
}

function injectRadios(radios, text) {
    document.getElementById("inserthere").innerHTML += /* HTML */ `
    <input type="radio" id="${radios}" name="fav_language">
    <label for="${radios}">${text}</label><br/>`;
}

function injectVehicles(vehicle, text) {
    document.getElementById("inserthere").innerHTML += /* HTML */ `
    <input type="checkbox" id="${vehicle}">
    <label for="${vehicle}">${text}</label></br>`;
}

function theLoops() {
    let vehicles = new Array();
    vehicles.push(["vehicle1", "vehicle2", "vehicle3"]);
    vehicles.push(["I have a bike", "I have a car", "I have a boat"]);

    let radios = new Array();
    radios.push(["html", "css", "javascript"]);
    radios.push(["HTML", "CSS", "JavaScript"]);

    countingRadios = -radios[0].length;
    n = countingRadios;

    countingCars = -vehicles[0].length;
    i = countingCars;

    while (n < 0) {
        injectRadios(radios.at(0)[n + 3], radios.at(1)[n + 3]);
        n++;
    }

    while (i < 0) {
        injectVehicles(vehicles.at(0)[i + 3], vehicles.at(1)[i + 3]);
        i++;
    }
}
