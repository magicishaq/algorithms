//Binary search
//work we have to do is logerithmic because its cut in half every time
function binarySearch (list, item) {
    var min, max, guess; 
    min = 0; 
    max = list.length - 1;

    while(min <= max) {
        guess = Math.floor((min + max) / 2); //half way in the array

        if(list[guess] == item){
            return guess
        }else{
            if(list[guess] < item){
                min = guess + 1
            }else{
                max = guess - 1
            }
        }
    } 

    return -1 //doesnt exist
}




//Divide and conquer
//regonise the base case
//divid Break porblem down during each call
//conquer do work on each subset
//combine solutions

//Linear search
//loop through list and look for that number

function linSearch (list, item) {
    var index = -1
        for(var i = 0 ; i < list.length; i++) {
            if(item === list[i]){
                index = i 
            }
        }
    
        return index
    }
    

