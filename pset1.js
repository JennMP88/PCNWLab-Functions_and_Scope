/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

//function expression 
const myAge = function(ageNow1=29, numYearsgone=2 ) {
    const sum =ageNow1 + numYearsgone;
    return sum;       
}
console.log (myAge())

//fat arrow
const myAges= (ageNow,numYears)=>{
    return ageNow+numYears;
}
    console.log (myAges(29,2));

/******************
Concatenate Strings

Concatenating string variables

- Create a function called myConcatenate that takes 3 arguments
    * Create an argument called firstStr
    * Create a second argument called secondStr
    * Create a third argument called thridStr
- Concatenate all three arguments in a variable called mySentence
    * console out mySentence variable
- Call myConcatenate function
******************/

//function expression
const myConcatenate= function( firstStr="i", secondStr="am", thirdStr ="iron man" ) {
    const mySentence=firstStr+ " "+ secondStr+ " " + thirdStr;
    return mySentence; 
}
console.log (myConcatenate())


//function fat arrow
const myConcatenation= ( firstStr="i", secondStr="am", thirdStr ="iron man" ) =>{
    const mySentence=firstStr+ " "+ secondStr+ " " + thirdStr;
    return mySentence; 
}
console.log (myConcatenation())


/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/



//function expression
const subtracted= function (a, b) {
   return (a-b);
    //return difference; 
}
console.log (subtracted(7,8))

//fat arrow
const subtract = (a, b) => {
    const difference=a-b;
    return difference; 
}
console.log (subtract(29,10))



/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r2, where is π is Pi and r is the radius squared
******************/


//function expression
const areaOfaCircle = function(radius=2) {
    const Area=3.14*radius**2;
    return Area;
}
console.log (areaOfaCircle())

//function fat arrow
const areaOfaCircle2 = (radius=2) =>{
    const Area=3.14*radius**2;
    return Area;
}
console.log (areaOfaCircle2());

/******************
Temperature Convertert Fahrenheit to Celsius

Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
******************/

//function expression
//NEED TO FIX THE CONSOLE.LOG RESPONSE 
let fahrenheitToCelsius= function(fahrenheit=70){
    let celsius1= ((fahrenheit-32)*(5/9));
    return celsius1;
}
console.log (fahrenheitToCelsius());

//FatArrow Function 
let fahrenheitToCelsius2= (fahrenheit=70)=>{
    let celsius1=((fahrenheit-32)*(5/9));
    return celsius1;
}
console.log (fahrenheitToCelsius ());

 
/*******************
  
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/

let celsiusToFahrenheit= function(celsius=29){
    let fahrenheit1= ((celsius * (9/5) + 32));
    return fahrenheit1;
}
console.log (celsiusToFahrenheit());

//FatArrow Function 
let celsiusToFahrenheit2= (celsius1=29)=>{
    let fahrenheit2=(celsius1 * (9/5) + 32);
    return fahrenheit2;
}
console.log (celsiusToFahrenheit2 ());



/******************
Is it the weekend?

Please write a function called "isItTheWeekend" that has two conditions:

If it is the weekend, return 'Yes, it's the weekend'
If it is not the weekend, return 'No, it's the weekday';
A working example would be:

var today = isItTheWeekend();

console.log(today); // No, it's the weekday

If you are having trouble, please note that Javascript has a helpful built-in function to help get the current day
******************/
 

const isItTheWeekend=(num)=>{

    var today=new Date ("October 20,2018");
    var dateToday=today.getDay();
    if (dateToday==0||dateToday==6) {
     return "yes it is the weekend";
    }
     return "no it is not";
  }
  
  console.log (isItTheWeekend());

  
/******************
Finding the absolute value of a number

write a function called absolute

The function takes one parameter which is a number
The function should return the absolute value of the number
The absolute value of a negative number is the positive version of that same number,
and the absolute value of a positive number (or zero) is that number itself.
******************/

//function expression 
const absolute = function(num) {
    return Math.abs(num);       
}
console.log (absolute(-7))

//fat arrow
const absolute1= (num)=>{
    return Math.abs(num)
}
    console.log (absolute1(7));

/******************
Create a function that counts the number of characters in your name

Character counter

write a function that takes on argument
make sure argument is string
return the number of characters in the string
call function 'countChars'
******************/

//function expression 
const countChars= function(str) {
    let stringName="Jenn"
    return stringName.length;       
}
console.log (countChars());


//Fat Arrrow
    const countChars1 = (str) => {
        let stringName = "Jenn";
         return stringName.length;
    }
console.log (countChars1()); 
    

