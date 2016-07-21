var arr = [1, 2, -3, 4, -5];


function sort(n) {

    if (n < 0){
      return true;
    }
    else {
      return false;

  }
}

function getLessThanZero(a) {
  var newArray = a.filter(sort);
  return newArray;
}

var newArray = getLessThanZero(arr);
console.log(newArray);
