// 7. Você está na flor da idade?
// Defina uma variável para o valor do ano do nascimento;
// Defina uma variável para o valor do ano atual;
// Defina uma variável que calcula o valor final da idade da pessoa;
// Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

console.clear();
const prompt = require('prompt-sync')(); 


let idade = +prompt("Você nasceu em qual ano? ");
let anoAtual = (2022);
let idadeFinal = (anoAtual - idade);

console.log(`Você tem ${idadeFinal} e você está na flor da idade. `);
