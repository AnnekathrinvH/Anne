var item = 9;

if(item === undefined){
  console.log("undefined!");
}
else if (item === null) {
  console.log("null!");
}
else if (isNaN(item)) {
  console.log("not a number!");
}
else if (typeof (item) === typeof 9) {
  console.log("number!");
}
else if (typeof (item) === typeof 'string') {
  console.log("string!");
}
else if (typeof (item) === typeof true) {
  console.log("boolean!");
}
else if (typeof (item) === typeof function(){}) {
  console.log("function!");
}
else if (typeof (item) === typeof {}) {
  console.log("object!");
}
else if (typeof (item) === typeof Array.isArray([1,2,3])) {
  console.log("array!");
}
else {
  console.log("I have no idea!");
}
