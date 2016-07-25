
function insertElement() {
  document.body.innerHTML += '<div id="new">AWESOME</div>';
  var elem = document.getElementById('new');

  elem.style.position = 'fixed';
  elem.style.zIndex = '2147483647';
  elem.style.left = '20px';
  elem.style.top = '100px';
  elem.style.fontSize = '200px';
}



insertElement();
