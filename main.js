//Ejercicio 1 al 5
let miNombre = "Yeison "  
let miApellido = "Lopez" 
let miEdad = 32             
let miMascota = "Cory"      
let edadMascota = 5         
let nombreCompleto = (miNombre + miApellido)

//Ejercicio 6
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

//Ejercicio 7
console.log(nombreCompleto)

//Ejercicio 8
textoPresentacion = "Mi nombre es " + miNombre + miApellido + " y tengo " + miEdad + " años, tengo una mascota llamada " +miMascota+ " que tiene " +edadMascota +" años."
console.log(textoPresentacion)

//Ejercicio 9
sumaEdades = miEdad + edadMascota
console.log(sumaEdades)
restaEdades = miEdad - edadMascota
console.log(restaEdades)
productoEdades = miEdad * edadMascota
console.log(productoEdades)
divisionEdades = miEdad + edadMascota
console.log(divisionEdades)

//Ejercicio 10
miNombre = prompt("Ingrese su nombre:")
miApellido = prompt("Ingrese su apellido:")
miEdad = prompt("Ingrese su edad:")
miMascota = prompt("Ingrese el nombre de su mascota:")
edadMascota = prompt("Ingrese la edad de su mascota:")

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
nombreCompleto = (miNombre + miApellido)

console.log(nombreCompleto)

textoPresentacion = "Mi nombre es " + miNombre + miApellido + " y tengo " + miEdad + " años, tengo una mascota llamada " +miMascota+ " que tiene " +edadMascota +" años."
console.log(textoPresentacion)

sumaEdades = miEdad + edadMascota
console.log(sumaEdades)
restaEdades = miEdad - edadMascota
console.log(restaEdades)
productoEdades = miEdad * edadMascota
console.log(productoEdades)
divisionEdades = miEdad + edadMascota
console.log(divisionEdades)

//Ejercicio 11
let alumno = {
    nombre: "Stefani",
    apellido: "Zapata",
    edad: 26,
    estatura: "1.49",
    pregrado: "Psicologia" 
}

console.table(alumno) 
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.estatura)
console.log(alumno.pregrado)

//Ejercicio 12
let mascota = {
    "tipoMascota": "Perro",
    "nombreM": "Cory",
    "raza": "Criollo",
    "edadM": "5 años",
    "peso": "7 kl",
}

console.table(mascota) 
console.log(mascota.tipoMascota)
console.log(mascota.nombreM)
console.log(mascota.raza)
console.log(mascota.edadM)
console.log(mascota.peso)

//Ejercicio 13
const frutas = ["Manzana", "Banano", "Mango", "Piña", "Fresa"]

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//Ejercicio 14
const numeros = [1, 2, 3, 4, 5]

console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//Ejercicio 15
const familia = ["Stefani", "Yeison", "Leticia", "Jose", "Juan"]

console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

//Ejercicio 16
textoAleatorio =  "Me comí un "+ frutas[1] + ", me quedan " + numeros[3] + " se los daré a mi hermano " + familia[4]
console.log(textoAleatorio)

//Ejercicio 17
let edadCompa = prompt("La edad de mi compañero:")

edadesIguales = miEdad === edadCompa
soyMayor = miEdad > edadCompa
soyMenor = miEdad < edadCompa

console.log("Mi edad es igual a la de mi compañero: "+edadesIguales)
console.log("Mi edad es mayor a la de mi compañero: "+soyMayor)
console.log("Mi edad es menor a la de mi compañero: "+soyMenor)

//Ejercicio 18
soyMayorDeEdad = miEdad >= 18
console.log("Soy mayor de edad: "+soyMayorDeEdad)

//Ejercicio 19
edadParaSubir = prompt("Ingrese su edad para verificar si puede subir:")
alturaParaSubir = prompt("Ingrese su altura en cm para verificar si puede subir:")

puedeSubir = (edadParaSubir > 6) && (alturaParaSubir > 120)

console.log("Puede subir a la atracción: "+puedeSubir)

//Ejercicio 20
