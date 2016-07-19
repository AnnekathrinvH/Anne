var oldObject = {
  Berlin: 'Germany',
  Paris: 'France',
  'New York': 'USA'
};
var newObject = new Object();
for (var key in oldObject) {
  var newKey = oldObject[key];
  newObject[newKey] = key;
}

console.log(newObject);
