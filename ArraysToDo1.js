//Push Front
var arr = [1,2,3,4];
var num = 6;
var indexOf = 2;
function pushFront(arr, num){
    arr.push(num);
    var temp = 0;
    for(var i = arr.length-1; i >= 0; i--){
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        for(var j = arr.length-2; j >= 1; j--){
            temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
}
//console.log(pushFront(arr, num));

//Pop Front
function popFront(arr){
    var temp = 0;
    if((arr.length % 2) != 0){
        for(var i = 0; i <= arr.length/2-1; i++){
            console.log(arr);
            temp = arr[i];
            arr[i] = arr[arr.length-1];
            arr[arr.length-1] = temp;
            for(var j = i+1; j <= i+1; j++){
                temp = arr[j];
                arr[j] = arr[arr.length-1-j];
                arr[arr.length-1-j] = temp;
            }
            console.log(arr);
            arr.pop();
            for(var i = 0; i <= arr.length/2; i++){
                console.log(arr);
                temp = arr[i];
                arr[i] = arr[arr.length-1];
                arr[arr.length-1] = temp;
                for(var j = i+1; j <= i+1; j++){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
                return arr;
            }
        }
    }
    else if((arr.length % 2) == 0){
        for(var i = 0; i <= arr.length/2; i++){
            console.log(arr);
            temp = arr[i];
            arr[i] = arr[arr.length-1];
            arr[arr.length-1] = temp;
            for(var j = i+1; j <= i+1; j++){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            console.log(arr);
            arr.pop();
            for(var i = 0; i <= arr.length; i++){
                temp = arr[i];
                arr[i] = arr[arr.length-1];
                arr[arr.length-1] = temp;
                return arr;
            }
        }
    }
}
//console.log(popFront(arr));

//Insert At
function insert(arr, num, index){
    arr.push(num);
    var temp = 0;
    for(var i = arr.length-1; i >= 0; i--){
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        console.log(arr);
        for(var j = arr.length-2; j >= arr[index]; j--){
            temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
}
//console.log(insert(arr, num, indexOf));

//Remove At
function remove(arr, index){
    console.log(arr);
    var temp = 0;
    for(var i = 0; i <= arr.length-1;i++){
        temp = arr[index];
        arr[index] = arr[index+1];
        arr[index+1] = temp;
        var toRemove = arr.pop();
        console.log(arr)
        return toRemove;
    }
}
console.log(remove(arr, indexOf));
