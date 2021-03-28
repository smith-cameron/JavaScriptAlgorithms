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

var anArray = [1,2,3,4,5,6,7];
var offset = 2;
function rotate(arr, num){
    var last = arr.length-1;
    var temp = 0;
    var swap = arr[arr.length-1];
    var swap2 = arr[arr.length-2];
    arr[arr.length-1] = swap2;
    arr[arr.length-num] = swap;
    for(var i = arr.length-1; i > 1 ; i--){
        console.log("var i is: "+i);
        temp = arr[i];
        console.log("var temp is: "+temp);
        arr[i] = arr[i-num];
        arr[i-num] = temp;
    }
    return arr;
}
console.log(rotate(anArray, offset));

// function rotate(arr, num){
//     var last = arr.length-1;
//     var temp = 0;

//     for(var i = arr.length-1; i > 0 ; i--){
//         console.log("var i is: "+i);
//         temp = arr[i];
//         console.log("var temp is: "+temp);
//         arr[i] = arr[i-num];
//         arr[i-num] = temp;
//     }
//     return arr;
// }




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