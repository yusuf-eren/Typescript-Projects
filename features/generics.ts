class ArrayOfAnything<TYPE> {
  constructor(public collection: TYPE[]) {}

  get(index: number): TYPE {
    return this.collection[index];
  }
}

const arrInt = new ArrayOfAnything<number>([1, 2, 4, 5]);
const arrStr = new ArrayOfAnything<string>(["a", "5", "x", "ya"]);

// example of generics with function
function printAnything<TYPE>(arr: TYPE[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// printAnything<number>([1, 5, 6, 7]);
// printAnything<string>(["A", "C", "D", "X"]);

// Generic Constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
    print(): void
}

// inherits 'Printable' interface
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([new House(), new Car()])