import { Sorter } from "./Sorter";
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
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
