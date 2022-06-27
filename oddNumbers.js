// Write a program which takes an integer and prints the 6 consecutive odd numbers from that number

let number = 5 // user input
let referenceNumber = 0

if(number % 2 == 0){
    referenceNumber = number + 1
} else {
    referenceNumber = number
}

for (let i=0; i<6; i++){
    console.log(referenceNumber)
    referenceNumber = referenceNumber+2
}