// ALL TYPES OF FUNCTIONS WITH DECLARATIONS

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

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};
// if a function doesn't return any value
// then you can specify void as return type
// --- Destructuring ---
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date, weather);
};

logWeather(forecast);
