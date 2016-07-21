var input = [1, 2, 3, 4]

function call(n, m){
  console.log(n, m)
}


function each(arrayOrObject, fun) {
  if (typeof arrayOrObject === 'object') {
    for (var key in arrayOrObject) {
      fun(arrayOrObject[key], key);
  }
}

  else if (Array.isArray(arrayOrObject)) {
    for (var i = 0; i < arrayOrObject.length; i++) {
      fun(arrayOrObject[i], i);
    }
  }
}
each(input, call);
