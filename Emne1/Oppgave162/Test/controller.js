
function reset() {
    numbersArray.length = 0;
    theGreatArray.length = 0;
    tries = 0;
    digits = 0;
    updateView();
}

function changePage(change) {
    if (change == 'increase') {
        pageIndex++;
        updateView();
    } else if (change == 'decrease') {
        if (pageIndex <= 0) {
            console.log('Nothing to see here', pageIndex);
        } else {
            pageIndex--;
            updateView();
        }
    }
}

function arrayFiller(amount) {
    breakLoop = false;
    while (true) {
        numbersArray.length = 0;
        tries ++;
        while (true) {
            let digit = Math.floor(Math.random() * amount) + 1;
            digits ++
            if(!numbersArray.includes(digit)) {
                numbersArray.push(digit);
                if (numbersArray.length >= amount) break;
            }
        }
        theGreatArray.push(numbersArray.flat())
        checkArray();
        if (breakLoop) {
            break;
        } 
    }
    updateView();
}

function checkArray() {
    const maybeSorted = [...numbersArray]
    const stringArray = JSON.stringify(maybeSorted);
    const ascendArray = JSON.stringify(maybeSorted.sort((a, b) => a-b));
    const descendArray = JSON.stringify(maybeSorted.sort((a, b) => b-a));
    stringArray == ascendArray ? 
        (breakLoop = !breakLoop, console.log('SORTED acsending', numbersArray)) :
    stringArray == descendArray ? 
        (breakLoop = !breakLoop, console.log('SORTED descending', numbersArray)) :
    null;
}
