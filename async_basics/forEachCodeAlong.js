// var arr = [1,2,3,4,5,6];

// function double(arr){
//     for(var i=0; i<arr.length; i++){
//         console.log(arr[i]*2);
//     }
// }

// forEach(arr, function(number){
//     console.log("forEach: " + number * 2);
// });

// double(arr);

var strings = ["my", "forEach", "example"];
var result = "";

function forEach(arr, callback){
    for(var i=0; i<arr.length; i++){
        callback(arr[i], i, arr);
    }
}

forEach(strings, function(str, index, array){
    if(array.lengh -1 !== index){
        result += str + " ";
    }else{
        result += str + "!!!";
    }
    
});
console.log(result);