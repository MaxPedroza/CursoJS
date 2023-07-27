// == Aula 9 ==

//Operadores Aritmeticos

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



/*Sequencia de calculo
1 - ()
2 - **
3 - *, / e %
+ e - */

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
