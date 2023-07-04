class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      if (typeof value === 'string') {
          this.items.push(value);
        } else {
          console.log('Invalid value. Only string values are allowed.');
        }
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is currently empty.";
      }
      return this.items.pop();
    }
  
    check() {
      return this.items.slice();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push("Milk");
  stack.push("Eggs");
  console.log(stack.check());  // Output: ["Milk", "Eggs"]
  stack.pop();
  console.log(stack.check());  // Output: ["Milk"]
  stack.pop();
  console.log(stack.check());  // Output: []
  console.log(stack.pop());    // Output: "Stack is currently empty."
  