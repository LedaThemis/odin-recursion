const fib = (n) => (n === 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2));

/**
 * Fibonnaci sequence generator using recursion
 * @param {number} n number of fibonnaci sequence numbers to generate
 * @returns list of length `n` of the fibonnaci sequence
 */
const fibsRec = (n) => {
  const arr = [];

  const inner = (n, acc) => {
    if (acc === n) {
      return;
    } else {
      arr.push(fib(acc));

      inner(n, acc + 1);
    }
  };

  inner(n, 0);

  return arr;
};

console.log('Testing fibsRec...');

console.log('fibsRec(3)', fibsRec(1));
console.log('fibsRec(3)', fibsRec(2));
console.log('fibsRec(3)', fibsRec(3));
console.log('fibsRec(3)', fibsRec(5));
console.log('fibsRec(3)', fibsRec(11));
