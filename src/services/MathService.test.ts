// src/services/MathService.test.ts

import { MathService } from "./MathService";

describe("MathService Add", () => {
  let mathService: MathService;

  beforeEach(() => {
    mathService = new MathService("3,5,7");
  });

  test("should return the correct sum of a comma-separated string of numbers", () => {
    const result = mathService.add();
    expect(result).toBe(15);
  });

  test("should throw an error when negative numbers are included", () => {
    mathService = new MathService("3,-5,7");
    expect(() => mathService.add()).toThrow("Negatives not allowed: -5");
  });
});

describe("MathService Operations", () => {
  let mathService: MathService;

  beforeEach(() => {
    mathService = new MathService("3,5,2");
  });

  test("should return the correct product for multiply operation", () => {
    const result = mathService.multiply();
    expect(result).toBe(30);
  });

  test("should handle division correctly, throwing error for division by zero", () => {
    mathService = new MathService("6,3,0");
    expect(() => mathService.divide()).toThrow("Division by zero is not allowed");
  });

  test("should divide correctly when no zero is included", () => {
    mathService = new MathService("12,2,3");
    const result = mathService.divide();
    expect(result).toBe(2);
  });
});

describe("MathService identifyDelimiter", () => {
  let mathService: MathService;

  test("should set the correct delimiter for a comma-separated string", () => {
    mathService = new MathService("3,5,7");
    mathService.identifyDelimiter();
    expect(mathService.delimiter).toBe(",");
  });

  test("should set the correct delimiter for a semicolon-separated string", () => {
    mathService = new MathService("//;\n1;-2;3");
    mathService.identifyDelimiter();
    expect(mathService.delimiter).toBe(";");
  });

  test("should set the correct delimiter for a custom character-separated string", () => {
    mathService = new MathService("//d\n1d-2d3");
    mathService.identifyDelimiter();
    expect(mathService.delimiter).toBe("d");
  });
});

describe("MathService trimWhiteSpaces", () => {
  let mathService: MathService;

  beforeEach(() => {
    mathService = new MathService("3, 5,7");
  });

  test("should remove white spaces around numbers", () => {
    mathService.trimWhiteSpaces();
    expect(mathService.inputString).toBe("3,5,7");
  });
});

describe("MathService filterNonNumericalValues", () => {
  let mathService: MathService;

  beforeEach(() => {
    mathService = new MathService("3, a,7");
  });

  test("should remove non-numeric values from the input string", () => {
    mathService.filterNonNumericalValues();
    expect(mathService.inputString).toBe("3,7");
  });
});

describe("MathService init", () => {
  test("should correctly execute addition with init method", () => {
    const mathService = new MathService("3,5,7");
    const result = mathService.init("+");
    expect(result).toBe(15);
  });

  test("should correctly execute multiplication with init method", () => {
    const mathService = new MathService("3,5,2");
    const result = mathService.init("*");
    expect(result).toBe(30);
  });

  test("should return 0 for unsupported operations", () => {
    const mathService = new MathService("3,5,2");
    const result = mathService.init("/");
    expect(result).toBe(0.3);
  });
});
