let myArr = ['Hi','Hellow', 'Hellow World', 'Highest', 'Hakaluki']
let longestString = myArr[0]

for (let i=0; i<myArr.length; i++){
    if(myArr[i].length > longestString.length){
        longestString = myArr[i]
    }
}

console.log(longestString)