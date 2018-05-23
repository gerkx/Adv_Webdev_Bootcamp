// returns index of first element in the array which returns a truthy value. 
// -1 is returned if no truthy values are found

var randValues = [2,9,6,8];

function findIndex(array, callback){
    for(var i = 0; i < array.length; i++){
        if(callback(5, i, array)){
            return i;
        }
    }
    return -1;
}

function callbackFn(num, index, array){
    return array[index] % num === 0;
}

console.log(findIndex(randValues, callbackFn));

/// For submission
function findIndex(array, callback){
    for(var i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            return i;
        }
    }
    return -1;
}