class Vehicle {
  constructor(public color: string) {}
  // Protected
  // This method can be called
  // By other methods in this class
  // OR by other methods in child classes
  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
//console.log(vehicle.color);

// This class inherits all properties
// of 'Vehicle' class
class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    // that inherits color
    // because we are not declaring again
    // we just gave it in params and used
    // by super method
    super(color);
  }
  // Private
  // This method can only be called
  // By other methods in this class
  private drive(): void {
    console.log("vroom vroom");
    this.honk();
    console.log(this.color);
  }
  // Public
  // This method can be called any where, any time
  public startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, "blue");
car.startDrivingProcess(); // vroom vroom\n beep\n blue
console.log(car); // Car { color: 'blue', wheels: 4 }
