function matrixRotate(mat) {
  const n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }

  return mat;
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrixRotate(mat));
