function findMultiplesOfFour(n){
    let multiples = [];
    let sum = 0;

    for (let i = 1; i <= n; i++){
        if(i % 4 === 0){
            multiples.push(i);
            sum += i;
        }
    }
}

console.log("Multiples of 4:", multiples);
console.log("Number of multiples:", multiples.length);
console.log("Sum of multiples", sum);

findMultiplesOfFour(10);