// src/main.ts

import { MathService } from "./MathService";

const mathService = new MathService();
const result = mathService.add("3,5");

console.log(`The sum of 3 and 5 is: ${result}`);
