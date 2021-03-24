var countChars = function (str) {
    var count = 0; //constant time  1
    for(var i = 0 ; i < str.length; i++) {
        count ++ //n time length of string
    }
    return count //constant time 1
}

var string = 'Hello World' 

countChars(string)

//n is the str .. increment is constant time


// 1 + n + 1

// 2 + n
//linea 


//O(2+n)

var anotherCount = function (str) {
    return str.length; //property lookup. therefore its constant time
}
var anotherString = 'Ishaq Dance'
anotherCount(anotherString)

//anotherCount = 1
//O(1) 

var myList = [string, anotherString] 
myList.push('Howdy'); //constant
myList.unshift(); // linear
myList.shift(); // linear

//checks for unique values
//quadratic n^2
var isUnique = (arr) => {
    let result = true; 
    for(let i = 0; i < arr.length; i++) {
     console.log('outer loop ' + i )

     for(let j = 0 ; j < arr.length ; j++ ){
         console.log('inner loop ' + j )
         if(i !== j && arr[i] === arr[j]){
             result = false
         }
     }
    }
    return result
}

var arr1 = [1,2,3]
var arr2 = [0,0,6]

isUnique(arr1)
isUnique(arr2) 

//turning isUnique into linear

const isUnique2 = (arr) => {
const breadcrumbs = {}
let result  = true; 
for(let i = 0; i < arr.length; i++){
    console.log('Innner loop' + ' ' + i)
    if(breadcrumbs[arr[i]]) {
        result = false
    }else{
        breadcrumbs[arr[i]] = true
    }
}
return result
}

//linear time