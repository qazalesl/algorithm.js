let N = 228;

let Month = N / 30;
let monthRound = Math.floor(Month);
let Day = N - (monthRound * 30) ; 

console.log(monthRound , '/' , Day);

