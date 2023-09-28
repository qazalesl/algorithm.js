function generateNumbers(){
    var numbers=[];

    for(var i = 10;i<=90; i +=2){
        for (var j = 10; j<=90; j +=2){
            var number = i * 1000 + j * 100;
            numbers.push(number);
        }
    }
    return numbers;
}
console.log(generateNumbers());