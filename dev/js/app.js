window.onload = () => {
    // Input prompt to the user
    let input;
    let content = ``;
    let counter = 1;

    do {
        //user input enters value and returns an array matrix
        input = prompt(`Please enter Matrix size that is greater than 1`);
    } while (input <= 1 || input === null || isNaN(input));

    //User input value to array value
    input = parseInt(input);
    let array = new Array (input);

    content = `<table>`;

    //base array that is populated with values based on the user input
    let  base_Matrix = document.getElementById(`base_Matrix`);
    //iterating through rows and coloumn base on the array size
    for(let i = 0; i < array.length; i++) {
        content += `<tr>`; //displays content in rows of array

        for(let j = 0; j < array.length; j++) {
            content += `<td>${counter++}</td>`;
        }
        content += `</tr>`; //close table rows
    }
    content += `</table>`; //close table for baseArray

    base_Matrix.innerHTML = content; //displaying base array

    //flipped matrix that is return based on the size of the base array
    let reverse_Matrix = document.getElementById(`reverse_Matrix`);
    content = `<table>`;
    //looping through the array flipped
    for(let i = 0; i < array.length; i++) {
        content += `<tr>`;

        //placing a placeholder for each time the matrix is flipped
        for(let j = 0; j < array.length; j++) {
            let place_holder= (i * array.length) + j + 1;

            if(!((array.length + ((array.length - 1) * i) === place_holder ))) {
                place_holder= (array.length * array.length) - place_holder;
                place_holder++;
            }
            content += `<td>${place_holder}</td>`;
        }
        content += `</tr>`;
    }
    content += `</table>`;
    reverse_Matrix.innerHTML = content; //displaying flipped array
};
