(function() {
  var ticker = document.getElementById('container');
  var id;
  var startPosition = ticker.offsetLeft;
  var links = document.get

  function moveTicker() {
    var newPosition = startPosition--;
    ticker.style.left = newPosition + "px";
    id = window.requestAnimationFrame(moveTicker);
/*appendchild, remove child*/

  }
  console.log(id);


  function stopTicker() {
    window.cancelAnimationFrame(id);
    ticker.removeEventListener('mouseover', stopTicker);
    ticker.addEventListener('mouseout', startTicker);
    console.log(id);
  }

  function startTicker() {
    moveTicker();
    console.log('start');
    ticker.removeEventListener('mouseout', startTicker);
    ticker.addEventListener('mouseover', stopTicker);

  }

  moveTicker();
  ticker.addEventListener('mouseover', stopTicker);


})();
