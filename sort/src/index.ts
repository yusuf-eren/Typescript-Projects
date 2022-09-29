import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const characterCollection = new CharactersCollection("EGBaaSXZxyAa");

const numberSorter = new Sorter(numbersCollection);
const characterSorter = new Sorter(characterCollection);

numberSorter.sort();
characterSorter.sort();

console.log(numbersCollection.data);
console.log(characterCollection.data);
