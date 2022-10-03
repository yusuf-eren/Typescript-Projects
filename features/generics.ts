class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<TYPE> {
  constructor(public collection: TYPE[]) {}

  get(index: number): TYPE {
    return this.collection[index];
  }
}

const arrInt = new ArrayOfAnything<number>([1,2,4,5]);
const arrStr = new ArrayOfAnything<string>(["a","5","x","ya"]);

console.log(arrInt.get(2))
console.log(arrStr.get(2))