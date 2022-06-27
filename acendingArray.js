// Sort an array from lowest to highest

function findSmallest(numArr) {
    let smallestNumber = numArr[0]
  
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i + 1] < smallestNumber) {
        smallestNumber = numArr[i + 1]
      }
    }
    return smallestNumber;
  }
  
  function getSortedArray(arr) {
    let sortedArray = []

    /*
    1st iteration -> 4
    2nd iteration -> 3
    3rd iteration -> 2
    4rth iteration -> 1
    5th iteration -> 0
    
    */
  
    while(arr.length) {
      let smallest = findSmallest(arr)
      let smallestNumbmerIndex;
  
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === smallest) {
          smallestNumbmerIndex = i
        }
      }
      arr.splice(smallestNumbmerIndex, 1)
      sortedArray.push(smallest)
    }
    return sortedArray
  }
let myArr = [23, 2, 7, 3]
console.log('sorted array - ' + getSortedArray(myArr)) // first example 
console.log('sorted array - ' + getSortedArray([5, 6, 2, 9, 10, 3, 4, 6, 8])) // second example