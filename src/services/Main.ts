// src/main.ts

import { MathService } from "./MathService";
import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Helper function to wrap rl.question in a promise
  const askQuestion = (query: string): Promise<string> => {
    return new Promise(resolve => rl.question(query, resolve));
  };

  function exit() {
    console.log('Exiting...');
    rl.close();
    process.exit();
  }
  
  async function readAndCalculate() {
    const numbers = await askQuestion('Enter the numbers as a comma separated string. Hit enter to exit. \n');
    if(!numbers) exit ();
    const operation = await askQuestion('Enter the operation to be performed(+, - ,*, /). Hit enter to exit.\n');
    if(!operation) exit();
    
    const result = new MathService().init(numbers,operation);
     console.log('\nResult = ',result,'\n')
    readAndCalculate();
  };

  ( async function startCycle() {
    await readAndCalculate();
  })();

