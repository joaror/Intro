const numbersArray = Array()



function arrayFiller(amount) {
    for(let i of amount) {
        numbersArray.push(Math.floor(Math.random() * amount)+1)
    }
}
