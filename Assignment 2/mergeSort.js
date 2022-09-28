/**
 * Function for merging to sorted lists using loops
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns sorted list of numbers
 */
const mergeLoop = (arr1, arr2) => {
  let merged = [];
  let i = 0; // arr1 pointer
  let j = 0; // arr2 pointer

  const minLength = Math.min(arr1.length, arr2.length);

  for (let k = 0; k < minLength; k++) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      console.log(`${arr1[i]} is less than ${arr2[j]}, pushing it`);
      i++; // Advance pointer
    } else {
      console.log(`${arr2[j]} is less than or equal ${arr1[i]}, pushing it`);
      merged.push(arr2[j]);
      j++; // Advance pointer
    }
  }

  // Concat remaining of arrays
  merged = merged.concat(arr1.slice(i));
  merged = merged.concat(arr2.slice(j));

  console.log(`merged [${arr1}] and [${arr2}] into [${merged}]`);

  return merged;
};

/**
 * Function for merging to sorted lists using recursion
 * @param {number[]} a
 * @param {number[]} b
 * @returns sorted list of numbers
 */
const mergeRecursive = (a, b) => {
  if (a.length === 0) {
    console.log(`Left array is of length 0 returning [${b}]`);
    return b;
  } else if (b.length === 0) {
    console.log(`Right array is of length 0 returning [${a}]`);
    return a;
  } else {
    if (a[0] < b[0]) {
      console.log(`${a[0]} is less than ${b[0]}, pushing it`);
      console.log(`Left array becomes [${a.slice(1)}]`);
      return [a[0]].concat(mergeRecursive(a.slice(1), b));
    } else {
      console.log(`${b[0]} is less than or equal ${a[0]}, pushing it`);
      console.log(`Right array becomes [${b.slice(1)}]`);
      return [b[0]].concat(mergeRecursive(a, b.slice(1)));
    }
  }
};

/**
 * Function for sorting lists using recursion
 * @param {number[]} numArr
 * @returns sorted list of numbers
 */
const mergeSort = (numArr) => {
  if (numArr.length === 1) {
    return numArr;
  } else {
    const arrLength = numArr.length;
    const middle = Math.floor(arrLength / 2);

    const leftArr = numArr.slice(0, middle);
    const rightArr = numArr.slice(middle);

    console.log(`[${numArr}] is not of length one, splitting into [${leftArr}] and [${rightArr}]`);

    return mergeRecursive(mergeSort(leftArr), mergeSort(rightArr));
  }
};

/**
 * One-liner? Merge Recursive
 */
const omr = (a, b) =>
  a.length === 0 || b.length === 0
    ? a.concat(b)
    : a[0] < b[0]
    ? [a[0]].concat(omr(a.slice(1), b))
    : [b[0]].concat(omr(a, b.slice(1)));

/**
 * One-liner? Merge Sort
 */
const oms = (a) => (a.length === 1 ? a : omr(oms(a.slice(0, a.length / 2)), oms(a.slice(a.length / 2))));

console.log('Testing MergeSort...');

const unsortedArray = [3, 34, 3, 21, 3, 1, 54, 5];

console.log('unsortedArray', unsortedArray);

console.log('mergeSort(unsortedArray)', mergeSort(unsortedArray));
console.log('oms(unsortedArray)', oms(unsortedArray));
