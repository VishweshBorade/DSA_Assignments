function transMatrix(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const transpose = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      transpose[j][i] = mat[i][j];
    }
  }

  return transpose;
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const transposed = transMatrix(matrix);
console.log(transposed);
