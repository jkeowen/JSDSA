"use strict";
//Are Similar
Object.defineProperty(exports, "__esModule", { value: true });
var areSimilar = function (firstNumberArray, secondNumeberArray) {
    var leftPointer = 0;
    var rightPointer = 1;
    var swapCount = 0;
    while (firstNumberArray[rightPointer]) {
        if (firstNumberArray[leftPointer] !== secondNumeberArray[leftPointer] && (firstNumberArray[leftPointer] === secondNumeberArray[rightPointer] && secondNumeberArray[leftPointer] === firstNumberArray[rightPointer])) {
            var temp = firstNumberArray[1];
            firstNumberArray[1] = firstNumberArray[0];
            firstNumberArray[0] = temp;
            swapCount++;
        }
        else if (firstNumberArray[leftPointer] !== secondNumeberArray[leftPointer] || firstNumberArray[rightPointer] !== secondNumeberArray[rightPointer]) {
            return false;
        }
        if (swapCount > 1)
            return false;
        leftPointer++;
        rightPointer++;
    }
    return true;
};
console.log(areSimilar([1, 2, 1, 2], [2, 2, 1, 1]));
