"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d))/(2*a);
    let x2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(x1, x2);
  } else if (d == 0) {
      let x1 = -b/(2*a);
      arr.push(x1);
  }      else if (d < 0) {
  }
   console.log(arr);
  return arr;
}

solveEquation(1,2,4);

function calculateTotalMortgage(percent, contribution, amount, date) {
  let p = parseInt(percent) / 100 / 12;
    let c = parseInt(contribution);
    let a = parseInt(amount);
  	if (isNaN(p) || p < 0) {
   		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
   	} else if (isNaN(c) || c < 0) {
   		return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
   	} else if (isNaN(a) || a < 0) {
   		return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
   	} else {

  		let today = new Date();
  		if (today.getFullYear() > date.getFullYear()) {
			return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
		} else {
			let s = a - c;
  			let n = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear()));
  			let pay = s*(p+(p/(((1+p)**n)-1)));
  			let totalAmount = (pay * n).toFixed(2);
  			console.log(`Общая сумма по ипотеке составляет ${totalAmount}`);
 			return +totalAmount;
    }
  }
}
