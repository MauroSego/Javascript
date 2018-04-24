let contadorMemo = 1
function fibonacciMemo(num, memoria = {}){
	contadorMemo++
	if(memoria[num])return memoria[num]
	if(num == 1) return 0
	if(num == 2) return 1

	return memoria[num] = fibonacciMemo(num - 1) + fibonacciMemo(num - 2);
}

let contadorRec = 1
function fibonacciRecursivo(num, memoria = {}){
	contadorRec++
	if(memoria[num])return memoria[num]
	if(num == 1) return 0
	if(num == 2) return 1

	return memoria[num] = fibonacciRecursivo(num - 1) + 
	fibonacciRecursivo(num - 2);
}