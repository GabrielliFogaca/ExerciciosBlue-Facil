//2. Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

console.clear();
const prompt = require('prompt-sync')(); 

let nome = prompt("Qual seu nome completo? ");
let endereco = prompt("Qual seu endereço? ");
let cep = prompt("Qual seu CEP? ");
let tel = prompt("Qual seu telefone? ");

console.log();
console.log(`Seu nome é ${nome}\n você mora na ${endereco}\n CEP ${cep} e seu telefone é ${tel}`);