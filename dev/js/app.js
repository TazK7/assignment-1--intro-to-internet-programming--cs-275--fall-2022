window.onload = () => {
    let select = document.getElementById(`matrix`); //Selecting div in HTML with ID of matrix
    let input = parseInt(window.prompt(`To create your matrix, insert a number greater than or equal to one.`));
    //While loop confirms the input can't be less than 1, can't be anything other then a Number and can't be empty.
    while (input < 1||isNaN(input)||input === null)
        input = parseInt(window.prompt(`Try again. (No numbers less then 1, and no words.)`));
    //Creating the New Array based off user input
    let myNewArray = new Array(input);

    //Using a for loop to increment through the Array based off input
    for(let x = 0; x < input; x++){
        myNewArray[x] = new Array(input);
        for(let y = 0; y < input; y++){
            myNewArray[x][y] = x * input + y + 1;
        }
    }

    //Using a for loop and if statements to flip the second matrix
    for(let x = 0; x < input; x++){
        for(let y = 0; y < input; y++){
            if ((input + (x * (input - 1))) !== (y + 1 + x * input)) {
                //If statement calculates the middle coordinate of the Matrix and flips it after calculating diagonal
                if((y + x * input) < parseInt(input*input / 2)){
                    let flipped = myNewArray[x][y]; //Storing the flipped matrix inside a new var called flipped
                    myNewArray[x][y] = myNewArray[input - x - 1][input - y - 1];
                    //Assigning the flipped matrix (besides diagonal) inside var flipped
                    myNewArray[input - x - 1][input - y - 1] = flipped;
                }
            }
        }
    }
    //Using a function to store the code, then declaring it at the end to print Matrices
    let printArray = (matrices) => {
        let content = ``; //Creating empty content (same as examples repo) to populate later
        for (let x = 0; x < input; x++) {
            content += `<tr>`; //Putting the table row element inside content
            for (let y = 0; y < input; y++) {
                if((input + ((input - 1) * x)) === (y + 1 + (x * input))) {
                    content += `<td id="diagonal">${(x * input) + 1 + y}</td>`;
                } //First if statement adds diagonal id(highlight) if it calcuates the td being on the diagonal
                else if(matrices === `first`){
                    content += `<td>${(x * input) + 1 + y}</td>`;
                } //Else if statments print both matrices (flipped & unflipped)
                else if(matrices === `second`){
                    content += `<td>${myNewArray[x][y]}</td>`;
                }
            }
            content += `</tr>`; //Closing table row element
        }
        /* Using innerHTML to display the content (populated in printArray function)
        inside the table all within the div Select*/
        select.innerHTML += `<table>${content}</table>`;
    };
    //Delcaring the printArray function to display the matrices
    printArray(`first`);
    printArray(`second`);
};
