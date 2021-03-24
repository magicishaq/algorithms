function factorial(num) {
    var result = 1; 
for(var i = 2; i <=  num ; i++) {
    console.log(`result = ${result} * ${i} which equals (${result * i})`)
    result *= i
}

return i 

}


//using recursion

function factorial(num) {
    if(num == 1) {
        //getting to the base case
        return 1
    }else{
        console.log(`returning ${num} * factorial(${num} - 1 )`)
        return num * factorial(num-1)
    }
}



//Log recursion
function logNumbers(start, end) {
    for(var i = start ; i <= end; i++) {
        console.log('looped')
    }

    return 1
}


//log in recursive
function logNumbers(start, end) {
    console.log(`start = ${start} and end = ${end} `)
    recurse(start)

    function recurse (i) {
        console.log('hitting i  ' + i)

        if (i < end) {
            recurse(i + 1)
        }
        }
}


