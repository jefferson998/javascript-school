///ciclo if

var sacha = {
    nombre: 'sacha',
    apellido: 'Paz',
    edad: 23,
    ingeniero: false,
    cocinera: false,
    cantante: false,
    drone: true,
    guitarrista: false

}


function imprimirprofesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero) {
        console.log('ingeniero')
    } else {
        console.log('No es ingeniero')
    }
    if (persona.cocinera) {
        console.log('cocinera')
    }

    if (persona.drone) {
        console.log('volador de drones')
    }
}

imprimirprofesiones(sacha)


var juan = {
    nombre: 'Juan',
    edad: 12
}

const MAYORIA_DE_EDAD = 18

function esmayordeedad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD

}

function mayordeedad(persona) {
    console.log(`${persona.nombre} es mayor de edad?:`)
    if (persona.edad >= 18) {
        console.log('Si es mayor de edad')
    } else {
        console.log('no es mayor de edad')
    }

}


mayordeedad(sacha)
mayordeedad(juan)

//`` para interpolar

function mayordeedad2(persona) {
    console.log(`${persona.nombre} es mayor de edad la persona?:`)
    if (esmayordeedad(persona)) {
        console.log('Si es mayor de edad')
    } else {
        console.log('no es mayor de edad')
    }

}
mayordeedad2(juan)


//arrow fuctions 
// una variable se le puede asignar una funcion 

const esmayordeedad2 = function(persona) {
        return persona.edad >= MAYORIA_DE_EDAD

    }
    //arrow fuction
const condicionmayor = persona => persona.edad >= MAYORIA_DE_EDAD

//desestructurar
const condicionmayor2 = ({ edad }) => edad >= MAYORIA_DE_EDAD


function mayordeedad3(persona) {
    console.log(`${persona.nombre}  la persona es mayor de edad?:`)
    if (condicionmayor(persona)) {
        console.log('Si es mayor de edad')
    } else {
        console.log('no es mayor de edad')
    }

}

mayordeedad3(juan)

function permitiracceso(persona) {
    if (!condicionmayor(persona)) {
        console.log('acceso denegado')
    } else {
        console.log('acceso permitido')
    }
}

permitiracceso(sacha)
permitiracceso(juan)

const esmenordeedad = ({ edad }) => !condicionmayor({ edad }) ? console.log('acceso denegado') : console.log('acceso permitido')

esmenordeedad(juan)
esmenordeedad(sacha)


//ciclo for

var jefferson = {
    nombre: 'jefferson',
    apellido: 'Paz',
    edad: 23,
    peso: 73

}


console.log(`al inicio del año ${jefferson.nombre} pesa ${jefferson.peso}Kg`)

// function aumentardepeso(persona) {
//     return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2 //magic number
const DIAS_DEL_AÑO = 365
const aumentardepeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        //aumenta de peso
        aumentardepeso(jefferson)

    } else if (random < 0.5) {
        adelgazar(jefferson)

    }



}

console.log(`al final del año ${jefferson.nombre} pesa ${jefferson.peso.toFixed(1)} Kg`)
const comemucho = () => Math.random() < 0.3
const realizadeporte = () => Math.random() < 0.4
const META = jefferson.peso - 3
var dias = 0
while (jefferson.peso > META) {

    if (comemucho()) {
        //aumentadepeso
        aumentardepeso(jefferson)
    }
    if (realizadeporte()) {
        //adelgaza
        adelgazar(jefferson)

    }

    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${jefferson.nombre} adelgazo 3 Kg`)