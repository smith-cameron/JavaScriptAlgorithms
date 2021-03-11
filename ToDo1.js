//Setting and Swapping
var myNumber = 42;
var myName = "Cameron";
console.log("var myName: "+myName);
console.log("var myNumber: "+myNumber);
var temp = myNumber;
myNumber = myName;
myName = temp;
console.log("var myName: "+myName);
console.log("var myNumber: "+myNumber);

//Print -52 to 1066
for(var i = -52; i <= 1066; i++){
    console.log(i);
}

//Don’t Worry, Be Happy
function beCheerful(){
    console.log("good morning!");
}
for(var i = 1; i <= 98; i++){
    console.log(i);
    beCheerful();
}

//Multiples of Three – but Not All
for(var i = -300; i <= 0; i+=3){
    if(i == -6 || i == -3){
        continue;
    }
    console.log(i);
}

//Printing Integers with While
var i = 2000;
while( i <= 5280){
    console.log(i)
    i ++;
}

//You Say It’s Your Birthday
function birthday(input1, input2){
    if(input1  == 12 && input2  == 21 || input1 == 21 && input2  == 12){
            console.log("How did you know?");
    }
    else{
        console.log("Just another day....");
    }
}
var num1 = 21;
var num2 = 12;
birthday(num1, num2);

//Leap Year
function leapYear(input){
    if((input % 4) == 0){
        if((input % 100) == 0 ){
            if((input % 400) != 0){
                console.log("Almost a Leap Year");
            }
            else{
                console.log("Special Kind of Leap Year");
            }
        }else{
            console.log("Leap Year");
        }
    }else{
        console.log("Not A Leap Year");
    }
}
var aYear = 2000;
leapYear(aYear);

//Print and Count
function PrintAndCount(){
    var intCount = 0;
    for(var i = 512; i <= 4096; i++){
        if((i % 5) == 0){
            console.log(i)
            intCount += 1;
        }
    }
    console.log(intCount+" total integer multiple of 5 between 512 and 4096.");
}
PrintAndCount();

//Multiples of Six
var j = 6;
while(j <= 60000){
    console.log(j);
    j += 6;
}

//Counting, the Dojo Way
for (var i = 1; i <= 100; i++){
    if((i % 10) == 0){
        console.log("Coding");
    }
    else if((i % 5) == 0){
        console.log("Dojo");
    }
    else{
        console.log(i);
    }
}

//What Do You Know?
function myFunction(input){
    console.log(input);
}
var input = "Parameter"
myFunction(input);

//Whoa, That Sucker’s Huge…{
    var sum = 0;
function oddSum(){
    for(var i = -300001; i <= 300000; i++){
        sum += i;
    }
    return sum;
    // console.log(sum);
}
console.log(oddSum());

//Countdown by Fours


//Flexible Countdown


//The Final Countdown
