function boundaryElements(mat) {
    const n = mat.length;
    const m = mat[0].length;
  
    for (let i = 0; i < m; i++) {
      console.log(mat[0][i]);
    }
  
    for (let i = 0; i < m; i++) {
      console.log(mat[n - 1][i]);
    }
  
    for (let i = 0; i < n; i++) {
      console.log(mat[i][0]);
    }

    for (let i = 0; i < n; i++) {
      console.log(mat[i][m - 1]);
    }
  }
  
  const mat = [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3]
  ];
  
  boundaryElements(mat);
