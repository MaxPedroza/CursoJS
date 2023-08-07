//== Aula 32 == Atribuição via desestruturação (Arrays)
/*                  //Exemplo 1
let a = 'A';    // B
let b = 'B';    // C
let c = 'C';    // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/

/*                  // Exemplo 2
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [pNumero, sNumero, ...resto] = numeros;                             // Variavel que traz de uma só vez o conteudo de um array     /   (...) variavel que traz o restante do conteudo do array
                                                                          // (...)rest, (...)spread - depedende do contexto

console.log(pNumero, sNumero);
console.log(resto);
*/

/*                  // Exemplo 3
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, , tres, , cinco, , sete] = numeros;                             // Variavel que traz de uma só vez o conteudo de um array     /   é possivel nao atrelar o conteudo a uma variavel apenas deixando o espaço em branco
                                                                          

console.log(um, tres, cinco, sete);
console.log(numeros);
*/

/*                  // Exemplo 4
//  (1)INDICE         0          1          2                   PRIMEIRO INDICE
//  (2)INDICE      0  1  2    0  1  2    0  1  2                SEGUNDO INDICE
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros[1][2]);                                     // Acessando o valor do terceiro indice(2) do primeiro valor do indice(1)
*/

/*                  // Exemplo 5
//  (1)INDICE         0          1          2                   PRIMEIRO INDICE
//  (2)INDICE      0  1  2    0  1  2    0  1  2                SEGUNDO INDICE
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [, , seis]] = numeros;                                 // outra forma de atribuir
console.log(seis);
*/

                    // Exemplo 6
//  (1)INDICE         0          1          2                   PRIMEIRO INDICE
//  (2)INDICE      0  1  2    0  1  2    0  1  2                SEGUNDO INDICE
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;                                   // outra forma de atribuir
console.log(lista3[2]);                                                     // outra forma de exibir
