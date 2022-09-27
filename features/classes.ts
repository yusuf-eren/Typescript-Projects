class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}

// This class inherits all properties
// of 'Vehicle' class
class Car extends Vehicle {
  drive(): void {
    console.log("vroom vroom");
  }
}

const car = new Car();
car.drive();
car.honk();

// Public
// This method can be called any where, any time

// Private
// This method can only be called
// By other methods in this class

// Protected
// This method can be called
// By other methods in this class
// OR by other methods in child classes
