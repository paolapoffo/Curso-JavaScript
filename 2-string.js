const texto1 = ("Olá, mundo!");
const texto2 = ('Olá, mundo!');
const senhaString = ("senhamuitosegura123!");
const stringDeNumeros = ("123456");

const citacao = ("Meu nome é ");
const meuNome = ("Paola");


//concatenação (+)

console.log(citacao + meuNome);

//character encoding
//Os caracteres \u no início do código são *caracteres de escape* que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// tamplate string 

console.log(`texto string linha 1
texto string linha 2`);

//interpolação de expressões 

var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e
não ${2 * (a + b)}.`);

//lower case converte todos os caracteres da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido).

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//length pode ser utilizada para sabermos quantos caracteres uma string contém

const senha = "minhaSenha123";
console.log(senha.length) // 13 caracteres