export class MathService {
  public delimiter: string = ",";
  public inputString: string = "";

  constructor(inputString: string) {
    this.inputString = inputString;
  }

  init(operation: string): number {
    this.identifyDelimiter();
    this.filterNonNumericalValues();

    switch (operation) {
      case '+': return this.add();
      case '-': return this.subtract();
      case '*': return this.multiply();
      case '/': return this.divide();
      default: return 0;
    }
  }

  add(): number {
    const numbers = this.parseNumbers();
    this.checkForNegatives(numbers);
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  subtract(): number {
    const numbers = this.parseNumbers();
    this.checkForNegatives(numbers);
    return numbers.reduce((sum, num) => sum - num, 0);
  }

  multiply(): number {
    const numbers = this.parseNumbers();
    this.checkForNegatives(numbers);
    return numbers.reduce((product, num) => product * num, 1);
  }

  divide(): number {
    const numbers = this.parseNumbers();
    this.checkForNegatives(numbers);
    return numbers.reduce((quotient, num) => {
      if (num === 0) throw new Error("Division by zero is not allowed");
      return quotient / num;
    });
  }

  identifyDelimiter() {
    if (this.inputString.startsWith("//")) {
      const delimiterEnd = this.inputString.indexOf("\n");
      this.delimiter = this.inputString.substring(2, delimiterEnd);
      this.inputString = this.inputString.substring(delimiterEnd + 1);
    }
    this.trimWhiteSpaces();
  }

  trimWhiteSpaces() {
    this.inputString = this.inputString
      .split(this.delimiter)
      .map((ele: string) => ele.trim())
      .join(this.delimiter);
  }

  filterNonNumericalValues() {
    this.inputString = this.inputString
      .split(this.delimiter)
      .filter(num => !isNaN(parseFloat(num)))
      .join(this.delimiter);
  }

  parseNumbers(): number[] {
    return this.inputString
      .split(this.delimiter)
      .map(num => parseFloat(num));
  }

  checkForNegatives(numbers: number[]) {
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  }
}
