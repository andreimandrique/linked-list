import { Node, LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.prepend("monkey"); // insert monkey at the beginning of node

console.log(list.size()); // 7
console.log(list.head()); //monkey
console.log(list.tail()); //turtle
console.log(list.at(3)); //parrot

list.pop(); // remove turtle

console.log(list.contains("dragon")); // I do not have dragon

console.log(list.find("hamster")); // Hamster is in index 4

list.insertAt("fish", 2); // insert fish in index

list.removeAt(4); // remove parrot
