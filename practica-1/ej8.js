window.onload=inicio;
function inicio(){
    document.formulario.comprobar.onclick=comprobacion;
}

function comprobacion(){ //Esta en formato año-mes-día 
   let fecha1=document.formulario.fecha.value;
    
    fecha1=fecha1.split("-");
    
    
    let year =fecha1[0];
    
    let month=fecha1[1];
    
    let day=fecha1[2];
    
   
   

    if((year.length>4|| year.length<4)||(month.length<1||month.length>2) || (day.length<1 || day.length>2)
    || (month<1 || month>12) || (day<1 || day>31))

    {

        document.formulario.mensaje.value="La fecha es incorrecta";
    }

    else 

    {     document.formulario.mensaje.value="La fecha es correcta";
    
}
   

}

























