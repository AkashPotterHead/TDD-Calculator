// src/services/MathService.ts

export class MathService {
    add(numbers: string): number {
      return numbers
        .split(",")                      // Split the string by commas
        .map(num => parseFloat(num))      // Convert each part to a number
        .reduce((sum, num) => sum + num, 0); // Sum up all the numbers
    }
  }
  