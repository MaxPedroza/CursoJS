// == Aula 15 == Math

let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredondando numeros para baixo ↓
let num3 = Math.ceil(num1); // Arredondando numeros para cima ↑
let num4= Math.round(num1); // Arredondando para o mais proximo, caso esteja abaixo de 0,5 arredonda pra baixo
console.log(num1);
console.log(Math.max(1,2,3,4,5,6,50,-1,-2,-3,-4,-5)); // Traz o maior numero 
console.log(Math.min(1,2,3,4,5,6,50,-1,-2,-3,-4,-5)); // Traz o menor numero 
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Math.round traz numeros aleatorios
console.log(aleatorio);

//console.log(Math.pow(2,10)); // exibe potencia utilziando objeto
//console.log(2 ** 10); // outra forma de exibir potencia 

let num2 = 9;
console.log(num3 ** 0.5); // N²
console.log(num4 ** (1/2));// raiz quadrada


//console.log(100/0); // em Js é possivel fazer esse calculo sem que retorne erro (infinity) 
//  esse tipo de resposta se da quando o resultado fica muito grande 