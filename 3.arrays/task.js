function compareArrays(arr1, arr2) {
  let result;

  every = (el,ind,arr) => el == arr2[ind] && arr.lenght == arr2.lenght;
  result = arr1.every(every)
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(el => el >= 0).filter(el => el % 3 == 0 ).map( el => el * 10)

  return resultArr; // array
}
