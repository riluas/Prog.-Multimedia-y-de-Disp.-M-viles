let valores = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];

// A.
let AValores = valores.filter(isNaN)
console.log(AValores);

// B.
let BValores = valores.filter(function(filtrado){

    typeof filtrado == "number";
    return filtrado %2 == 0;

  });
  console.log(BValores);
