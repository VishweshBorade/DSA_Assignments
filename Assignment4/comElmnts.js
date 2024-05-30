function comElements(mat) {
  const numRows = mat.length;
  const numCols = mat[0].length;

  const elementCounts = new Map();
  for (let j = 0; j < numCols; j++) {
    const element = mat[0][j];
    elementCounts.set(element, (elementCounts.get(element) || 0) + 1);
  }

  const commonElements = [];

  for (let j = 0; j < numCols; j++) {
    const element = mat[0][j];
    let existsInAllRows = true;

    for (let i = 1; i < numRows; i++) {
      let found = false;
      for (let k = 0; k < numCols; k++) {
        if (mat[i][k] === element) {
          found = true;
          break;
        }
      }
      if (!found) {
        existsInAllRows = false;
        break;
      }
    }

    // If the element exists in all rows, add it to the common elements list
    if (existsInAllRows) {
      commonElements.push(element);
    }
  }

  return commonElements;
}

const mat = [
  [1, 2, 1, 4, 8],
  [3, 7, 8, 5, 1],
  [8, 7, 7, 3, 1],
  [8, 1, 2, 7, 9],
];

console.log(comElements(mat));
