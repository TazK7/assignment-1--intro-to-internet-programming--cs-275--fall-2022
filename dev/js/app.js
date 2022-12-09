/**
 * Basmalah Asad
 * Assignment 1
 * 10/06/2022
 */

 let repeat = false;
 let output = document.getElementById(`output`);
 let content = ``;
 let counter = 1;
 let reversed = ``;
 let reversedOutput = document.getElementById(`reversed-output`);
 
 // Takes input from user
 let enteredInteger = prompt(`What size is your square matrix?`);
 let afterParse = parseInt(parseFloat(enteredInteger));
 
 let conditionChecking = () => {
     if (isNaN(afterParse) || !Number.isInteger(afterParse)){
         alert(`The input is invalid, please enter a different input:`);
         repeat = true;
     }
     else if (afterParse < 1 ){
         alert(`The input is less than 1, please enter a different input:`);
         repeat = true;
     }
     else{
         repeat=false;
     }
 };
 
 // Looping the prompt until a valid input is entered
 while(repeat){
     enteredInteger = prompt(`What size is your square matrix?`);
     afterParse = parseInt(parseFloat(enteredInteger));
     conditionChecking();
 }
 
 let arr = new Array(afterParse);
 let starter = 1; 
 
 // Initialize matrix to fill it with numbers
 for(let i = 0; i < arr.length; i++){
     arr[i] = new Array(afterParse);
 }
 
 for (let i = 0; i < arr.length; i++){
     for(let j = 0; j < arr.length; j++){
         arr[i][j]=starter++;
     }
 }
 
 // Prints the original matrix as table
 content = `<table>`;
 for(let i = 0; i < arr.length; i++) {
     content += `<tr>`;
 
     for(let j = 0; j < arr.length; j++) {
         if(i+j === arr.length-1){
             content += `<td bgcolor= "grey" style="font-weight:bold">${counter++}</td>`;
         }
         else{
             content += `<td>${counter++}</td>`;
         }
     }
 
     content += `</tr>`;
 }
 content += `</table>`;
 
 output.innerHTML = content;
 
 let arrayLength = arr.length;
 
 // Function to check if the matrix is even or odd
 let evenChecker = (value) =>{
     if(value%2===0){
         return true;
     }
     else{
         return false;
     }
 };
 
 // // Function to flip the array
 const mirrorArray = (matrix) => {
     let rowIndex, colIndex, temp;
 
     if(evenChecker(afterParse) === true){
         for (rowIndex = 0; rowIndex < ~~(arrayLength / 2); rowIndex++) {
             for (colIndex = 0; colIndex < arrayLength; colIndex++) {
                 if(rowIndex+colIndex !== arrayLength-1){ 
                     temp = matrix[rowIndex][colIndex];
                     matrix[rowIndex][colIndex] = matrix[arrayLength - rowIndex - 1][arrayLength - colIndex - 1];
                     matrix[arrayLength - rowIndex - 1][arrayLength - colIndex - 1] = temp;
             }
         }
     }
     if(evenChecker(afterParse) === false){
         for (rowIndex = 0; rowIndex <= ~~(arrayLength/2); rowIndex++) {
             for (colIndex = 0; colIndex < arrayLength; colIndex++) {
                 if(rowIndex === ~~(arrayLength/2)){
                     temp = matrix[rowIndex][colIndex];
                     matrix[rowIndex][colIndex] = matrix[rowIndex][arrayLength - colIndex - 1];
                     matrix[rowIndex][arrayLength - colIndex - 1] = temp;
                 }
                 rowIndex++;
                 if(rowIndex+colIndex !== arrayLength-1){ 
                     temp = matrix[rowIndex][colIndex];
                     matrix[rowIndex][colIndex] = matrix[arrayLength - rowIndex - 1][arrayLength - colIndex - 1];
                     matrix[arrayLength - rowIndex - 1][arrayLength - colIndex - 1] = temp;
                 }
             }
         }
     }
 };
 
 mirrorArray(arr);
 
 // Prints the reversed matrix as table
 reversed = `<table>`;
 
 for(let i = 0; i < arrayLength; i++) {
     reversed += `<tr>`;
 
     for(let j = 0; j < arrayLength; j++) {
         if(i+j === arrayLength-1 ){ 
             reversed += `<td bgcolor= "grey" style="font-weight:bold">${arr[i][j]}</td>`;
         } 
         else{
             reversed += `<td>${arr[i][j]}</td>`;
         }
     }
 
     reversed += `</tr>`;
 }
 
 reversed += `</table>`;
 
 reversedOutput.innerHTML = reversed;