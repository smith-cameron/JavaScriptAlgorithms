function reverse(array){
    for (var i=0; i<array.length/2; i++){
        var temp=array[i];
        array[i]=array[array.length-1-i];
        array[array.length-1-i]=temp;
    }
    return array;
}
anArray = [1,2,3,4];
aNum = 1;
//console.log(reverse(anArray));

function rotate(arr, num){
    console.log(arr);
    for(var i = arr.length; i < 0; i--){
        console.log(arr[i]);

    }
    return arr;
}
console.log(rotate(anArray, aNum));