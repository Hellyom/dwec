
window.onload=cargado;
function cargado(){

	document.formulario.convertir.onclick =conversion;

}

function conversion(){
	let input_decimal = parseInt(document.formulario.decimal.value); 	
	document.formulario.binario.value = input_decimal.toString(2);
	document.formulario.octal.value = input_decimal.toString(8);
	document.formulario.hexadecimal.value = input_decimal.toString(16);
}
