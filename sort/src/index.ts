import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const characterCollection = new CharactersCollection("EGBaaSXZxyAa");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-25);
linkedList.add(12);
linkedList.add(1243);

const numberSorter = new Sorter(numbersCollection);
const characterSorter = new Sorter(characterCollection);
const linkedListSorter = new Sorter(linkedList);

numberSorter.sort();
characterSorter.sort();
linkedListSorter.sort();

console.log(numbersCollection.data);
console.log(characterCollection.data);
console.log(linkedList.head);
