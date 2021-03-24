//identify base case // how to get out of the recursive loop
//identify recursive cases // the recursion
//return where approach
//write procedures for each case that bring you closer to the base case




function loopNTimes (n) {
    console.log('n ==== ', n )
    if(n <= 1) {
        return 'complete'
    }
    return loopNTimes(n-1)
}

loopNTimes(3) 

