function reverse(array){
    for (var i=0; i<array.length/2; i++){
        var temp=array[i];
        array[i]=array[array.length-1-i];
        array[array.length-1-i]=temp;
    }
    return array;
}
//anArray = [1,2,3,4];
//aNum = 1;
//console.log(reverse(anArray));

function rotate(arr, num){
    var temp = 0;
    for(var i = arr.length-1; i > 0 ; i--){
        temp = arr[i];
        //while? (run as many time as num indicates. as the shift is one at a time.) {
            arr[i] = arr[i-1];
            arr[i-1] = temp;

        //}

    }

    return arr;
}
//console.log(rotate(anArray, aNum));

//anArr = [1,6,34,65,23,87,4,6,9,22,33,12,16,18,42,21];
//var min = 10;
//var max = 40;
function filterRange(arr, min, max){
    for(i = 0; i < arr.length; i++){
        if(arr[i] > min && arr[i] < max){
            arr[i] = null;
        }else if(arr[i] == null){
            // arr[i] = to the next value that != null
        }
    }

    return arr;
}
//console.log(filterRange(anArr, min, max));
anArray = ["a", "b"];
anotherArray = [1,2];
function concat(arr1, arr2){
    newArr = [];
    for(i = 0)
    return newArr
}
console.log(concat(anArray, anotherArray));