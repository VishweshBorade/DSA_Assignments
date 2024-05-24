function EndZero(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      nonZeroIndex++;
    }
  }

  return arr;
}
const array = [0, 1, 0, 3, 12, 0, 5];
console.log(EndZero(array));
