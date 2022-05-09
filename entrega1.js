function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  //funcion para verificar que no den impares los medicos y las guardias sean equitativas
  let verificarCantMedicos = (cantMedicos,cantDiasMes) =>{
    if(cantDiasMes % cantMedicos !=0){
        alert("la cantidad de medicos es insuficiente para cubrir el mes entero");
        return false;
    }
    return true;
  } 
  let distribuirMedicos = (medicos,cantDiasMes,cantMedicos) =>{
            let i=0;
            let k=0;
            let division = cantDiasMes/cantMedicos;
            console.log(division);
            while(i <= cantDiasMes){
              for(j=0;j<=division;j++){
                console.log("el doctor "+ medicos.at(k) + " estara de guardia el dia " + parseInt(i+1)  );
                i++;
                k++;
                if(k == cantMedicos){k=0} 
                if(i == cantDiasMes){return}
              }
              
            }
  }

//inicio programa
if(confirm("Va a empezar el simulador, esta avisado que por el momento los resultados pueden no ser optimos")){

    let cantMedicos = parseInt(prompt("Ingrese la cantidad de medicos a distribuir en las guardias del mes"));
    let cantDiasMes = getDaysInMonth(2022,parseInt(prompt("Ingrese el numero del mes en el que se encuentra")));
    if(verificarCantMedicos(cantMedicos,cantDiasMes)){
        let mes = new Array();
        mes.length = cantDiasMes;
        let Medicos = new Array();
        for(i=1;i<=cantMedicos;i++){
        Medicos.push(prompt("ingrese el nombre del medico N "+ i));
        }
        distribuirMedicos(Medicos,cantDiasMes,cantMedicos);
    }
    

    

}



