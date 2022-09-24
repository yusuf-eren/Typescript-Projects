// defining parameter types and !!! type of the value to be returned
const add = (a: number, b: number): number => {
  return a - b;
};
// if we don't declare the return type
// Typescript can't help us about type declaration
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// ALL TYPES OF FUNCTIONS WITH DECLARATIONS