//var - Escopo global

// var altura = 5;
// var comprimento = 7;
// var area;

// area = (altura * comprimento);
// console.log(area);

//let - Escopo especifíco

// let forma = ("Retângulo"); 
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma ==="Retângulo") {
//     area = (altura * comprimento);
// }else {
//     area = ((altura * comprimento) / 2);
// }

// console.log(area);

//const - não altera

const forma = ("triângulo");
const altura = 5;
const comprimento = 7;
let area;

if (forma === "Quadrado") {
    area = (altura*comprimento);
}else {
    area = ((altura * comprimento) / 2);
}

console.log(area);
