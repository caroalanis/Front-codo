

//funcion flecha / arrow function

const arrayDePalabras= [];

function addPalabra(){
    //capturo el valor de la palabra
const valuePalabra = document.getElementById('palabra').value;

//validacion que no sea vacio el campo que ingreso
if(valuePalabra=== ''){
    alert('Debe completar la palabra');
    return;
}

//agrego la palabra al array
arrayDePalabras.push(valuePalabra);
console.log(arrayDePalabras); 

listarPalabras();
}
//otras formas:
/* REACT
const addPalabra = () =>{

}
*/

function listarPalabras(){
//valido que no sea vacio el array
if(arrayDePalabras.length ===0){
return;
}

//limpio el div
//document.getElementById('listado').innerHTML='';

//recorro el array y voy agregando los elementos
/*
for(let unaPalabra of arrayDePalabras){
    document.getElementById('listado').innerHTML += ` ${unaPalabra} <br>`;
    ` alt+96
}*/

const ul = document.createElement('ul');
for(let unaPalabra of arrayDePalabras) {
    const li = document.createElement('li');
    //id al li
    li.id = Math.random();//0 - 0.999999
    li.className = 'texto-rojo';
    li.innerHTML = unaPalabra;

    //evento dinamico al li que estoy creando
    li.addEventListener('click',function() {
        alert('dentro del evento onclick de li')
    });

    ul.appendChild(li);
}

document.getElementById('listado').appendChild(ul);

}


