function reverse(arr){
    for (var i=0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
//anArray = [1,2,3,4];
//offset = 2;
//console.log(reverse(anArray));
// ------------------
//      i | 1
//   temp | 4
//  temp2 | 2
// arr1   | [2,1,2,3]

function rotate(arr, num){
    //var temp = arr[arr.length-1];
    var i = arr.length-1;
    var temp = 0;
    while( i > 0){
        temp = arr[i];
        arr[i] = arr[i-num];
        arr[i-num] = temp;
        i--
    }
    //arr[0] = temp;
    return arr;
}
//console.log(rotate(anArray, offset));

function rotate2(arr, num){
    var temp = 0;
    for(var i = arr.length-1; i > 0 ; i--){
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;


    }

    return arr;
}
//console.log(rotate2(anArray, offset));

anArr = [1,6,34,65,23,87,4,6,9,22,33,12,16,18,42,21];
var min = 10;
var max = 40;
function filterRange(arr, min, max){
    for(i = 0; i < arr.length; i++){
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

//anArray = ["a", "b"];
//anotherArray = [1,2];
function concat(arr1, arr2){
    newArr = [];
    for(var i = 0; i < arr1.length; i++){
        newArr[newArr.length] = arr1[i];
    }
    for(var i = 0; i < arr2.length; i++){
        newArr[newArr.length] = arr2[i];
    }
    return newArr
}
//console.log(concat(anArray, anotherArray));