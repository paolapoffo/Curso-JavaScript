// tipo de dado 
// booleanos 

//conversão implícita 

const numero = 456;
const numeroString = ("456");

//=== leva em consideração o tipo de dado
console.log(numero === numeroString);

//== não leva em consideração o tipo de dado (apenas o valor)
console.log(numero == numeroString);

//concatenação
console.log(numero + numeroString);

//Number() - Conversor
//String() - Conversor

//conversão explícita 
console.log(numero + Number(numeroString));
console.log(numero === Number(numeroString));