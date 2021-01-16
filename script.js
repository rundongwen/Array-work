var input = document.getElementById("input");
var output = document.getElementById("output");


function fireButton(arr) {
  arr = [];
  
  // Get input value
  userInput = input.value;
  console.log(userInput);

  // Get the length of a array
  var length = userInput.length;
  console.log(length);

  // Add to the array
  arr = userInput.split('');
  arr.push('That is what you put in the box');
  console.log(arr);


  // Output to HTML
  output.innerHTML = arr + (' ') + length;
}