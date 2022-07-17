'use srtict'
// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] < min) {
      min = arr [i];
      }
    if (arr[i] > min){
      max = arr [i];
    }
    sum += arr [i];
  }

  avg = +(sum / arr.lenght).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
