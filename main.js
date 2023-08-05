/*
 * Autor: 	Fernando Nadalich
 * Contenido:	Programa para obtener valores medios, máximos y mínimos de una serie de mediciones
 * Fecha:	02/08/2023
 */

/*
 * Return valor medio
 */
function valorMedio(acum, muestras) {
	return parseFloat(acum)/muestras
}

/*
 * Return valor Max de mediciones
 */
function valorMax(max, actual) {
	return max >= actual ? max : actual
}

/*
 * Return valor min
 */
function valorMin(min, actual) {
	return min <= actual ? min : actual
}

// Inicio proceso
let tipoMedida = prompt('Introduzca el tipo de medida a evaluar: ')
// Puede ser la descripción de una longitud, un diámatro o cualquier valor que desee observar

// Primer valor o una letra para finalizar el proceso
let medida = parseFloat(prompt('Introduzca primera medida (min: 0 - max: 1000), o cualquier letra para finalizar el proceso: '))

// Decalaración de variables
let acum = 0
let nMedidas = 0
let med = 0
let max = 0
let min = 1000
let estadoProceso = false

// Ciclo de proceso
while(!isNaN(medida)) {
	estadoProceso = true

	if(medida > 1000 || medida < 0) {
		while (medida > 1000 || medida < 0) {
			medida = parseFloat(prompt('Valor introducido no es válido! Introduzca un valor entre 0 y 1000 mm; o presione cualquier letra para finalizar el proceso:'))
		} 
	} else { 
		acum = acum + medida
		nMedidas++
		med = valorMedio(acum, nMedidas)
		max = valorMax(max, medida)
		min = valorMin(min, medida)
		medida = parseFloat(prompt('Introduzca nueva medida (min: 0 - max: 1000), o cualquier letra para finalizar el proceso: '))
	}
}

// Mensaje final - Dados por consola y por alert
if ( estadoProceso ) {
	console.log(`El valor medio de ${tipoMedida} es: ${med} mm`)
	console.log(`El valor máximo de ${tipoMedida} es: ${max} mm`)
	console.log(`El valor mínimo de ${tipoMedida} es: ${min} mm`)
	alert(`El valor medio de ${tipoMedida} es: ${med} mm`)
	alert(`El valor máximo de ${tipoMedida} es: ${max} mm`)
	alert(`El valor mínimo de ${tipoMedida} es: ${min} mm`)
} else {
	console.error(`No hay ingreso de medidas para calcular valores de ${tipoMedida}`)
	alert(`No hay ingreso de medidas para calcular valores de ${tipoMedida}`)
}