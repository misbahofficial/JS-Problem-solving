// function for determining wether a number is prime or not
function isPrime(num){
    let count = 0
    let dividend = 0
    for (let i=2; i<num; i++){
        if(num%i === 0){
            dividend = i
            count++
        }
    }

    if(count === 0){
        console.log(num + ' is a Prime Number.')
    } else {
        console.log(num + ' is divisible by ' + dividend)
        console.log(num + ' is NOT a Prime Number.')
    }
}

let num = Math.floor(Math.random() * (100 - 0)+0) // generating random input upto 100

isPrime(99)