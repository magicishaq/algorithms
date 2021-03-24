function merge(l, r) {
    // divide /divide imput array into 'n single elements subarrays left list right
    // list init empty array compare first index of left array with right index of
    // right array push the lower val to empty array shift array with the lower
    // value repeat until both arrays are empty

}

function mergeSort(list) {
    if (list.length < 2) {
        
    } 
    else {
        var middle = Math.floor((list.length - 1) / 2)
        var leftList = list.slice(0, middle)
        var rightList = list.slice(middle, animals.length)

        var lSorted = mergeSort(leftList)
        var rSorted = mergeSort(rightList)

        return merge(lSorted, rSorted)
    }

}
