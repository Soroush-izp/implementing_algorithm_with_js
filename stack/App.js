import { LinkedList } from "./../linkedList/linkeList.js";  // import linkedList

class Stack {
   constructor() {
      this.list = new LinkedList();
   }

   push( value) {
      this.list.prepend( value );
   }

   pop() {
      return this.list.deleteHead()
   }

   toArray() {
      return this.list.toArray()
   }
}

const stack = new Stack()

stack.push('Product 1')
stack.push('Product 2')
stack.push('Product 3')

console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());