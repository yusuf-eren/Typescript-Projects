// class Vehicle {
//   color: string = "red";

//   constructor(color: string) {
//     this.color = color;
//   }
//   // Protected
//   // This method can be called
//   // By other methods in this class
//   // OR by other methods in child classes
//   protected honk(): void {
//     console.log("beep");
//   }
// }

// const vehicle = new Vehicle("orange");

// // This class inherits all properties
// // of 'Vehicle' class
// class Car extends Vehicle {
//   // Private
//   // This method can only be called
//   // By other methods in this class
//   private drive(): void {
//     console.log("vroom vroom");
//     this.honk();
//     console.log(this.color);
//   }
//   // Public
//   // This method can be called any where, any time
//   public startDrivingProcess(): void {
//     this.drive();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();

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
console.log(vehicle.color);
// This class inherits all properties
// of 'Vehicle' class
//   class Car extends Vehicle {
//     // Private
//     // This method can only be called
//     // By other methods in this class
//     private drive(): void {
//       console.log("vroom vroom");
//       this.honk();
//       console.log(this.color);
//     }
//     // Public
//     // This method can be called any where, any time
//     public startDrivingProcess(): void {
//       this.drive();
//     }
//   }

//   const car = new Car();
//   car.startDrivingProcess();
