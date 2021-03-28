//Push Front
var arr = [1,2,2,3,4,5,5,6];
var num = 12;
var indexOf = 2;

function pushFront(arr, num){
    arr.push(num);
    var temp ;
    for(var i = arr.length-1; i > 0; i--){
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
return arr;
}
//console.log(pushFront(arr, num));

//Pop Front
function popFront(arr){
    var temp ;
    for(var i = 0; i < arr.length-1; i++){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    arr.pop();
    return arr;
}
//console.log(popFront(arr));

//Insert At
function insert(arr, num, index){
    for(var i = 0; i < arr.length-1; i++){
        if(arr[i] == arr[index]){
            arr[i] = num;
        }
    }
    return arr;
}
//console.log(insert(arr, num, indexOf));

//Remove At
function remove(arr, index){
    var temp ;
    for(var i = index; i < arr.length-1; i++){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    arr.pop();
    return arr;
}
//console.log(remove(arr, indexOf));

//Swap Pairs
function swap(arr){
    var temp1 ;
    var temp2 ;
    for(var i = 0; i < arr.length-1; i+=2){
        temp1 = arr[i];
        temp2 = arr[i+1];
        arr[i] = temp2
        arr[i+1] = temp1;
    }
    return arr;
}
console.log(swap(arr));

//Remove Duplicates
function duplicates(arr){
    var index;
    var temp;
    for(var i = 0; i < arr.length-1; i++){
        if(arr[i] == arr[i+1]){
            index = i;
            for(var i = index; i < arr.length-1; i++){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            arr.pop();
        }
    }for(var i = 0; i < arr.length-1; i++){
        if(arr[i] == arr[i+1]){
            index = i;
            for(var i = index; i < arr.length-1; i++){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            arr.pop();
        }
    }
    return arr;
}
//console.log(duplicates(arr));