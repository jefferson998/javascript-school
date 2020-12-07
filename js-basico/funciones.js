var nombre = 'Jefferson',
    edad = 23

function imprimiredad(nombrex, edadx) {
    console.log(`${nombre} tiene ${edad} años`)

}
imprimiredad('Jefferson', 23)





function imprimirnombremayusculas(nombrex) {

    nombrex = nombrex.toUpperCase()
    console.log(nombrex)
}

imprimirnombremayusculas(nombre)


var nombrepapa = 'Geovani'
var nombremama = 'Andrea'

// objetos

var sacha = {
    nombre: 'sacha',
    apellido: 'gutenberg',
    edad: 34
}

var dario = {
    nombre: 'Dario',
    apellido: 'gutenberg',
    edad: 35
}


imprimirnombremayusculas(sacha.nombre)
imprimirnombremayusculas(dario.nombre)



function imprimirnombremayusculas2(persona) {

    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirnombremayusculas2(sacha)
imprimirnombremayusculas2(dario)

function imprimirnombremayusculas3({ nombre }) {

    console.log(nombre.toUpperCase())
}

imprimirnombremayusculas3(sacha)
imprimirnombremayusculas3(dario)

imprimirnombremayusculas3({ nombre: 'Pepito' })


function imprimirnombremayusculas4(persona) {

    var { nombre } = persona
    console.log(persona.nombre.toUpperCase())
}

imprimirnombremayusculas4(sacha)
imprimirnombremayusculas4(dario)


function imprimirnombreyedad() {
    //Hola, soy jefferson y tengo 23 años
}


function cummpleaños(persona) {
    return {
        ...persona,
        edad: persona.edad += 1
    }
}

var x = 4,
    y = '4'