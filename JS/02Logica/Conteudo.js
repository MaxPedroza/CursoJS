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
/*
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
*/


// == Aula 22 == Operadores Lógicos

/*

&& -> and -> E                              // todas as expressões precisam ser verdadeiras para retornar true
|| -> Or  -> Ou
!  -> Not -> Não

*/


/*
const expressaoAnd = true && true && true && true;
console.log(expressaoAnd);

const expressaoOr = false|| true;
console.log(expressaoOr);
*/
/*
const usuario = 'Max';      //form ususario Digitou
const senha = '123456';     // form usaurio Digitou

const vaiLogar = usuario === 'Max' && senha === '123456';
console.log(vaiLogar);
*/
//console.log(!true);

// == Aula 23 == Avaliação de Curto-Circuito (Short-Circuit)

/*

&& ->     false && True ->    Retorna o valor da ultima verdadeira (o valor mesmo!)
|| ->     true || false ->    Retorna o valor verdadeiro (quando todos sao falsos ele traz o ultimo valor false)


FALSY
*false
0
'' "" ``
null / undefined
NaN                     qualquer valor diferente desses (de falsy a NaN) avalia em true 

*/


// == Aula 24 ==   if, else if e else (estrutura condicional)

/*

Entre   0 - 11     = Bom dia 
Entre   12 - 17    = Boa tarde
Entre   18 - 23    = Boa noite
*/

const hora = 24;

if (hora >= 0 && hora <= 11){

    console.log('Bom dia');

} else if (hora >= 12 && hora <= 17) {

    console.log('Boa tarde');
    
} else if (hora >=18 && hora <= 23) {

    console.log('Boa noite');

} else {

    console.log('Horario fora de Padrão');

}

