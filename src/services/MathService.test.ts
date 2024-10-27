// src/services/MathService.test.ts

import { MathService } from "./MathService";

describe("MathService", () => {
  let mathService: MathService;

  beforeEach(() => {
    mathService = new MathService();
  });

  test("should return the correct sum of a comma-separated string of numbers", () => {
    const input = "3,5,7";
    const result = mathService.add(input);
    expect(result).toBe(15);
  });
});
