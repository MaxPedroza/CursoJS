// == Aula 22 == Operadores de comparação


/*
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a 
== Igualdade (Valor) *** Não usaremos
=== Igualdade estrita (valor e tipo)
!= Diferente (Valor) *** Não usaremos
!== Diferente estrito (valor e tipo)
*/


console.log(10>5);                      // Verifica se um numero é maior que o outro  = True ou False (Boolean)

console.log(10>=5);                      // Verifica se um numero é Maior ou igual ao outro (Boolean)

console.log(10<5);                      // Verifica se um numero é menor que o outro

console.log(10<=5);                     // Verifica se um numero é menor ou igual ao outro

const num1 = 10;   //number                  
const num2 = '10'; // string
const resultado = num1 == num2;         // ele compara, mesmo um dos valores sendo uma string
console.log(resultado);


const num3 = 10;  //number                   
const num4 = 10;  //number
const resultado2 = num3 === num4;         // ele compara tanto os valores quanto o tipo de valor, contrario de ==
console.log(resultado2);
