"use strict";
//Are Similar
// const areSimilar = (firstNumberArray: number[], secondNumeberArray: number[]): boolean =>  {
Object.defineProperty(exports, "__esModule", { value: true });
//   let leftPointer: number = 0;
//   let rightPointer: number = 1;
//   let swapCount: number = 0;
//   while(firstNumberArray[rightPointer]){
//     if(firstNumberArray[leftPointer] !== secondNumeberArray[leftPointer] && (firstNumberArray[leftPointer] === secondNumeberArray[rightPointer] && secondNumeberArray[leftPointer] === firstNumberArray[rightPointer])) {
//       let temp: number = firstNumberArray[1];
//       firstNumberArray[1] = firstNumberArray[0];
//       firstNumberArray[0] = temp;
//       swapCount++;
//     }
//     else if(firstNumberArray[leftPointer] !== secondNumeberArray[leftPointer] || firstNumberArray[rightPointer] !== secondNumeberArray[rightPointer]){
//       return false;
//     } 
//     if(swapCount > 1) return false
//     leftPointer++;
//     rightPointer++;
//   }
//   return true;
// } 
// console.log(areSimilar([1,2,1,2], [2,2,1,1]))
//Sum Strings as Numbers
var sumStrings = function (firstNumber, secondNumber) { return String(BigInt(firstNumber) + BigInt(secondNumber)); };
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
