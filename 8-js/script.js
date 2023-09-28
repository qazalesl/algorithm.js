function base3toBase10(num) {
  let base10 = 0;

  for (let i = 0; i < num.length; i++){
    let digit = num[num.length - 1 - i];
    base10 += digit * Math.pow(3, i);
  }
return base10;
}

let num = "120";
let base10 = base3toBase10(num);
console.log(base10);