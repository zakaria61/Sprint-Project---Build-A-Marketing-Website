// Add your Javascript work here

// Task 1: Create a basic Calculator

/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/
const firstNUM=parseInt(prompt("Enter fist Number"))
const operator=prompt("Enter operator")
const secondNUM=parseInt(prompt("Enter second Number"))
        if(operator==='+'){
         console.log(firstNUM+secondNUM)}
         else if(operator==='-'){
                console.log(firstNUM-secondNUM)}

                else if(operator==='*'){
                    console.log(firstNUM*secondNUM)}
                    else if(operator==='/'){
                        console.log(firstNUM/secondNUM)}
