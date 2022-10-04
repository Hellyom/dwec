window.onload=inicio;
function inicio(){
   
    document.formulario.Comprobar.onclick=validarEmail;
}
			
    function validarEmail(){
        var correo = document.getElementById('correo').value;
        const valid=formulario.elements["validacion"];
        arroba = correo.indexOf("@");
        punto =  correo.lastIndexOf(".");
        extension= correo.split(".")[1];
    
        if (arroba < 1 || ( punto - arroba < 2 )||correo===""){
           valid.value=("Correo invalido");
           
        }else{
          if(extension.length >3){
            valid.value=("Correo invalido");
            return;
          }
          valid.value=("Correo valido");
        }
    }