function MissNum(num, n) {
  let s1 = ((n + 1) * (n + 2)) / 2;
  for (let i = 0; i < n; i++) {
    s1 -= num[i];
  }
  return s1;
}
const array = [1, 2, 4, 5, 3, 7, 8];
const n = array.length;
console.log(" The missing number in array is ", MissNum(array, n));
