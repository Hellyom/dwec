
        function esPrimo(numero) {
    
            for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
            if(numero % i === 0) return false;
            return numero > 1;
        }
		function primos(){
		
		const formulario=document.forms[0];
		const texto=formulario.elements["texto"];
		console.log(formulario.elements);
        for (let x=0;x<=100;x++) {
            if (esPrimo(x)){
           	texto.value=texto.value+(x+"|");
			}
		}
	}