//greedy will always pick the most optimal choice


//makeChange problem

function makeChange (num) {
    var twoFive = 0
    var tenner = 0
    var fiver = 0 
    while (num > 25){
        num -= 25
        twoFive++ 
    } 
    while(num > 10) {
        num -= 10
        tenner++
    }
    while(num > 5){
        num -= 5
        fiver++
    }

    return {twentyFive: twoFive, tenner: tenner, fiver: fiver}

}