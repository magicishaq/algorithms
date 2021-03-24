//Task: Transform sorted array into unique sort
//it should not return any duplicate values

function uniqSort (arr) {
    const breadcrumnbs = {}
    return arr.sort((a,b) => a -b)
     .filter((item, pos) => {
         return arr.indexOf(item) == pos
     })

}
var arr1 = [4,2,2,3,2,2,2]

uniqSort(arr1) // 2,3,4


function solution (arr) {
    const breadcrumbs = {}
    const result = []
for(let i = 0 ; i < arr.length; i++) {
    if(!breadcrumbs[arr[i]]) {
        result.push(arr[i])
        breadcrumbs[arr[i]] = true
    }
}
return result.sort((a,b) => a - b )
}