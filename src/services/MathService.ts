// src/services/MathService.ts

export class MathService {

  init(numbers: string, operation: string): number {
    switch (operation) {
      case '+': return this.add(numbers);
      case '-': return this.subtract(numbers);
      case '*': return this.multiply(numbers);
      default: return 0;
    }
  }

    add(numbers: string): number {
      return numbers
        .split(",")                      // Split the string by commas
        .map(num => parseFloat(num))      // Convert each part to a number
        .reduce((sum, num) => sum + num, 0); // Sum up all the numbers
    }

    subtract(numbers: string): number {
  
      console.log("Still constructing");
      return 0;
      
    }

    multiply(numbers: string): number {
      return numbers
        .split(",")                      // Split the string by commas
        .map(num => parseFloat(num))      // Convert each part to a number
        .reduce((sum, num) => sum * num, 1); // Sum up all the numbers
    }
    
    divide(numbers: string): number {
      console.log("Still constructing");
      return 0;
    }
  }
  