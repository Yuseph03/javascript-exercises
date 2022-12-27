const leapYears = function(arg) {
    
    req1 = arg % 4;
    req2 = arg % 100;
    req3 = arg % 400;

    if(req1 == 0 && req2 != 0 || req3 == 0)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
