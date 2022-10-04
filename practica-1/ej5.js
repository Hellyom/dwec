
		window.onload=inicio;

		function inicio(){
			document.formulario.Comprobar.onclick=comprobaciones;
				}


				function comprobaciones(){
				NumeroVocales();
				NumeroA();
				NumeroE();
				NumeroI();
				NumeroO();
				NumeroU();
				NumeroConsonantes();

				}
				

				function NumeroVocales() {

				let cadena= document.formulario.cadena.value.toLowerCase();
				let cad= "aeiouáéíóúü";
				let cont=0;
				for(let i=0;i<cadena.length;i++){
				if(cad.includes(cadena.charAt(i))){
					cont++;
				}
				}
				document.formulario.vocales.value=cont;
				}


				function NumeroA() {   
				let cadena= document.formulario.cadena.value.toLowerCase();
				let cad= "aá";
				let cont=0;
				for(let i=0;i<cadena.length;i++){
				if(cad.includes(cadena.charAt(i))){
				cont++;
				}
				}
				document.formulario.A.value=cont;
				}
				
				function NumeroE() {
				let cadena= document.formulario.cadena.value.toLowerCase();
				let cad= "eé";
				let cont=0;
				for(let i=0;i<cadena.length;i++){
				if(cad.includes(cadena.charAt(i))){
				cont++;
				}
				}
				document.formulario.E.value=cont;
				}

				
				function NumeroI() {
				let cadena= document.formulario.cadena.value.toLowerCase();
				let cad= "ií";
				let cont=0;
				for(let i=0;i<cadena.length;i++){
				if(cad.includes(cadena.charAt(i))){
					cont++;
				}
				}
				document.formulario.I.value=cont;
				}

				
				function NumeroO() {
				let cadena= document.formulario.cadena.value.toLowerCase();
				let cad= "oó";
				let cont=0;
				for(let i=0;i<cadena.length;i++){
				if(cad.includes(cadena.charAt(i))){
					cont++;
				}
				}
				document.formulario.O.value=cont;
				}
				
				function NumeroU() {
				let cadena= document.formulario.cadena.value.toLowerCase();
				let cad= "uú";
				let cont=0;
				for(let i=0;i<cadena.length;i++){
				if(cad.includes(cadena.charAt(i))){
				cont++;
				}
				}
				document.formulario.U.value=cont;
				}
				
				function NumeroConsonantes() {
				let cadena= document.formulario.cadena.value.toLowerCase();
				let cad= "bcdfghjklmnñpqrstvwxyz";
				let cont=0;
				for(let i=0;i<cadena.length;i++){
				if(cad.includes(cadena.charAt(i))){
					cont++;
				}
				}
				document.formulario.consonantes.value=cont;
				}