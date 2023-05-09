/*let nome = "Max"

console.log(nome, 'nasceu em 1985');
console.log('em 2003', nome, 'se formou em ti');
console.log('em 2018', nome, 'casou-se com ');
console.log(nome, 'teve dois fihos, um no antigo relacionamento, e outro depois de casado');
console.log('os dois fihos de', nome,'são, Max e Nina');
*/
/* == Aula 4 ==
let nome; //variavel declarada
nome = 'Max' // inicializando a variavel
console.log(nome);
nome = 'josé';
console.log(nome);
*/

/* == Aula 5 == 

//const nome = 'Max'; utilizando const com string

//exemplo constante utilizando const com number

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicadoDois = resultadoTriplicado + 5;

console.log(primeiroNumero);
console.log(segundoNumero);

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(resultadoTriplicadoDois);

console.log(typeof (primeiroNumero)) // como saber o tipo de variaveis 

*/

/* == Aula 6 == 

//Max Pedroza tem 37, pesa 85kg
//Mede 1,7 de altura e seu imc precisa ser descoberto
//Nasceu em 1985

const nome = 'Max';
const sobreNome = 'Pedroza';
const idade = 37;
const altura = 1.7;
const peso = 85;

let imc; // imc = peso / (altura*altura)
let anoNascimento; // ano atual - idade

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

// template string, voce pode usar crase (`)e adicionar cifrão e chaves (${}) as variaves 

console.log (nome, sobreNome);
console.log (`Nasceu em ${anoNascimento}, tem ${idade}, pesa ${peso}Kg e mede ${altura} de altura.`);
console.log(`Seu IMC é: ${imc}.`);
*/

/* == Aula 8 == 

//Strings (Tipo de Strings)

const nome = 'Max';
const nome1 = "Max";
const nome2 = `Max`;

//Number

const num1 = 10; 
const num2 = 10.52; 

//não aponta pra local nenhum ana memória

let nomeAluno // Undefined   - não foi acrescentado nenhuma valor para a variavel
let sobrenomeAluno = null; //nulo  

const aprovado = True; // apenas verdadeiro ou falso

//Descobrir tipos de variaveis 

console.log(typeof num1);
*/

/* == Aula 9 ==

Operadores Aritmeticos*/
/*
//Adição +
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

//Concatenação + //concatenar texto com numero tudo vira string
const num3 = '5';
const num4 = 10;
console.log(num3 + num4);

//Subtração -
console.log(num1 - num2);

//Divisão /
console.log(num2 / num1);

// Multiplicação * 
console.log(num1 * num2);

// Potenciação ** 
console.log(num1 ** num2);

// Resto % 
console.log(num1 % num2);

/*

Sequencia de calculo
1 - ()
2 - **
3 - *, / e %
+ e -


*/

/*
// Sequecia de calculos 
console.log((num1 + num2) * num3);

// Incremento 
let contador = 10;
contador ++;
console.log(contador);

//pré incremento
console.log(++contador);
console.log(contador);

//pós incremento
console.log(contador++);
console.log(contador);

// Decremento
//let contador = 10;
contador --;
console.log(contador);

//pré decremento
console.log(--contador);
console.log(contador);

//pós decremento
console.log(contador--);
console.log(contador);

// Operdadores de atribuição
//let contador = 2;
contador **=10;
console.log(contador);

// NaN - Not a number

const num5 = 10;
const num6 = 'Max';
console.log(num5 * num6);
*/

// == Aula 10 ==

/*
let num1 = prompt ('Digite o primeiro  número:');
let num2 = prompt ('Digite o segundo número:');

num1 = Number(num1);
num2 = Number(num2);

alert(`O Resultado é: ${num1 + num2}`);

*/


// == Aula 11 ==

//Exercicio
/*
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);
*/

// ==Aula 12 == STRING




//vide aula 24

// == Aula 13 == Exercicio String
/*
const nome = prompt('Digite seu Nome Completo');

document.body.innerHTML += `O seu nome é: ${nome} <br />`;
document.body.innerHTML += `O seu nome tem  ${nome.length}  letras.<br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `O primeiro indice da letra do seu nome é: ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `O ultimo indice da letra do seu nome é: ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são:${nome.slice(-3, nome.length)} <br />`;
document.body.innerHTML += `As palavras do seu nome são:${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase ()}<br />`;
document.body.innerHTML += `Seu nome com letras minusculas:${nome.toLocaleLowerCase ()} <br />`;
*/


// == Aula 14 == Numeros
/*
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
*/

// == Aula 15 == Math

//let num1 = 9.54578;
//let num2 = Math.floor(num1); // Arredondando numeros para baixo ↓
//let num2 = Math.ceil(num1); // Arredondando numeros para cima ↑
//let num2 = Math.round(num1); // Arredondando para o mais proximo, caso esteja abaixo de 0,5 arredonda pra baixo
//console.log(num2);
//console.log(Math.max(1,2,3,4,5,6,50,-1,-2,-3,-4,-5)); // Traz o maior numero 
//console.log(Math.min(1,2,3,4,5,6,50,-1,-2,-3,-4,-5)); // Traz o menor numero 
//const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Math.round traz numeros aleatorios
//console.log(aleatorio);

//console.log(Math.pow(2,10)); // exibe potencia utilziando objeto
//console.log(2 ** 10); // outra forma de exibir potencia 
/*
let num2 = 9;
console.log(num2 ** 0.5); // N²
console.log(num2 ** (1/2));// raiz quadrada
*/

//console.log(100/0); // em Js é possivel fazer esse calculo sem que retorne erro (infinity) 
//  esse tipo de resposta se da quando o resultado fica muito grande 




