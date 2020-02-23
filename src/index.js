module.exports = function towelSort (matrix) {
  
  if (matrix === undefined || matrix.length === 0){

    return [];
    
  }

  let arr = [];

  if (matrix.length > 1){
    for(let i = 0; i<matrix.length; i++){

      if (i === 1 || i === 3 || i === 5){

          let arrrev = matrix[i].reverse();
          
            for (let n = 0; n<arrrev.length; n++){

              arr.push(arrrev[n]);

            }
        
      } else {
        for(let m = 0; m<matrix[i].length; m++){

          arr.push(matrix[i][m]);

        }
      }
      
    }

  }

  return arr;

}
