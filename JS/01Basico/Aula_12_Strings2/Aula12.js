// == Aula 12 == STRING

// quando é preciso usar aspas dentro de uma string

let umaString = "Um \"TEXTO\""; 
let umaString2 = 'Um "TEXTO"';

console.log(umaString);
console.log(umaString2);

// É possivel exibir apenas um caracter de uma string 

console.log(umaString[4]); // posição 4


/* 

0123456789 - posição do caracter
Um "Texto" 

*/

console.log(umaString[10]); // quando colocamos uma posição inexistente ou negativa temos: undefined

console.log(umaString.charAt(4)); // outra forma de exibir a posição do caracter


// existem muitas funções para string, para saber mais vide a aula 24