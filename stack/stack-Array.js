//  Stack test in (browser in call stack)

// function printResult( result) {
//    console.log( result);
// }
// function add( num1, num2) {
//    printResult( num1 + num2 )
// }

// add( 2, 8)

// stack (just Push & Pop from top of stack) in Array
class Stack {
   constructor() {
      this.items = []
   }

   push( value) {
      this.items.push( value )   // hear we use built in js method push() for Push in stack
   }

   pop() {
      return this.items.pop()   // hear we use built in js method pop() for pop in stack
   }

   toArray() { // return output
      return this.items
   }
}

const stack = new Stack()

stack.push('Product 1')
stack.push('Product 2')
stack.push('Product 3')

console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());