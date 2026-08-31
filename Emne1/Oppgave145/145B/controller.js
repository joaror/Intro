// Controller

function cycleBodyParts (increase, decrease, value, iD) {
    if (increase) {
        if (value < 4) {
            value ++;
        } else {
            value = 1;
        };
    } else if (decrease) {
        if (value > 1) {
            value --;
        } else {
            value = 4;
        };
    };

    if (iD == 'head') {
        isHead = value;
    } else if (iD == 'body') {
        isBody = value;
    } else if (iD == 'legs') {
        isLegs = value;
    }
}

addEventListener('click', (event) => {      
    let action = event.target.id;
    action == 'cardTools' ? (clrCards(), toolBtn = true, updateView()) : 
    action == 'cardHtml' ? (clrCards(), htmlBtn = true, updateView()) :
    action == 'cardCss' ? (clrCards(), cssBtn = true, updateView()) :
    action == 'cardJavaScript' ? (clrCards(), jsBtn = true, updateView()) :
    action == 'cardGame' ? (clrCards(), gameBtn = true, updateView()) : 
    action == 'none' ? (layout = '', updateView()) :
    action == 'vertical' ? (layout = 'vertical', updateView()) :
    action == 'horizontal' ? (layout = 'horizontal', updateView()) :
    action == 'grid' ? (layout = 'grid', updateView()) :
    action == 'headsdown' ? (cycleBodyParts(false, true, isHead, 'head'), updateView()) :
    action == 'headsup' ? (cycleBodyParts(true, false, isHead, 'head'), updateView() ) :
    action == 'bodydown' ? (cycleBodyParts(false, true, isBody, 'body'), updateView()) :
    action == 'bodyup' ? (cycleBodyParts(true, false, isBody, 'body'), updateView()) :
    action == 'legsdown' ? (cycleBodyParts(false, true, isLegs, 'legs'), updateView()) :
    action == 'legsup' ? (cycleBodyParts(true, false, isLegs, 'legs'), updateView() ) : null
    }
);
