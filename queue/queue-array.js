// Queue FIFO
class Queue {
   constructor() {
      this.items = []
   }

   enqueue( value) {
      this.items.unshift( value) // for add value to front of queue we use unshift()
   }

   dequeue() {
      return this.items.pop()
   }

   toArray() {
      return this.items
   }
}

const queue = new Queue

queue.enqueue( 5)
queue.enqueue( 5)
queue.enqueue( 9)

console.log(queue.toArray());
console.log(queue.dequeue());
console.log(queue.toArray());

