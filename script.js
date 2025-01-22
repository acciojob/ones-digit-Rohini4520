function onesDigit(n) {
  // Convert the input to a number
  const number = Number(n);

  // Validate the input
  if (!Number.isInteger(number) || number <= 0) {
    throw new Error('Input must be a positive integer.');
  }

  // Return the ones digit
  return number % 10;
}

// Do not change the code below
const n = prompt("Enter Number:");
try {
  alert(onesDigit(n));
} catch (error) {
  alert(error.message);
}
