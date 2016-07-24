function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function(){
      return (this.height * this.width)
    }
  }

/*I wanted to call the getArea function from the Rectangle in the Square constructor but I can not figure out how to do it!*/
function Square(side) {
    this.width = side;
    this.height = side;

}

  var rect = new Rectangle(4, 5);
  console.log(rect.getArea());

  var square = new Square(4);
  console.log(square.getArea());
