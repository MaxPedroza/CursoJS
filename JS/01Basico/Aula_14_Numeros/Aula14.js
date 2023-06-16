// == Aula 14 == Numeros

let num1 = 1500;
let num2 = 2.5;
let num3 = 10.589000456;
let temp = num1 * '5';
let num4 = 0.7;
let num5 = 0.1;




console.log(num1 + num2); // soma simples
console.log(num1.toString() + num2); // concatenação 
console.log(num1.toString (2)); // Representação binaria
console.log(num3); // exibindo um numero quebrado
console.log(num3.toFixed(2)); // utilizando uma quantidade de casas decimais definida
console.log(Number.isInteger(num1)); // verifica se é um inteiro
console.log(Number.isNaN(temp)); // Verfica se é um numero 
console.log(num4 + num5); // numero nao é preciso / 0,7 + 0,1 = 0,8

let res;
res = num4 + num5;
res = parseFloat(res.toFixed(2)) // corrigindo a imprecisão / 2 representa duas casas decimais
//res = Number(res.toFixed(2)) // corrigindo a imprecisão utilizando number 
console.log(res);
