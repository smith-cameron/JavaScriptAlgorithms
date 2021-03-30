'use strict';
//Recursive Fibonacci
function rFib(num){
    if(num < 2){
        return 1;
    }
    return rFib(num - 1) + rFib(num - 2);
}
//console.log(rFib(5));

//Recursive “Tribonacci”
function rTrib(num){

}
console.log(rTrib(5));