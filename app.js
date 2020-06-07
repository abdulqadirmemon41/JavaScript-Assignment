//Chapter 1
//Task 1 
alert("Welcome to our Website!");

//Task 2
alert("Error! Please enter a valid password");

//Task 3
alert("Welcome to JS Land... \nHappy Coding!");

//Task 4
alert("Welcome to JS Land"),alert("Happy Coding!");


//Task 5 - copy the code from console
alert("Hello... I can run JS through my web develper's console");

//Task 6 and 7 on index.html page


//Chapter 2
//task 1
var username;

//task 2
var myName = "Abdul Qadir";

//task 3
var message = "Hello World";
alert(message);

//task 4
var name,age,courseEnrolled;
name = "Abdul Qadir";
age = 20;
courseEnrolled = "Web and Hybird Mobile Development";
alert(name);
alert(age + " years old");
alert(courseEnrolled);

//task 5
var plz = "PLZZA \nPLZZ \nPLZ \nPL \nP";
alert(plz);

//task 6
var email = "qadirmemon3474@gmail.com";
alert("My Email Address is "+email);

//task 7
var book =  "A smarter way to learn JavaScript";
alert("I'm trying to learn from the Book "+book);

//task 8
document.write("Yuh! I can write HTML content through JavaScript");

//task 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);


//Chapter 3
//task 1
var age = 20;
alert("I am "+age+" years old.")

//task 3
var birthYear = 1999;
document.write("My birth year is "+ birthYear +"<br>"+"Data types of my declared variable is number");

//task 4
var visitorName,productTitle,quantity;
visitorName = "John Doe";
productTitle = "T-Shirt";
quantity = 5;
document.write("<b>" + visitorName +  "</b>" + " ordered " +"<b>"+ quantity +" " + productTitle +  "</b>" + "(s) on XYZ Clothing Store");


// Chapter 4
// task 1
 var a,b,c;

//task 2 - declaring 5 legal & illegal variable names
//legal
 var xyz,_xyz,firstName,XYZ,$firstname;
//Illegal
// var .a,?xyy,9abc,@firstName,&xyz;

// task 3
document.write("<b>" + "Rules for naming JavaScript variables" + "</b> </br></br></br>");
document.write("A variable name can contain only letters, numbers, $, and _ . For example: var $my_1srVariable;" + "</br>");
document.write("Variables must begin with a letter, $, Or _ . For Example name, $name or _name ." + "</br>");
document.write("Variable names are case sensitive." + "</br>");
document.write("Variable names should not be JavaScript keywords" + "</br>");


// Chapter 5
//task 1 & task 2
var firstNumber = +prompt("Enter 1st Number","value here..");
var secondNumber = +prompt("Enter 2nd Number","value here..");
var sum = firstNumber + secondNumber;
var sub = firstNumber - secondNumber;
var mul = firstNumber * secondNumber;
var div = firstNumber / secondNumber;

document.write("Sum of " + firstNumber + " and " + secondNumber + " is " + sum);
document.write("Subtraction of " + firstNumber + " and " + secondNumber + " is " + sub);
document.write("Multiplication of " + firstNumber + " and " + secondNumber + " is " + mul);
document.write("Division of " + firstNumber + " and " + secondNumber + " is " + div);

//task 3
var myVar ;
document.write("Value after variable declaration is: " + myVar + "</br>");
myVar = 5;
document.write("Initial value:  " + myVar + "</br>");
myVar++;
document.write("Value after increment is:" + myVar + "</br>");
myVar += 7;
document.write("Value after addition is:" + myVar + "</br>");
myVar--;
document.write("Value after decrement is:" + myVar + "</br>");
myVar %= 3;
document.write("Output : The remainder is " + myVar + "</br>");

//task 4
var ticketPrice = 600;
document.write("Total cost to by 5 to a movie is " + ticketPrice*5 + "PKR");

//task 5 
document.write("Table of 7 </br></br>")
for(var i = 1; i<=10; i++){
    document.write("7 x " + i + " = " + 7*i + "</br>");
}

//task 6 
var cel = 25;
var fahrenheit = ((cel * 9/5) + 32);
document.write(cel + "<sup>0</sup>C is " + fahrenheit);

var far = 70;
var celsuis = ((far - 32) * 5/9);
document.write(far + "<sup>0</sup>F is " + celsuis);

//task 7
var priceOfItem1 = 650;
var priceOfItem2 = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 = 7;
var shippingCharges = 100;

document.write("Price of Item 1 is " + priceOfItem1 + "</br> Quantity of Item 1 is " + quantityOfItem1 + "</br> Price of Item 2 is " + priceOfItem2 + "</br> Quantity of Item 2 is " + quantityOfItem2 + "</br> Shipping Charges "+ shippingCharges + "</br> </br>");

document.write("Total cost of your order is : " + ((priceOfItem1*quantityOfItem1) + (priceOfItem2*quantityOfItem2) + (shippingCharges)));


//task 8
var totalMarks = 980;
var obtainedMarks = 804;
document.write("<h1><b> Marks Sheet</b></h1> </br> </br> </br>");

document.write("Total Marks : " + totalMarks + "</br> Obtained Marks : " + obtainedMarks + "</br> Percentage : " + (obtainedMarks/totalMarks)*100);

//task 9 
var oneUSDollar = 104.80;
var oneSaudiRiyal = 28;

var totalCurrencyPKR = ((oneUSDollar*10) + (oneSaudiRiyal*25));
document.write("Total Currency in PKR: " + totalCurrencyPKR);

//task 10
var number = 10;
var operations = (((number + 5)*10)/2);
document.write("Result: " + operations);

//task 11
var currentYear = 2020;
var birthYear = 1999;
document.write("<h1><b>Age Calculator</b></h1> </br> </br> </br>");
document.write("Current Year: " + currentYear + "</br>Birth Year: " + birthYear + "</br> Your age is : " + (currentYear - birthYear));

//task 12
var r = 20;
var pi = 3.14;
var circumference = 2*pi*r;

document.write("<h1><b>The Geometrizer</b></h1> </br> </br> </br>");
document.write("Radius of a circle: " + r + "</br>The Circumference is: " + circumference);
document.write("</br> The area is: " + pi*r*r);

//task 13
var favouriteSnack = "Chocolate Chip";
var currentAge = 21;
var estimateMaxAge = 65;
var snackPerDay = 3;
document.write("<h1><b>The Lifetime Supply Calculator</b></h1> </br> </br> </br>");
document.write("Favourite Snack: " + favouriteSnack + "</br> Current Age: " + currentAge + "</br>Estimated Maximum Age: " + estimateMaxAge + "</br> Amount of snacks per day" + snackPerDay + "</br>");

document.write("You will need " +((snackPerDay * 365) * (estimateMaxAge - currentAge)) + " " + favouriteSnack + " to last you until the ripe old age of " + estimateMaxAge) ;


// Chapter 6 - 9
//task 1
var a = 10;
document.write("Result: </br> The value of a is: " + a + "</br>-------------------------</br></br>");
document.write("The value of ++a is :" + ++a + "</br> Now the value of a is: " + a);
document.write("</br></br>The value of a++ is :" + a++ + "</br> Now the value of a is: " + a);
document.write("</br></br>The value of --a is :" + --a + "</br> Now the value of a is: " + a);
document.write("</br></br>The value of a-- is :" + a-- + "</br> Now the value of a is: " + a);

//task 2
var a = 2,b=1;
var result = --a - --b + ++b + b--;
            // 1 -   0 +   1 + 1 = 3;
document.write("a is: " + a + "</br> b is: " + b + "</br> Result is: " + result) ;         

//task 3
var name = prompt("What is your name?","Enter name here ...");
alert("Welcome to our Web Page " + name);

//task 4,5
var tableOf = +prompt("Enter a Number to print its table");

   if(tableOf == ""){ 
    document.write("<b>Table of 5 </b></br></br>")
    for(var i = 1; i<=10; i++){
        document.write("5 x " + i + " = " + 5*i + "</br>");
    }
    
}
else{
    document.write("<b>Table of" + tableOf + " </b> </br></br>")
    for(var i = 1; i<=10; i++){
        document.write(tableOf +" x " + i + " = " + tableOf*i + "</br>");
    }
}

//task 6 also see table at index.html 
var sub1,sub2,sub3,totalSubjectMarks = 100;
var sub1Marks,sub2Marks,sub3Marks;
sub1 = prompt("Enter Name of subject1: ");
sub2 = prompt("Enter Name of subject2: ");
sub3 = prompt("Enter Name of subject3: ");

sub1Marks = +prompt("Enter subject 1 marks: ");
sub2Marks = +prompt("Enter subject 2 marks: ");
sub3Marks = +prompt("Enter subject 3 marks: ");
var sub1Per = (sub1Marks/totalSubjectMarks)*100;
var sub2Per = (sub2Marks/totalSubjectMarks)*100;
var sub3Per = (sub3Marks/totalSubjectMarks)*100;

var obtainedMarks = sub1Marks + sub2Marks + sub3Marks;
var totalPer = (sub1Per + sub2Per + sub3Per)/3;

window.onload = function() {

document.getElementById('sub1').innerHTML = sub1;
document.getElementById('sub2').innerHTML = sub2;
document.getElementById('sub3').innerHTML = sub3;

document.getElementById('sub1Marks').innerHTML = sub1Marks;
document.getElementById('sub2Marks').innerHTML = sub2Marks;
document.getElementById('sub3Marks').innerHTML = sub3Marks;

document.getElementById('sub1Per').innerHTML = this.sub1Per;
document.getElementById('sub2Per').innerHTML = this.sub2Per;
document.getElementById('sub3Per').innerHTML = this.sub3Per;

document.getElementById('obatinedMarks').innerHTML = obtainedMarks;
document.getElementById('totalPer').innerHTML = this.totalPer;

};


// Chapter 9 - 11
//task 1
var city = prompt("Enter city name");
if(city === 'karachi'){
    alert("Welcome to city of lights");
}
else{
    alert("Welcome to " + city);
}

//task 2
var gender = prompt("Enter your gender");
if(gender === 'male'){
    alert("Good Morning Sir");
}
else if(gender === 'female'){
    alert("Good Morning Ma'am");
}
else{
    alert("Please enter correct gender.");
}


//task 3
var color = prompt("Enter the color of road traffic signal");
if(color === 'red'){
    alert("Must Stop");
}
else if(color === 'yellow'){
    alert("Ready to move");
}
else if(color === 'green'){
    alert("Move Now");
}
else{
    alert("Please enter correct color name");
}

//task 4
var remainingFuel = +prompt("Enter your remaining fuel in your car(in litres)");
if(remainingFuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("Don't need to refill the fuel");
}

//task 5
//a
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
 } 
 //Answer - given condition for variable a is true

 //b
 var b = 82; 
 if (b++ === 83){
      alert("given condition for variable b is true"); 
    } 
 //Answer - no answer - condition false

 //c
 var c = 12;
if (c++ === 13){
       alert("condition 1 is true");
     } 
if (c === 13){
       alert("condition 2 is true");
     }
if (++c < 14){
       alert("condition 3 is true");
     } 
if(c === 14){ 
       alert("condition 4 is true");
     } 
//Answer - condition 2 is true , condition 4 is true

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
      alert("The cost equals");
     } 
//Answer -  The cost equals

//e
if (true){
     alert("True"); } 
if (false){
     alert("False"); 
    } 
//Answer - True 

f
if("car" < "cat"){
     alert("car is smaller than cat"); } 
//Answer - car is smaller than cat   


//task 6
var marksObtined3Subjects = +prompt("Enter Marks obtained in 3 Subjects");
var totalMarks = +prompt("Enter total marks of 3 subjects");
var per = (marksObtined3Subjects/totalMarks)*100;

document.write("<h1><b>Marks Sheet</b></h1> </br> </br> </br>");
document.write("Total Marks: " + totalMarks + "</br> Marks obtained: " + marksObtined3Subjects + "<br>Percentage: " + per + "<br>");
if(per >= 80){
    document.write("Grade: A-1 </br> Remarks: Excellent" );
}
else if(per >= 70){
    document.write("Grade: A </br> Remarks: Good" );
}
else if(per >= 60){
    document.write("Grade: B </br> Remarks: You need to improve" );
}
else if(per < 60){
    document.write("Grade: Fail </br> Remarks: Sorry" );
}


//task 7
var secretNumber = 6;
var userInput = +prompt("Guess the secrect number ranging from 1 to 10");
if(userInput === secretNumber){
    alert("Bingo! Correct Answer");
}
else if(userInput+1 === secretNumber){
    alert("Close enough to the correct answer");

}

//task 8

var num1 =3;
var num2 = +prompt("Enter a number");
if(num2%num1 === 0){
    alert(num2 + " is divisble by " + num1);
}
else{
    alert(num2 + " is not divisible by " + num1);
}


//task 9
var inputNumber = +prompt("Enter a number");
if(inputNumber%2 === 0){
    alert("The number is EVEN");
}
else{
    alert("The number is ODD");
}


//task 10
var t = +prompt("Enter your city's tempreture");
if(t > 40){
    alert("It is too hot outside.");
}
else if(t > 30){
    alert("The Weather today is Normal.");
}
else if(t > 20){
    alert("Today’s Weather is cool.");
}
else if(t > 10){
    alert("OMG! Today’s weather is so Cool.");
}


//task 11
var firstNumber = +prompt("Enter first Number");
var secondNumber = +prompt("Enter second Number");
var operator = prompt("Enter an operator(+,-,*,/,%) ");

if(operator == '+'){
    alert("Result is: "+ firstNumber+secondNumber);
}
else if(operator == '-'){
    alert("Result is: "+ firstNumber-secondNumber);
}
else if(operator == '*'){
    alert("Result is: "+ firstNumber*secondNumber);
}
else if(operator == '/'){
    alert("Result is: "+ firstNumber/secondNumber);
}
else if(operator == '%'){
    alert("Result is: "+ firstNumber%secondNumber);
}
else{
    alert("Please enter correct operator.");
}



// Chapter 12-13
//task 1
var input = prompt("Enter any number, uppercase letter or lowercase letter");

if(input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90 ){
    alert("Given input is a Uppercase letter");
}
else if(input.charCodeAt(0) >= 97 && input.charCodeAt(0) <=122 ){
    alert("Given input is a Lowercase letter");
}

else{
    alert("Given input is a Number");
}


//task 2
var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
if(num1 > num2){
    alert(num1 + " is larger number than " + num2);
}
else if(num2 > num1){
    alert(num2 + " is larger number than " + num1);
}
else{
    alert("Both numbers are equal");
}

//task 3
var inputNumber = +prompt("Enter any number");
if(inputNumber > 0){
    alert("The number is POSITIVE");
}
else if(inputNumber < 0){
    alert("The number is NEGATIVE");
}
else{
    alert("The number is ZERO");
}

//task 4
var inputChar = prompt("Enter any single charcter");

if(inputChar === 'a' || inputChar === 'e' || inputChar === 'i' || inputChar === 'o' || inputChar === 'u'){
    alert("True");
}
else{
    alert("False");
}

//task 5
var password = "password123";
var userPassword = prompt("Enter your Password");

if(userPassword === ""){
    alert("Please enter your password");
}
else if(userPassword === 'password123'){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}
 

//task 6
var greeting;
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
}
else {
greeting = "Good evening"; 
}


//task 7
var time = +prompt("Enter the time in 24 hours clock format like: 1900 = 7pm. ");
if(time >= 0000 && time < 1200){
    alert("Good Morning!");
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening!");
}
else if(time >= 2100 && time <= 2359){
    alert("Good Night!");
}
else{
    alert("Please enter correct format like 1900 which means 7pm")
}
 
 


// Chapter 14 -16
//task 1, 2
var students = [];

//task 3
var strArray = new Array("one","two","three");

//task 4
var nbrArray = [1,2,3,4];

//task 5
var booleanArray = [true,false];

//task 6
var mixedArray = [1,"Abdul Qadir",true];

//task 7

var qualifications = ['SSC', 'HSC', 'BCS',' BS', 'BCOM',' MS', 'M. Phil.', 'PhD'];
document.write("<h1>Qualificatons:</h1> </br></br>");
for(var i = 0; i<qualifications.length ; i++){
    document.write(i+1 + ") " + qualifications[i] + "</br>");
}

//task 8
var studentNames = ['Qadir','Faisal','Imran'];
var scores = [320,230,480];
for(var i = 0; i<studentNames.length; i++){
    document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + (scores[i]/500)*100 + " % </br>" );
}


//task 9
var colors = ['red','blue'];
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}

//a
var userInput = prompt("Enter the color at the begining of a list");
colors.unshift(userInput);
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}

//b
colors.push(userInput);
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}

//c
colors.unshift('black','white');
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}

//d
colors.shift();
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}

//e
colors.pop();
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}

//f
var colorIndex = +prompt("Enter the color index number where you want to add a color");
var colorName = prompt("Enter color name");

colors.splice(colorIndex,0,colorName);
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}

//g
var colorIndex = +prompt("Enter the color index number where you want to delete a color");
var howMany = +prompt("How many colors you want to delete");

colors.splice(colorIndex,howMany);
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}

//task 10
var studentScores = [320,230,480,120];
document.write("Scores of Students : ")
for(var i = 0; i<studentScores.length; i++){
        document.write(studentScores[i] + ",");
    }
document.write("</br>Ordered Scores of Students : ");
studentScores.sort();
for(var i = 0; i<studentScores.length; i++){
    document.write(studentScores[i] + ",");
}

//task 11
var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];

document.write("Cities List: </br>" + cities);
var slectedCities = cities.slice(2,4) ;  
document.write("</br></br>Selected Cities List: </br>" + slectedCities);


//task 12
var arr = ['This', 'is', ' my',  'cat'];
document.write("Array: <br>" + arr);

var strJoin = arr.join(" ");
document.write("</br></br>String</br>" +strJoin);

//task 13
var devices = ['Keyboard','Mouse','printer','monitor'];
document.write("Devices: </br>" + devices + "</br>");

for(var i = 0; i<4; i++){
    var queue = devices.shift();
    document.write("</br>Out: <br>" + queue);
}

//task 14
var devices = ['Keyboard','Mouse','printer','monitor'];
document.write("Devices: </br>" + devices + "</br>");

for(var i = 0; i<4; i++){
    var stack = devices.pop();
    document.write("</br>Out: <br>" + stack);
}


// Chapter 17 - 20 
//task 1
var arr = [[],[]];

//task 2
var arr = [['0 1 2 3'],['1 0 1 2'],['2 1 0 1']];
document.write(arr[0] + "<br>" + arr[1] + "<br>" + arr[2]);

//task 3
for(var i = 1; i <= 10; i++){
    document.write(i + "<br>");
}

//task 4
var multiplicationNumber = +prompt("Enter a number to show its multiplication");
var len = +prompt("Enter length of multiplication table");
for(var i = 1; i <= len; i++){
    document.write(multiplicationNumber + " x " + i + " = " + multiplicationNumber*i + "</br>");
}

//task 5
var fruits = ['apple', 'banana', 'mango', 'orange',' strawberry'] ;
for(var i = 0; i< fruits.length; i++){
    document.write(fruits[i] + "</br>");

}

//task 6
var counting = [1,2,3,4,5,6,8,9,10,11,12,13,14,15];
var reverseCounting = [10,9,8,7,6,5,4,3,2,1];
var even = [0,2,4,6,8,10,12,14,16,18,20];
var odd = [1,3,5,7,9,11,13,15,17,19];
var series = ['2k','4k','6k','8k','10k','12k','14k','16k','18k','20k'];

document.write("<b>Counting:</b> </br></br>" + counting + "</br></br><b>Reverse Counting:</b> </br></br>" + reverseCounting + "</br></br><b>Even:</b> </br></br>" + even + "</br></br><b>Odd:</b> </br></br>" + odd + "</br></br><b>Series:</b> </br></br>" + series);

//task 7
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt("Welcome to ABC Bakery. What you want to order Sir/Ma'am?");
if(A.indexOf(userInput) === -1){
    document.write("We are sorry. " + userInput + " is <b>not Available</b> in our Bakery");
}
else{
    document.write(userInput + " is <b>Available</b> at index " + A.indexOf(userInput) + " in our bakery");
}

//task 8
var A = [24, 53, 78, 91, 12]; 
document.write("Array Items: " + A);
document.write("</br>The largest number is: " + Math.max(...A));

//task 9
var A = [24, 53, 78, 91, 12];
document.write("Array Items: " + A);
document.write("</br>The smallest number is: " + Math.min(...A));

//task 10
for(var i = 5; i<= 100; i+=5){

    document.write(i + ", ");

}








    









