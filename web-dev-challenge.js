/*

  *Challenge 1

*/
//check two numbers and return true if one of the two numbers equals 65 or if the sum is 65.

var num1;
var num2;
var sum;

function check(num1,num2) {
    sum = num1+num2;
    if (num1 == 65 || num2 == 65 || sum == 65) {
        return true;
    }else
        return false;
}
console.log(check(24,41)); //printing


/*

  *Challenge 2

*/
//calculating the area of the triangle.

var side1;
var side2;
var side3;

function calculateArea(side1,side2,side3) {
var p = (side1 + side2 + side3)/2; //calculating semiperimeter.
var area = Math.sqrt(p*((p - side1)*(p - side2)*(p - side3)));
    return area;
}
console.log(calculateArea(7,8,9)); //printing results


/*

  *Challenge 3

*/
//finding the highest number.

var num1;
var num2;
var num3;


function highestNumber(num1,num2,num3) {

    if (num1 > num2 && num1 > num3) {
        return num1; //the max number

    }else if(num2 > num1 && num2 > num3) {
        return num2; //the max number

    }else{
        return num3; //the max number
    }
}// end highestNumber
var num = highestNumber(100,6,5000); //calling highestNumber function.
console.log(highestNumber(100,6,5000));


/*

  *Challenge 4

*/
//converting a number into hours and minutes.

var number = 469; // the number to be calculated
var time; // the complete time in h:m
var hours; // hours to be calculated
var minutes // minutes to be calculated, using the modulus operator

hours = Math.floor(number/60); // using Math.floor() to round off hours
minutes = number%60; //finding the remainder using modulus as the minutes
time = hours +":"+minutes; //combining h and m to create time

console.log(time); //


/*

  *Challenge 5

*/

//inputing two strings and using common characters as outputs.

var input1="Hloni";
var input2="Thembi";

	// Go through all the letter of the first word a for loop
    for(var x=0; x<input1.length;x++){

        // Go through all the letter of the second word
        //nested loop - a loop inside another loop
        for(var y = 0; y<input2.length;y++){

            //compare letters of the first word with
            //the ones of the second word using charAt()

            //Making the words/letter to uppercase
            if(input1.toUpperCase().charAt(x)==input2.toUpperCase().charAt(y)){


    console.log(input1.charAt(x));}
}
}
