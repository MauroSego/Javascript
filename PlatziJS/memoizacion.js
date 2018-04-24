let contadorMemo = 1
function fibonacciMemo(num){
	contadorMemo++
	
	if(num == 1) return 0
	if(num == 2) return 1

	console.log(contadorMemo++)

	return fibonacciMemo(num - 1) + fibonacciMemo(num - 2);
}