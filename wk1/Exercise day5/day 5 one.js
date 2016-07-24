function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function(){
      return (this.height * this.width)
    }
  }

function Square(leng) {
    width: leng;
    height: leng;
    Rectangle.getArea.apply(this, arguments);
}

  var rect = new Rectangle(4, 5);
  console.log(rect.getArea());

  var sq = new Square(4);
  console.log(square.getArea());
