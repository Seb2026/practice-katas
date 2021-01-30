//Given an array with exactly 5 strings "a", "b" or "c" 
//(chars in Java, characters in Fortran), 
//check if the array contains three and two of the same values.

function checkThreeAndTwo(array) {

    let firstSimilar = 0;
    let secondSimilar = 0;
    let thirdSimilar = 0;
    
    for (let i=0; i<array.length; i++){
      if (array[i] === `a`){
        firstSimilar ++;
      }else if(array[i] === `b`){
        secondSimilar ++;
      }else if(array[i] === `c`){
        thirdSimilar ++;
      }
    }
    if(firstSimilar === 3 || secondSimilar === 3 || thirdSimilar === 3 && firstSimilar === 2 || secondSimilar === 2 || thirdSimilar ===3 ){
      return true;
    }else{
      return false;
    }
  }