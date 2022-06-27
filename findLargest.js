// Find the largest number from a given array

let numbers = [2, 12, 60, 7, 50] // given array

let largestNumber = numbers[0]

for (let i=0; i<numbers.length; i++){
    if (numbers[i+1] > largestNumber){
        largestNumber = numbers[i+1]
    }
}

console.log(largestNumber)