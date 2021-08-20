
// prompt-sync, a node module for taking user input in
var ps = require("prompt-sync");

var input = ps();

function print(value){
    console.log(value);
}


/**************************************************************/

var userInput = input("Enter a 12 hour format time: ");

var timeAndAmOrPm = userInput.split(" ");
var temp = timeAndAmOrPm[0];
var hourMin = temp.split(":");
var hoursInt = parseInt(hourMin[0]);


if (timeAndAmOrPm[1] == 'AM') {
    print(userInput);
} else {
    hoursInt = hoursInt + 12;
    var hourString = hoursInt.toString();

    if (hourString == '24') {

        var finalTime = "00" + ":" + hourMin[1] + " PM";
        print(finalTime);

    } else {
        var finalTime = hourString + ":" + hourMin[1] + " PM";
        print(finalTime);
    }

}
