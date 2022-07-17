function numberToPower(number, power) {
  let result = 1;
  for (let count = 0; count < power; count++) {
    result *= number;
  }
  return result;
}
