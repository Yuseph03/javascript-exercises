const sumAll = function(arg1, arg2) {
    let sumNum = 0;
    if(arg1 < 0 || arg2 < 0 || isNaN(arg1) == true || isNaN(arg2) == true || typeof(arg2) == "string"){
        return "ERROR"
    }
    else{
        if (arg1 > arg2){
            for(let i = arg2; i <= arg1; i++) {
                sumNum += i; 
            }
        } 
        else {
            for(let i = arg1; i <= arg2; i++) {
                sumNum += i; 
            }
        }    
        return sumNum;
    }
    };

// Do not edit below this line
module.exports = sumAll;
