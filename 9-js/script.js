let equalInverseNumbers = [];

for (let num = 10; num <= 99; num++){
  let inverse = parseInt(num.toString().split('').reverse().join(''));
  if (num === inverse){
    equalInverseNumbers.push(num);
  }
}

console.log(equalInverseNumbers);