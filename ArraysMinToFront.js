var arr = [3,12,6,1,9,3]

//Min to Front
function minToFront(arr){
    var min = arr[0];
    var index ;
    var temp ;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    for (var x = index; x > 0; x--){
        temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}
console.log(minToFront(arr))