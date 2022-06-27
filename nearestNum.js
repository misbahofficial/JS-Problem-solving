// Find the nearest number to 100 from two given integer

const targetNumber = 100
let num1 = 99 // given integer 1
let num2 = 98 // given integer 2

if ((targetNumber - num1) < (targetNumber - num2)) {
    console.log(num1 + ' is Nearest to 100')
} else {
    console.log(num2 + ' is Nearest to 100')
}