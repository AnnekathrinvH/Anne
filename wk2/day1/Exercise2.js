var all = [];


function getClass(klasse) {
var allClass = document.getElementsByClassName(klasse);
for (i = 0; i < allClass.length; i++) {
  all.push(allClass[i]);
}
}
getClass('kitty');
