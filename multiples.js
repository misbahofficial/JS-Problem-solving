
// function for evaluating multiples of a number with limit of how many multiples to show
function getMultiples(num, limit){
    // an empty array to store the multiples
    let multiples = []
    for(let i=1; i<=limit; i++){
        multiples.push(i*num)
    }
    return multiples
}

// function for evaluating the common multiples of two given arrays of multiples
function commonMultiples(multipleArray1, multipleArray2){
    // an empty array to store the common multiples
    let commonMultiple = []
    for(let i=0; i<multipleArray1.length; i++){
        // nested loop to iterate through the second array of multiples to match the common factor
        for(j=0; j<multipleArray2.length; j++){
            if(multipleArray1[i] === multipleArray2[j]){
                commonMultiple.push(multipleArray1[i])
            }
        }
    }
    return commonMultiple
}

// giving two separate arrays input
let num1 = Math.floor( 50 * Math.random()) // generating random input
let limit = 20
let num2 = Math.floor( 50 * Math.random()) // generating random input
let multipleArray1 = getMultiples(num1, limit)
let multipleArray2 = getMultiples(num2, limit)

// showing the multiples of two given number with a defined limit
console.log('Multiples of ' + num1 + ' are - ' + multipleArray1)
console.log('Multiples of ' + num2 + ' are - ' + multipleArray2)

// storing the array of common multiples in a separate variable
let result = commonMultiples(multipleArray1, multipleArray2)

// showing ultimate common multiples
console.log('Common multiples - ' + result)



