//5. E os 10% do garçom?
//Defina uma variável para o valor de uma refeição que custou R$ 42,54;
//Defina uma variável para o valor da taxa de serviço que é de 10%;
//Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

console.clear();

let valorRef = (42.54);
console.log(`Valor da refeição: R$ ${valorRef}`)
let valorGarc = (4.254);
console.log(`10% do garçon: ${valorGarc}`);
let valorTotal = (valorRef + valorGarc);
console.log(`Valor com os 10% R$ ${valorTotal.toFixed(2)}`)

console.log();

