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




