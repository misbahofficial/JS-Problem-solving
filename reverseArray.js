// Write a program which reverses an given array without using the built in reverse() method

let myarr = [1, 2, 3, 4, 5] // given array
let reverseArr = []

for (let i=myarr.length-1; i>=0; i--){
    reverseArr.push(myarr[i])
}

console.log(reverseArr)