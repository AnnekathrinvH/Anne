(function() {

  document.getElementById('bunt').addEventListener('mouseenter', function() {

    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);

    console.log(r, g, b);

    var box = document.getElementById('bunt');
    box.style.backgroundColor = "rgb("+r+","+g+","+b+")";
  });
  document.getElementById('bunt').addEventListener('mouseleave', function() {

    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);



    var box = document.getElementById('bunt');
    box.style.backgroundColor = "rgb("+r+","+g+","+b+")";
  });

})();
