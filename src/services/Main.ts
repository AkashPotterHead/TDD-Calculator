// src/main.ts

import { MathService } from "./MathService";
import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Helper function to wrap rl.question in a promise
  export function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
  };

  export function exit() {
    console.log('Exiting...');
    rl.close();
    process.exit();
  }
  
  export async function readAndCalculate() {
    const numbers = await askQuestion('Enter the numbers as a comma separated string. Hit enter to exit. \n');
    if(!numbers) exit ();
    const operation = await askQuestion('Enter the operation to be performed(+, - ,*, /). Hit enter to exit.\n');
    if(!operation) exit();
    
    const result = new MathService(numbers).init(operation);
     console.log('\nResult = ',result,'\n')
    readAndCalculate();
  };

  ( async function startCycle() {
    await readAndCalculate();
  })();

