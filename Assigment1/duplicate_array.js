function remDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) 
    {
        for(let j=i+1; j < arr.length; j++)
            {
                if(arr[i] === arr[j])
                {
                    arr.splice(j, 1);
                }
            }

    }
   
   return x;
};
var arr = [1,2,3,3,6,6,4,2,1,4];
var x = remDuplicates(arr);
console.log("New length:", x); 
console.log("Modified array:", arr.slice(0, x)); 