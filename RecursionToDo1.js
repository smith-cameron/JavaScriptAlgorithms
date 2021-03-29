'use strict';
//Recursive Sigma
var sum = 0;
function rSigma(num){
    sum += num;
    if(num === 1){
        return sum;
    }
    return rSigma(num - 1);
}
//var num = 5;
//console.log(rSigma(num));

//Recursive Factorial
function rFact(num){
    var input = Math.trunc(num);
    if(input <= 0){
        return 1;
    }
    return input * rFact(input - 1);
}
var num = 6.5;
console.log(rFact(num));