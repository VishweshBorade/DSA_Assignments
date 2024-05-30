function orderMatrix(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const spiral = [];
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;

  while (left <= right && top <= bottom) {
    // Traverse the top row from left to right
    for (let i = left; i <= right; i++) {
      spiral.push(mat[top][i]);
    }
    top++;

    // Traverse the right column from top to bottom
    for (let i = top; i <= bottom; i++) {
      spiral.push(mat[i][right]);
    }
    right--;

    // Traverse the bottom row from right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiral.push(mat[bottom][i]);
      }
      bottom--;
    }

    // Traverse the left column from bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiral.push(mat[i][left]);
      }
      left++;
    }
  }

  return spiral;
}

const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const spiralTraversal = orderMatrix(matrix);
console.log(spiralTraversal);
