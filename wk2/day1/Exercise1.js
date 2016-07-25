

function getP(selector) {
var allP = document.querySelectorAll(selector);
for (i = 0; i < allP.length; i++) {
  allP[i].style.fontStyle = 'italic';
  allP[i].style.fontWeight = 'bold';
  allP[i].style.textDecoration = 'underline';
}
}
getP('p');
