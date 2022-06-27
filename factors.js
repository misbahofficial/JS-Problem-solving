// function for getting factors of a given number
function getFactors(num){
    let factors = []
    for(let i=1; i<=num/2; i++){
        if(num%i == 0){
            factors.push(i)
        }
    }
    return factors
}

// function for getting common factors of two given numbers
function commonFactors(num1, num2){
    let commonfactors = []
    for(let i=0; i<num1.length; i++){
        for(let j=0; j<num2.length; j++){
            if(num1[i] === num2[j]){
                commonfactors.push(num1[i])
            }
        }
    }
    return commonfactors
}

let number1 = 12
let number2 = 15
let numFactors1 = getFactors(number1)
let numFactors2 = getFactors(number2)

console.log('Factors of ' + number1 + ' are - ' + numFactors1)
console.log('Factors of ' + number2 + ' are - ' + numFactors2)

let result = commonFactors(numFactors1, numFactors2)
console.log('Common factors of ' + number1 + ' and ' + number2 + ' are - ' + result)