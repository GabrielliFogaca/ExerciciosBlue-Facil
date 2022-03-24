// 8. Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
// DOLAR
// EURO
// LIBRA ESTERLINA
// DÓLAR CANADENSE
// PESO ARGENTINO
// PESO CHILENO
// Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. Mostrar o resultado no formato U$9999.99

var prompt = require('prompt-sync')();

//Criei duas arrays contendo a moeda e o cambio a se multiplicar
let moeda = ["Dolar", "Euro", "Libra Esterlina", "Dolar Canadense", "Peso Argentino", "Peso Chileno"];
let cambio = [0.21, 0.19, 0.16, 0.26, 22.73, 162.81];

//Apresentei as opções de moedas com numeros correspondentes a cada uma delas.
console.log(`Conversões disponíveis:\n0 - ${moeda[0]}
1 - ${moeda[1]}
2 - ${moeda[2]}
3 - ${moeda[3]}
4 - ${moeda[4]}
5 - ${moeda[5]}`);

//Exibi ao usuário uma mensagem solicitando sua escolha.
let numeroEscolhido = +prompt(parseInt(`Digite o numero da moeda desejada: \n`));

//Condicional para numero inválido
while(numeroEscolhido >= 6) {
    console.log("Digite um numero válido.")
}     numEscolhido = parseInt(prompt('Digite o número da moeda desejada: '))
console.log(`A moeda escolhida foi ${moeda[numeroEscolhido]}`);

//Pede o valor a ser convertido do real
let valor = parseInt(prompt(`Digite um valor em real: \n`));

//Multiplica o valor inserido pelo usuário 
console.log(`O valor convertido para ${moeda[numeroEscolhido]} é de ${valor * cambio[numeroEscolhido].toFixed(2)}`);