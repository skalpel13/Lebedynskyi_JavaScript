const readConsole = require("readline"); // readline is a module to work with input from console

// is a method of the readline object that creates an interface to interact with input (process.stdin)
// and output (process.stdout). This interface allows you to read user input and output text to the console.
const rC = readConsole.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function forNumber(inputNumber) {
  let num = Number(inputNumber);

  if (num > 7) {
    console.log("Hello");
  } else {
    console.log("Number or is less than or equal to 7.");
  }
}

function forStr(inputName) {
  if (inputName === "John") {
    console.log("Hello, John");
  } else {
    console.log("There is no such name");
  }
}

function forArray(inputArray) {
  const multiples3Array = inputArray.filter((number) => {
    return number % 3 === 0;
  });

  return console.log(
    "array elements that are multiples of 3:",
    multiples3Array
  );
}

rC.question("Enter : ", function (inputValue) {
  if (inputValue.trim().startsWith("[")) {
    try {
      let array = JSON.parse(inputValue);
      if (Array.isArray(array)) {
        forArray(array);
      } else {
        forStr(inputValue);
      }
    } catch (error) {
      forStr(inputValue);
    }
  } else if (!isNaN(inputValue)) {
    forNumber(inputValue);
  } else {
    forStr(inputValue);
  }
  rC.close(); //to free up resources and allow the programme to terminate correctly.
});
