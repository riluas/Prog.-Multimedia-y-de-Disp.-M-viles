
let values = [13,10,23,10,42,5,32,1,23,4,5,56];

function multipleFactorial(val) {
    let total = 1;
    let newArray = [];

    val.forEach(a => {
        for (i=1; i<=a; i++) {
            total = total * i; 
        }
    newArray.push(total);
    total = 1
});
    return newArray;
}

console.log(multipleFactorial(values));
