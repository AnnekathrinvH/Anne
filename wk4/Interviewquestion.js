//getArrayOfIndexLoggingFunctions(5)[2]();


//var indexLoggingfunctions = getArrayOfIndexLoggingFunctions(5);


function getArrayOfIndexLoggingFunctions(len) {
    var array = [];
    var getFunc = function(n) {
        return function() {
            console.log(n);
        }
    }

    for( var i = 0; i < len; i++) {
        array.push(getFunc(i));
    }
    return array;
}

getArrayOfIndexLoggingFunctions(5)[2]();
