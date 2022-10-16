//filtrar elementos

const alumnos = [
{
    edad:35,
    nombre: "carlos"
},
{
    edad:30,
    nombre: "juan"

},
{
    edad:40,
    nombre: "eduardo"
},
{
    edad:38,
    nombre: "gaby"
}


];

//declaro un array auxiliar donde guardar los que cumplan con la condicion: <40 edad
const aux = [];

for(let unAlumno of alumnos) { //for each imperativo (busca en uno por uno de los elementos) que y como
//console.log(unAlumno)
if(unAlumno.edad<40){
    aux.push(unAlumno);
}
}

//Filter (otra forma de filtrar) (declarativo "que")
const aux2 = alumnos.filter(unAlumno => unAlumno.edad <40 );
//nuevo array con el resultado (aux2) nombre de mi array (alumnos).filter()
console.log('menos de 40',aux2);

//MAPEO 

const nombresDeAlumnos = aux.map(unAlumno => unAlumno.nombre); 
console.log('los nombres de < 40',nombresDeAlumnos); //solo me muestra el nombre de los adultos

//SOME: old (muestre aunq sea UNO que aplique y corta)
let existe = false;

for(let unAlumno of alumnos) { 
    if(unAlumno.edad==40){
        existe= true;
        break //frena cuando lo encuentra
    }
    }

//otra forma:

for(let i=0;i<alumnos.length && !existe;i++){  //mientras no exista
    
    existe = alumnos[i].edad==40;
    }

console.log('existe alguien de 40?',existe);

//SOME: NEW

const existe2 = alumnos.some(unAlumno => unAlumno.edad == 40);

console.log('hay 40?',existe2);

//EVERY (si todos cumplen con la condicion)
//si todos los alumnos tiene mas de 35 

const existe3 = alumnos.every(unAlumno => unAlumno.edad <= 35);

console.log('todos son mayores de 35?',existe3);

//Sumar todas las edades de los alumnos : OLD
let edadTotal= 0;

alumnos.forEach(unAlumno => edadTotal += unAlumno.edad);

console.log('old total:',edadTotal);

//sumar todas las edades : NEW
//REDUCE (lo suma todo en solo elemento)

const edadTotal2 = alumnos.reduce((total,alumnoActual) => total + alumnoActual.edad, 0);

console.log('new total:', edadTotal2);

