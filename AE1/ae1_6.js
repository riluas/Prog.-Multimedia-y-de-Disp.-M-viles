
function numEntero() {
	let num = prompt("Dime un numero entero")
	parImpar(num);
}

function parImpar(n) {
	
	if (n%2 == 0) {
		console.log(n+" Es número par");
	}
	else{
		console.log(n+" Es número impar");
	}
}

numEntero();