var array = ["Osiel", "Jordan", "Jodi", "Narivi"];

function popQuiz(arr) {
    let input = array;
let output = [];

for(let i = 1; i <= input.length; i++) {

    // determine correct array index in respect to the current iteration
    let index = input.length - i;

    // push to new array
    output.push(input[index]);
}

// verify result
console.log(output);
}
