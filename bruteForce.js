//brute force is calucating every cobination possible and keeping track of the quickest
var coins = [10,6 , 1]

function makeChange (value) {
    if(value === 0) {
        return 0
    }
    let minCoins; 

    coins.forEach(coin => { //10
if(value - coin >= 0){ //2
    let curMinCoins = makeChange(value - coin); //~~~
    if(minCoins === undefined || curMinCoins < minCoins){
        minCoins = curMinCoins
    }
}
    })
return minCoins + 1
}

