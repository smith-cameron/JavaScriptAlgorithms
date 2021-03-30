'use strict';
function reverse(arr){
    for (var i=0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
//var anArray = [1,2,3,4];
//console.log(reverse(anArray));

function rotate(arr, num){
    var len = arr.length;
    for(var i = 0; i < num; i++){
        var temp = arr[len-1];
        for(let i = len-1; i > 0; i--){
            //how come this only works with let instead of var?
            arr[i] = arr[i-1];
        }
        arr[0] = temp;
    }
    return arr;
}
var anArray = [1,2,3,4,5,6,7];
var offset = 3;
console.log(rotate(anArray, offset));

function rotateLeft(arr, num) {
    var len = arr.length;
    for(var i = 0; i < num; i++){
        var temp = arr[0];
        for(let i = 0; i < len; i++){
            arr[i] = arr[i+1];
        }
        arr[len-1] = temp;
    }
    return arr;
}
//var arr = [1,2,3,4,5,6,7];
//var offset = 3;
//console.log(rotateLeft(arr, offset));

//var anArr = [1,6,34,65,23,87,4,6,9,22,33,12,16,18,42,21];
//var min = 10;
//var max = 40;
function filterRange(arr, min, max){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > min && arr[i] < max){
            for(var x = i; x < arr.length - 1; x++){
                var temp = arr[x];
                arr[x] = arr[x+1];
                arr[x+1] = temp;
                arr.pop();
            }
        }
    }
    return arr;
}
//console.log(filterRange(anArr, min, max));

//var anArray = ["a", "b"];
//var anotherArray = [1,2];
function concat(arr1, arr2){
    var newArr = [];
    for(var i = 0; i < arr1.length; i++){
        newArr[newArr.length] = arr1[i];
    }
    for(var i = 0; i < arr2.length; i++){
        newArr[newArr.length] = arr2[i];
    }
    return newArr
}
//console.log(concat(anArray, anotherArray));