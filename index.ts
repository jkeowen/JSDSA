//Are Similar

const areSimilar = (firstNumberArray: number[], secondNumeberArray: number[]): boolean =>  {
  
  let leftPointer: number = 0;
  let rightPointer: number = 1;
  let swapCount: number = 0;
  while(firstNumberArray[rightPointer]){
    if(firstNumberArray[leftPointer] !== secondNumeberArray[leftPointer] && (firstNumberArray[leftPointer] === secondNumeberArray[rightPointer] && secondNumeberArray[leftPointer] === firstNumberArray[rightPointer])) {
      let temp: number = firstNumberArray[1];
      firstNumberArray[1] = firstNumberArray[0];
      firstNumberArray[0] = temp;
      swapCount++;
    }
    else if(firstNumberArray[leftPointer] !== secondNumeberArray[leftPointer] || firstNumberArray[rightPointer] !== secondNumeberArray[rightPointer]){
      return false;
    } 
    if(swapCount > 1) return false
    leftPointer++;
    rightPointer++;
  }
  
  return true;
} 

console.log(areSimilar([1,2,1,2], [2,2,1,1]))
export{}
