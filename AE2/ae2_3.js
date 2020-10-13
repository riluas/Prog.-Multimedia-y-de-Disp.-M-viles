
let values = [6,4,6,8,6,4,10,50,220,23];

function findMinimum(v) {
  console.log(v.reduce((a,b) => Math.min(a, b)));
};

findMinimum(values);