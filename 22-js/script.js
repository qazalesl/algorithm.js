function findNumbers(){
    let result =[];
    for (let i = 100; i <= 999; i++){
        let str = i.toString();
        let first = str[0];
        let last = str[str.length-1];
        let middle = str.slice(1,-1);

        if (first === last && Number(middle)%2===0){
            result.push(i);
        }
    }
    return result;
}
console.log(findNumbers());














