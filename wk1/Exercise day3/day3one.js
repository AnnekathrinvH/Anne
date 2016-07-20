var n;

var sum = function(){
  var result = 0;
  for (var i = 0; i<arguments.length; i++){
    result = result + arguments[i];
  }
return result;
}

n = sum(1, 2, 3, 4);
console.log(n);
n = sum(1, 2, 3, 4);
console.log(n);
