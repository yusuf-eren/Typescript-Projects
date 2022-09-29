export class NumbersCollection {
  constructor(public data: number[]) {}

  // we can call without parentheses
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, RightIndex: number): boolean {
    return this.data[leftIndex] > this.data[RightIndex];
  }

  swap(leftIndex: number, RightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[RightIndex];
    this.data[RightIndex] = leftHand;
  }
}
