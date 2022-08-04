function sum(result = 0, n = 1000) {
  if (n === 0) {
    return result;
  }
  if (n % 3 === 0 || n % 5 === 0) {
    return sum(result + n, n - 1);
  }
  return sum(result, n - 1);
}

console.log(sum());
