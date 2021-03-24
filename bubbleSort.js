let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        console.log('first loop', i )
        for (let j = 0; j < len; j++) {
            console.log('second loop' , j )
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j]; //creates a temp
                inputArr[j] = inputArr[j + 1]; //replaces the first with last (therefore smaller one goes first)
                inputArr[j + 1] = tmp; //swaps positions
            }
        }
    }
    return inputArr;
};

let arr = [100, 3940, 100, 1, 290, 10, -6, 36]
const ans = bubbleSort(arr)
console.log(ans) 

