class Rectangle {
	constructor(height, width) {
		this.height = height
		this.width = width

		this.element = document.createElement('div')
		this.element.addEventListener("click", this.increaseSize)
	}

	increaseSize = () => {
		this.height = this.height * 2
		this.width = this.width * 2
		this.render()
	}

	area() {
		setTimeout(this.myFunction, 2000)
		return this.height * this.width
	}

	render() {
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.marginBottom = "10px";
    this.element.style.borderStyle = "solid";
    return this.element;
  }

	static largestOf(rectangles) {
		let largest = rectangles[0]

		rectangles.forEach( rectangle => {
				if(largest.area() < rectangle.area()){
						largest = rectangle
				}
		})
		return largest
	}
}

class Square extends Rectangle {
	constructor(length) {
		super()
		this.height = length
		this.width = length
	}
}

const r1 = new Rectangle(5, 4)
const r2 = new Rectangle(5, 40)

const s1 = new Square(5)
console.log(r1.area())

console.log(Rectangle.largestOf([r1, r2]))

