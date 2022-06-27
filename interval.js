/*
 Read an array and print how many items in the array are in rage of [10, 20] and also how many are not in the range
*/

let myArr = [1, 5, 7, 0, 23, 5] // inputted array
let outOfRange = 0
let inRange = 0


for (let i=0; i<myArr.length; i++){
    if (myArr[i] >= 10 && myArr[i] <= 20){
        inRange++
    } else {
        outOfRange++
    }
}

console.log("In Range: " + inRange + " number(s)")
console.log("Out of Range: " + outOfRange + " number(s)")