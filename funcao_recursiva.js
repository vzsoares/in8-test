function recursive(n = 1) {
  if (n % 3 === 0 && n % 2 === 0 && n % 10 === 0) return n;
  return recurse(n + 1);
}
console.log(recurse());
