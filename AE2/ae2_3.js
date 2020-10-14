
let values = [6,4,6,8,6,4,10,50,220,23];

function findMinimum(v) {
  let a = v.reduce((a,b) => Math.min(a, b))
  return a;  
};
console.log(findMinimum(values));
findMinimum(values);