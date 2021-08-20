
// prompt-sync, a node module for taking user input in
var ps = require("prompt-sync");
var input = ps();

// defining a print function to simplify the console.log to see output in the console
function print(value){
    console.log(value);
}


/**************************************************************/

var userInput = input("Enter a 12 hour format time: ");

var timeAndAmOrPm = userInput.split(" "); // splitting the actual string on the basis of space
var temp = timeAndAmOrPm[0];
var hourMin = temp.split(":"); // spliting the sub-string on the basis of colon
var hoursInt = parseInt(hourMin[0]);


if (timeAndAmOrPm[1] == 'AM') {
    print(userInput);
} else {
    hoursInt = hoursInt + 12;
    var hourString = hoursInt.toString();

    if (hourString == '24') {

        var finalTime = "00" + ":" + hourMin[1] + " AM";
        print(finalTime);

    } else {
        var finalTime = hourString + ":" + hourMin[1] + " PM";
        print(finalTime);
    }

}
