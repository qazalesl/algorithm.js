function isPrime(num){
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
    if(num % i === 0) return false;
    return num > 1;
}

for(let i = 3;i < 1000; i++){
    if(isPrime(i)){
        console.log(i);
    }
} 