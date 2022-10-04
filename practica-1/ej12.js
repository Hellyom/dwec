window.onload=inicio;
function inicio(){
    document.formulario.comprobar.onclick=comprobacion;
}

function comprobacion(){ 
    let direcc=document.formulario.direccion.value.toLowerCase();
    if (!validar(direcc)){
        document.formulario.mensaje.value="La direccion es incorrecta";}
    else{
        document.formulario.mensaje.value="La direccion es correcta"
    }
   
    }
function validar(laDireccion){
    let especiales="ñáéíóúü";
    let otros=new Array("º", "ª", "/", "-", " ");
    
	let valido=true;
	
	if (laDireccion.length < 8 || laDireccion.length > 42)
    valido=false
	else if ((laDireccion.charAt(0) < "a" || laDireccion.charAt(0) > "z") )
             valido=false
	else if ((laDireccion.charAt(laDireccion.length -1) < "a" ||
    laDireccion.charAt(laDireccion.length -1) > "z") &&
    (laDireccion.charAt(laDireccion.length -1) < 0 || laDireccion.charAt(laDireccion.length -1) > 9))
             valido=false
	else
		var Indice=1;
		while (valido && Indice < laDireccion.length - 1){
			if ((laDireccion.charAt(Indice)<"a" || 
            laDireccion.charAt(Indice) > "z") &&
				!especiales.includes(laDireccion.charAt(Indice)) &&
				!otros.includes(laDireccion.charAt(Indice)))
				valido=false;
			Indice+=1;
		}
	return valido;
}


