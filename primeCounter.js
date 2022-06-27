function primeCount(num1, num2){
    let detector = 0;
    let count = 0;
    
        for(let i=num1; i<=num2; i++){
            if(i < 2){
                continue;
            }
            for(let j=2; j<i; j++){
                if(i%j === 0){
                    detector++
                }
            }
            if (detector === 0){
                count++
            } else {
                detector = 0
            }
        }
        return count
}

let lowerLimit = 1
let upperLimit = 10000

console.log(primeCount(lowerLimit, upperLimit))
