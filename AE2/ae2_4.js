
let values = [45,78,2,4,56,4,48,1,23,4,8,7];

function findGreaterThan(x, v) {
    let a = v.some(a  => a > x , v[0])
    return a;
}
console.log(findGreaterThan(10,values));
findGreaterThan(10,values);
