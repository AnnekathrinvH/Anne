var wait = function(f) {
  setTimeout(f, 1500);
}

wait(function() {
  console.log('Hello!');
});
