function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divide by zero is not allowed");
  }

  return a / b;
}

module.exports = {
  add,
  substract,
  divide,
};

//. es6 syntax 

// export function add(a, b) {
//   return a + b;
// }

// export function substract(a, b) {
//   return a - b;
// }

// export function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Divide by zero is not allowed");
//   }

//   return a / b;
// }