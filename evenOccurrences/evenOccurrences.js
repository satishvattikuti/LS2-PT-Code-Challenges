/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 *    * console.log(onlyEven); //  4
 *    */

const evenOccurence = (arr) => {
  // Your code here.
  let count = 1;
  for(let i = 0; i < arr.length; i++){
    first = arr[i];
    for(let j = i + 1 ; j < arr.length; j++) {
       if(arr[i] === arr[j]) {
       count += 1;
       }
    }
    if(count % 2 === 0) {
      return arr[i];
    }
  }
  return null;
};

const onlyEven = evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 1, 6, 6, 6]);

console.log(onlyEven);
