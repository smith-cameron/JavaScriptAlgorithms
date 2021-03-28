'use strict';
//Remove Blanks
function removeBlanks(input){
    var split = input.split(" ");
    var join = split.join("");
    return join;
}
//var inputString = " Pl ayTha tF u nkyM usi c ";
//console.log(removeBlanks(inputString));

//Get Digits
function getDigits(input){
    var split = input.split("");
    var newStringArray = [];
    for(var i = 2; i < split.length; i+=2){
        newStringArray.push(split[i]);
    }
    var output = newStringArray.join("");
    return output;
}
//var myString = "0s1a3y5w7h9a2t4?6!8?0";
//console.log(getDigits(myString));

//Acronyms
function acronyms(str){
    var split = str.split(" ");
    var newStringArray = [];
    for(var i = 0; i < split.length; i++){
        var spread = split[i].split("");
        var char = spread[0];
        newStringArray.push(char);
    }
    var acronym = newStringArray.join("");
    var output = acronym.toUpperCase();
    return output;
}
//var aString = "Live from New York, it's Saturday Night!";
//console.log(acronyms(aString))

//Count Non-Spaces
function countNonSpaces(str){
    var split = str.split("");
    var count = 0;
    for(var i = 0; i < split.length; i++){
        if(split[i] != " "){
            count += 1;
        }
    }
    return count;
}
var thisString = "Honey pie, you are driving me crazy";
//console.log(countNonSpaces(thisString))

//Remove Shorter Strings
function removeShort(str, num){
    var split = str.split(" ");
    var newStringArray = [];
    for(var i = 0; i < split.length; i++){
        var length = split[i].length;
        if(length >= num){
            newStringArray.push(split[i]);
        }
    }
    var rejoin = newStringArray.join(" ");
    return rejoin;
}
//var length = 5;
//console.log(removeShort(thisString, length))