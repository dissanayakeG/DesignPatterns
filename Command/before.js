//encapsuling bunch of executing command with undo functionalty
//it will make easy to reuse

class Calculator {
    constructor() {
      this.value = 0
    }
  
    add(valueToAdd) {
      this.value = this.value + valueToAdd
    }
  
    subtract(valueToSubtract) {
      this.value = this.value - valueToSubtract
    }
  
    multiply(valueToMultiply) {
      this.value = this.value * valueToMultiply
    }
  
    divide(valueToDivide) {
      this.value = this.value / valueToDivide
    }
  }