var arr = [1, 2, 3, 4, 5];

  var rev = function(a) {
  var arrCopy = arr.slice();
  var arrReverse = arrCopy.reverse();
  return arrReverse;
}

rev(arr);
console.log(arr);
console.log(arrReverse);
