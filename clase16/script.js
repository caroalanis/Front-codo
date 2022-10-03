/*defino mi primer vector/array/arreglo */
const edadCarlos= 36;
const edadEduardo = 40;
const edadCesar = 25;

//los vectores son dinamicos 
const edades = [];
//agregar un elemento
edades.push(36); //agrego 36 al vector edades
//invocando el metodo "push"
edades.push(edadEduardo);
edades[2] = edadCesar;

console.log(edades);


//recorrer el vector de un en uno

console.log('0:', edades[0]);

//ciclo for (variable donde inicio, hasta donde voy (en este caso hasta el tamaño del vector),cuanto voy avanzando)

for(let i=0; i<edades.length; i++){
    console.log(`dentro del for ${i}:`,edades[i]); //alt+96 comillas invertidas//
}


//max, min, promedio//

/*const notas = [];
notas.push(8);
notas.push(7);
notas.push(10);
console.log(notas);
*/

//traigo los valores desde html
function calcular() {
    const nota1Value = document.getElementById('nota1').value;
    const nota2Value = document.getElementById('nota2').value;
if(!nota1Value!== '' && nota2Value !== '' ){
    //invoco la funcion que procesa las notas
    procesarNotas(nota1Value,nota2Value);  
}else {
    alert('complete las dos notas');
}
    

}

function procesarNotas(nota1,nota2){

    const notas= [nota1,nota2];
    /*otra forma:
    const notas = [];
    notas.push(nota1);
    notas.push(nota2);
    */
   /*defino las variables*/
   
    let max = calcularMaximo(notas);
    let min = calcularMinimo(notas);
    let promedio = calcularPromedio(notas);

    //muestro por consola los datos
    console.log('minimo',min);
    console.log('maximo',max);
    console.log('promedio',promedio);
}

function calcularMaximo(notas) {
    let max;
    //definir una varible LOCAL
    if(notas[0] > notas[1]) {
        max = notas[0]
    }
    if(notas[1] > notas[0]) {
        max = notas[1];
    }
    if(notas[0] === notas[1]) {
        max = notas[0];
    }
    return max;
}

function calcularMinimo(notas) {
    let min;
    //definir una varible LOCAL
    if(notas[0] < notas[1]) {
        min = notas[0]
    }
    if(notas[1] < notas[0]) {
        min = notas[1];
    }
    if(notas[0] === notas[1]) {
        min = notas[0];
    }
    return min;
}

let acumulador = 0;
function calcularPromedio(notas){
    //recorro el vector acumulando las notas
    for(let i=0;i<notas.length;i++){
        //me falta agregar un acumulador
        acumulador = acumulador + notas[i];
        
    }
    const promedio = acumulador/notas.length;
    return promedio;
 }


