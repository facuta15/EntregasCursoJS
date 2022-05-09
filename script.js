let nombre = prompt("Ingrese su nombre");
if (nombre.length > 4){
    for(i=0;i < nombre.length; i++){
        console.log(nombre.charAt(i));
    }
} 
else{
    console.log("Tiene un nombre muy corto para que esto sea divertido")
}