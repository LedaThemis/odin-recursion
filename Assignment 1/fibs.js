/**
 * Fibonnaci sequence generator using loops
 * @param {number} n number of fibonnaci sequence numbers to generate
 * @returns list of length `n` of the fibonnaci sequence
 */
const fibs = (n) => {
  const arr = [0, 1];

  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return [0, 1];
  }

  for (let i = 2; i < n; i++) {
    const fib1 = arr[arr.length - 1];
    const fib2 = arr[arr.length - 2];

    arr.push(fib1 + fib2);
  }

  return arr;
};

console.log('Testing fibs...');

console.log('fibs(1)', fibs(1));
console.log('fibs(2)', fibs(2));
console.log('fibs(3)', fibs(3));
console.log('fibs(5)', fibs(5));
console.log('fibs(11)', fibs(11));
