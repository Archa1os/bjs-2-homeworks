function compareArrays(arr1, arr2) {

  let result = arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(el => el >= 0).filter(el => el % 3 == 0 ).map( el => el * 10)

  return resultArr; // array
}
