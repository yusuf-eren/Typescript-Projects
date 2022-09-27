class Vehicle {
  // Protected
  // This method can be called
  // By other methods in this class
  // OR by other methods in child classes
  protected honk(): void {
    console.log("beep");
  }
}

// This class inherits all properties
// of 'Vehicle' class
class Car extends Vehicle {
  // Private
  // This method can only be called
  // By other methods in this class
  private drive(): void {
    console.log("vroom vroom");
    this.honk();
  }
  // Public
  // This method can be called any where, any time
  public startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();
car.startDrivingProcess();
