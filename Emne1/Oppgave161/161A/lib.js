function fixText(wordToFix) {
    let charredText = [...wordToFix.replace(/ /g, '')]
    charredText.splice(0, 1, charredText[0].toUpperCase() )
    return charredText.join('')
}

function isEmail(email) {
    let response = '';
    if (email.includes('@')) {
        response = 'Inneholder @'
        let isAddress = [...email.split('@')]
        if (isAddress[0].includes('.') && isAddress[1].includes('.'))
            response = 'Inneholder dotter'
    }
    return response
}

