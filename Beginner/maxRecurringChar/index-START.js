/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let charsObject = {}

    for( let character of text){
        if(charsObject.hasOwnProperty(character)){
            charsObject[character]++
        } else {
            charsObject[character] = 1
        }
    }

    let charArray = Object.keys(charsObject)
    let occuranceArray = Object.values(charsObject)
    maxReccuranceVal = Math.max(...occuranceArray)

    return charArray[occuranceArray.indexOf(maxReccuranceVal)]
}



module.exports = maxRecurringChar;