"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    // we can call without parentheses
    get length() {
        return this.data.length;
    }
    compare(leftIndex, RightIndex) {
        return this.data[leftIndex] > this.data[RightIndex];
    }
    swap(leftIndex, RightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[RightIndex];
        this.data[RightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
