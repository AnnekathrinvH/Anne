(function() {

  document.addEventListener('mousemove', function(e) {
    var cursor = document.getElementById('square');
    var x = e.clientX -50;
    var y = e.clientY -50;
    cursor.style.left = x +'px';
    cursor.style.top = y +'px';
  });
})();
