function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

function isPrimeToSumOfDigits(n) {
    let sumOfDigits = n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    return isPrime(n) && isPrime(sumOfDigits);
}
