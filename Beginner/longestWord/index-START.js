/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let arr = text.split(' ')

    return arr.reduce((a,b) => {
        if(a.length < b.length){
            a = b
        }
        return a
    })
}


module.exports = longestWord