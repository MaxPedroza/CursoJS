// == Aula 5 ==

/*Variavel constante

Não podemos criar constantes com palavras reservadas
Constante precisam ter nomes significativos
Não podemos começar o nome de uma constatnte com um numero 
Não podem conter espaços ou traços
Utilizamos camelCase
Case-sensitive
Não podemos modificar o valor de uma constante
Não Utilize var, utilize const*/

const nome = 'Max'; //utilizando const com string

//exemplo constante utilizando const com number

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
let resultadoTriplicadoDois = resultadoTriplicado + 5;

console.log(primeiroNumero);
console.log(segundoNumero);

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(resultadoTriplicadoDois);

console.log(typeof (primeiroNumero)) // como saber o tipo de valor