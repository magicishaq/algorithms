//Wrapper functions

function wrapper (start, end)  {
    recurse(start)
    function recurse (i){
        if(i < end){
            recurse(i)
        }
    //implicit return undefined 
    }  
}

//accumulator technique
function joinElements(array, joinString) {
    return recurse(0, '')
    function recurse(index, resultSoFar) {
        resultSoFar += array[index]
        
        if(index === array.length -1 ) {
            return resultSoFar;
        }else{
            return recurse(index + 1, resultSoFar + joinString)
        }
    }
}

//iterative case

function joinElements(array, joinString) {
    var resultsSoFar = ''
    for(var i = 0; i < array.length ; i ++) {
        resultsSoFar += (array[i] + joinString)
    }

    return resultsSoFar
}