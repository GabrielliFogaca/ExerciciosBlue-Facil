//4. Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

console.clear();
const prompt = require('prompt-sync')(); 

let nome = prompt("Qual seu nome? ");
let opcaoUm = ("Lasanha bolonhesa");
let opcaoDois = ("Lasanha 4 Queijos");
let opcaoTres = ("Lasanha de Frango");
let opcaoQuatro = ("Cancelar");

console.log(`Olá ${nome} as opções do dia sâo: 1-${opcaoUm} 2-${opcaoDois} 3-${opcaoTres}`)

let escolhaUm = parseInt(prompt("Qual opção você prefere? "));

if  (escolhaUm == 1)   {

    opcEscolhida = (`${opcaoUm}`)
} else if (escolhaUm == 2) {

    opcEscolhida = (`${opcaoDois}`)
} else if (escolhaUm == 3) {

    opcEscolhida = (`${opcaoTres}`)
} else  {

    opcEscolhida = (`${opcaoQuatro}`)
}

console.log(`${nome}, você escolheu ${opcEscolhida}`);