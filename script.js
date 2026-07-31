const prompt=require('prompt-sync')();



//Función para converitr grados celcius a Fahrenheit
function celsiusFahrenheit(temperatura){
    return (temperatura * 9/5) + 32
}

//Función para converitr grados celcius a Kelvin
function celsiusKelvin(temperatura){
    return temperatura +273.15
}

//Pedir datos al usuario
let temperatura = parseFloat(prompt("Ingresa la temperatura en grados Celsius "));

let fahrenheit = celsiusFahrenheit(temperatura);
let kelvin = celsiusKelvin(temperatura);

console.log("Temperatura en Grados Celsius: " + temperatura);
console.log("Grados Fahrenheit: " + fahrenheit);
console.log("Grados Kelvin: " + kelvin);