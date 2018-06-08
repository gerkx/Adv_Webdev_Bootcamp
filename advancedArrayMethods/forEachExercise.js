/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(value){
        newArr.push(value*2);
    });
    return newArr;
}

// arg = [5,1,2,3,10];
// var double = doubleValues(arg);

// console.log(double);

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    var evenArr = [];
    arr.forEach(function(value){
        if(value % 2 === 0){
            evenArr.push(value);
        }
    });
    return evenArr;
}

// var randArr = [5,1,2,3,10];
// console.log(onlyEvenValues(randArr));
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    var firstLastArr = [];
    arr.forEach(function(value){
        var lastIndex = value.length -1;
        var firstLast = value[0] + value[lastIndex];
        firstLastArr.push(firstLast);
    });
    return firstLastArr;
}

// var names = ['colt','matt', 'tim', 'udemy'];
// console.log(showFirstAndLast(names));

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    var keyValueArr = [];
    arr.forEach(function(obj){
        obj[key] = value;
        keyValueArr.push(obj);
    });
    return keyValueArr;
}

// var names = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
// console.log(addKeyAndValue(names, "title", "instructor"));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    var lower = str.toLowerCase().split("");
    // var vowels = {a: 0, e: 0, o: };
    var vowelCount = {a: 0, e: 0, i: 0, o: 0, u: 0};
    lower.forEach(letter =>{
        var vowelStr = "aeiou";
        vowelStr.forEach((vowel, index) =>{
            if(letter == vowel){
                vowelCount[vowelStr[index]] += 1;
            }
        });
    });
    Object.keys(vowelCount).forEach(key =>{
        if(vowelCount[key] === 0){
            delete vowelCount[key];
        }
    });
    return vowelCount;
}

console.log(vowelCount("Elie"));

//// better solution:

function vowelCountBetter(str){
    var split = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    split.forEach(
        letter => {
            if(vowels.indexOf(letter) !== -1){
                if(letter in obj){
                    obj[letter] += 1;
                }else{
                    obj[letter] = 1;
                }
                
            }
        }
    );
    return obj;
}
console.log(vowelCountBetter("Elie"));