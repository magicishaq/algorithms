
function mult10 (n) {
    return n * 10
}

const otherSolution = (fn) => {
    var obj = {}
    return function solution (n){
    if(n in obj){
        return obj[n]
    } else{
        let result = fn(n)
        obj[n] = result
        return result
    }
}
} 


