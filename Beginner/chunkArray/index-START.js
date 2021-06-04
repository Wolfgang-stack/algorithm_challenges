/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    let result = []

    let newArr = [...array]

    while(newArr.length > 0){
        result.push(newArr.splice(0, size))
    }

    return result
}


module.exports = chunkArray