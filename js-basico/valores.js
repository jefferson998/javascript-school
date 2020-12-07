console.log('Hola mundo js')

var nombre
nombre = 'sacha'
var edad = 28
var apellido = 'Paz'
var num1 = 1,
    num2 = 34


console.log(nombre)

console.log('hola' + nombre)
console.log('hola' + nombre + '  ' + apellido)


var namemayusculas = nombre.toUpperCase()
var apellidminusculas = apellido.toLocaleLowerCase

var primeraletranombre = nombre.charAt(0)

var cantidadletrasnombre = nombre.length

var nombrecompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

var ultimaletranombre = nombre.charAt(cantidadletrasnombre - 1)


//edad =edad +1

var edad = 23

edad += 1
var peso = 75
peso -= 2
var sandwich = 1
peso += sandwich

var precio = 200.3

var total = Math.round(precio * 100 * 3) / 100
var totalstr = total.toFixed(3)
var total2 = parseFloat(totalstr)