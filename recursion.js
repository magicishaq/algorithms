//Call stack game
//function called, gets put on the stack
//execute the function body, untill another function gets called
//if the function is there, go back to the first step
//if return is hit, pop current function off stack and continue where you left off


var callMe = function () {
    callMe()
    //will constantly be in  loop
    callMe()
    callMe('anytime')
}

var tracker = 0 

var callMe = function () {
    tracker++ 
    if(tracker == 3) {
        return 'loops'
    }
    callMe('anytime')
    //emplicted return is undefined
}

var tracker = 0 

var callMe = function () {
    tracker++ 
    if(tracker == 3) {
        return 'loops'
    }
    callMe('anytime')
    //implicted return is undefined
}


var tracker = 0 

var callMe = function () {
    tracker++ 
    if(tracker == 3) {
        return 'loops'
    }
    return callMe('anytime')
    //emplicted return is undefined
}


