function countDigits(N){
    let strN = N.toString();
    let even = 0;
    let odd = 0;
    let zero = 0;

    for(let i = 0; i< strN.length; i++){
        let digit = parseInt(strN[i]);

        if (digit% 2 === 0){
            even++;
        } else if (digit % 2 !== 0){
            odd++;
        } else if (digit === 0){
            zero++;
        }
    }
    return{even,odd,zero};
}

console.log(countDigits(1234567890));