//stops repeated programming
//cache values to avoid repeated calucaltions

//caching

//top down recursive approach
//botom up iterative technique


const cache = {}
const coins = [10,6,1]; 

const makeChange = (value) => {
    if(cache[value]) return cache[value] 

    let minCoin = -1
    coins.forEach(coin => {
        if(value - coin >= 0){
            let curMinCoin = makeChange(value - coin ); 
            if(minCoin === -1 || curMinCoin < minCoin){
                minCoin = curMinCoin
            }
        }
    })

    //save the value into the coin
    cache[value] = minCoin + 1
    return cache[value]
}