import { LinkedList } from "./../linkedList/linkeList.js";

class Queue {
   constructor() {
      this.list = new LinkedList();
   }

   enqueue( value) {
      this.list.append( value );
   }

   dequeue() {
      return this.list.deleteHead()
   }

   toArray() {
      return this.list.toArray();
   }
}

const queue = new Queue

queue.enqueue( 5)
queue.enqueue( 5)
queue.enqueue( 9)

console.log(queue.toArray());
console.log(queue.dequeue());
console.log(queue.toArray());