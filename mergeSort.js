function mergeSort(arr) {
    if(arr.length === 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2) // half way point
    const left = arr.slice(0,middle) //gets the first half of the array the left side
    const right = arr.slice(middle) //gets the items on te right side of the array 

    const leftMerge = mergeSort(left); //recursivley gets the 1 item in array
    const rightMerge = mergeSort(right); 
    
    return merge(leftMerge, rightMerge)
}

function merge(l, r) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < l.length && rightIndex < r.length){
        if(l[leftIndex] < r[rightIndex]){
            result.push(l[leftIndex])
            leftIndex++
        }else{
            result.push(r[rightIndex])
            rightIndex++ 
        }
    }
    return result.concat(l.slice(leftIndex)).concat(r.slice(rightIndex))
}