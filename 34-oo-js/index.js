class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    console.log(this);

    setTimeout(() => {
      console.log(this.height * this.width);
    }, 1000);

    // return this.height * this.width;
  }
}

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.logArea = this.logArea.bind(this);
  }

  logArea() {
    console.log(this);
  }

  area() {
    setTimeout(this.logArea, 1000);
  }
}

let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(20, 25);

rectangle1.area();
