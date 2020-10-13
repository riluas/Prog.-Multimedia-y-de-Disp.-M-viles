let dataArray = [1,45,6,6,7,3,34,5,564,7,3,4,32];

function average(data) {
  
  if (data.length !== 0) {
    let total = data.reduce(function(a, b){ return a + b });
    console.log(total / data.length);
  }
  else{
    return undefined
  }

  
}

average(dataArray);