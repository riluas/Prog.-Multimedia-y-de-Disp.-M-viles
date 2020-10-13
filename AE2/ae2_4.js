
let values = [45,78,2,4,56,4,48,1,23,4,8,7];

function findGreaterThan(x, v) {
    console.log(v.some(a  => a > x , v[0]));
}

findGreaterThan(10,values);
