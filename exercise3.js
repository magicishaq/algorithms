//recusive factorial

// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

function f(num) {
    if (num < 0 )
    return -1
    else if (num == 0) 
    return 1
    else{
        return (num * f(num -1))
    }
}


f(10)