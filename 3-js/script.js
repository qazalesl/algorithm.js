let multiples = [];
let sum = 0;

for (let i = 9; i <= 900; i += 9){
    multiples.push(i);
    sum += i;
    console.log(i);
}
  console.log("sum:" + sum);