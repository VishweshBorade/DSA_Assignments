function searchMatrix(mat, tar) {
  let row = 0;
  let col = mat[0].length - 1;

  while (row < mat.length && col >= 0) {
    if (mat[row][col] === tar) {
      return true;
    } else if (mat[row][col] < tar) {
      row++;
    } else {
      col--;
    }
  }

  return false;
}

const mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

const tar = 50;

const search = searchMatrix(mat, tar);
console.log(search);
