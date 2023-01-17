/**
 * This function sorts an array of numbers using the bubble sort algorithm.
 * 
 * The function compares each element of the array with its adjacent element
 * and swaps them if they are in the wrong order. This process is repeated
 * until the entire array is sorted in ascending order.
 *
 * @param {Array} arr An array of numbers to be sorted
 * @returns {Array} The sorted array
 */

function bubbleSort(arr) {
  // This outer loop iterates through the array
  for (let i = 0; i < arr.length; i++) {
    // This inner loop iterates through the subarray of unsorted elements
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Return the sorted array
  return arr;
}

const array = [43, 32, 1, 5, 9, 22];
console.log(bubbleSort(array));
