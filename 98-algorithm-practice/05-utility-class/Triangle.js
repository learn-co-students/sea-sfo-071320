class Shape{
    isShape(){
        console.log("HEYOOO")
    }
}


class Triangle extends Shape {

    constructor(side1, side2, side3) {
        // @side1 = side1
        super()

        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
        if(!this.isValid()){
            throw new Error('This triangle sucks');
            // alex wants to do stuff
        }
    }

    tada() {
        console.log("tada")
    }

    determineType() {
        // returns a type if it's valid, or null if it's not.
        if (this.side1 === this.side2 && this.side3 === this.side2) {
            return "Equilateral"
        }
        else if (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) {
            return "Isosceles"
        }
        else {
            return "Scalene"
        }
    }

    isValid() {
        if (this.side1 + this.side2 < this.side3) {
            return false
        }
        else if (this.side2 + this.side3 < this.side1) {
            return false
        }
        else if (this.side3 + this.side1 < this.side2) {
            return false
        }
        else {
            return true
        }
    }

}

// In order to be a valid triangle, the sum of any two side lengths must be greater than the remaining side in every combination.

let tri = new Triangle(5, 5, 5)

// console.log(tri.isShape())

class Squres extends Triangle {
// without the constructor, super is also inherited
// *mind blowing emoji*
}

let sw = new Squres

console.log(sw.isShape())


