#! /usr/bin/env node
import inquirer from 'inquirer';

type answertype={
    val1: number,
    val2: number,
    oper: string,

}

inquirer
  .prompt([
    {
        type:"number",
        name:"val1",
        message:"Enter 1st Number",
    },
    {
        type:"number",
        name:"val2",
        message:"Enter 2nd Number",
    },
    {
        type:"list",
        name:"oper",
        message:"Select Desired Operation from given choices",
        choices: ["+","-","*","/"],
    },
  ])
  .then((answers:answertype) => {
    
    if (answers.oper==="+"){
        const result = answers.val1 + answers.val2;
        console.log ("Answer", result);
    }
    
    else if (answers.oper==="-"){
        const result = answers.val1 - answers.val2;
        console.log ("Answer", result);
    }
    
    else if (answers.oper==="*"){
        const result = answers.val1 * answers.val2;
        console.log ("Answer", result);
    }
    
    else if (answers.oper==="/"){
        const result = answers.val1 / answers.val2;
        console.log ("Answer", result);
    }

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });