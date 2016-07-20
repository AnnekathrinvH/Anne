var number = function(n) {
  if (n <= 0 | isNaN(n)) {
    return 'ERROR';
  }
  if (n >= 1000000) {
    return n;
  }
  else {
    while(n < 1000000){
      n = n*10;
      console.log(n);
    }
    return n;
  }
}

x = number(1000000);
console.log(x);
