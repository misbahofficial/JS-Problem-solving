// LeetCode two sum problem

let givenArray = [6, 7, 8, 9, 0] // given array
const target = 9
let firstNumber; // for storing first number
let secondNumber; // for storing second number
let targetNumberIndices =[] // array for storing the target number indices
var isTargetFound = false

for(let i=0; i<givenArray.length; i++){
    firstNumber = givenArray[i]
    let firstNumberIndex = i
    
    for(let k=0; k<givenArray.length; k++){
        secondNumber = givenArray[k+1]
        let secondNumberIndex = k+1
        let twoSum = firstNumber + secondNumber
        if(twoSum === target){
            targetNumberIndices.push(firstNumberIndex, secondNumberIndex)
            isTargetFound = true
            break;
        }
    }
    if(isTargetFound){
        break;
    }
}

console.log(targetNumberIndices)

