/*==Aula 1==
Conteudo dentro do console

console.log('MaxPedroza'); //string Textos
console.log(123456); //Number Numeros,  não precisa de aspas, ele asume a variavel de acordo com o conteudo
*/
    /*Exercicio1, utilizando numero e string 

console.log('Meu nome é "Max". Estou aprendendo Java Script as', 20 ,'da noite');
*/

/*== Aula 2 == 
Comentarios

//duas barras (//) para comentarios em linha
/* Abrir e fechar barra com asterisco 
faz comentarios em bloco */

/* == Aula 3 ==
Definindo um caminho para o script 
podendo ser usado diretamente no html <script></script>
ou linkando atraves de um arquivo separado <script src="caminho do script"> </script>
*/

/*== Aula 4 ==
Variaveis - pode ser altarada durante o codigo por isso o nome variavel

let nome = "joão"; let é avariavel mais usada hoje em dia, mas ainda é possivel existir a var
Uma variavel só pode ser declarada uma unica vez, caso isso ocorra, de ser declarada mais de uma vez, o codigo gera um erro e para
Não podemos cirar variaveis com palavras reservadas, como por exemplo let, é uma palavra reservada pela linguagem 
É importante declarar variaveis com nomes significativos, nomeCliente ao invés de n, precisamos utlizar camelCase
As variaveis sao case sensitive, faz diferença maiuscula e minuscula 
Sempre utilizar let, var nao se altera durante o codigo
*/

/* == Aula 5 ==

Variavel constante

Não podemos criar constantes com palavras reservadas
Constante precisam ter nomes significativos
Não podemos começar o nome de uma constatnte com um numero 
Não podem conter espaços ou traços
Utilizamos camelCase
Case-sensitive
Não podemos modificar o valor de uma constante
Não Utilize var, utilize const

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

console.log(typeof (primeiroNumero)) // como saber o tipo de valor

*/


/* == Aula6 ==

Fazer calculo IMC e descobrir ano de nascilmento atraves de calculo

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

/* == Aula 7== 

Diferença entre Let e Var

ECMAScript 2015 (ES6) - recursos que foram adicionardos nessa versao ECMAScript (Java Script)

Var pode ser redeclarado 
Caso vc nao identifique o tirpo de variavel, a linguagem cria automaticamente um tipode variavel global, não é indicado usar variaves sem especificações.
*/

/* == Aula 8 == 

Tipos de dados primitivos
/Strings (Tipo de Strings)

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

Operadores Aritméticos

+ Adição / Concatenação e Incremento

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

// == Aula 11 == Exercicio

// == Aula 12 == STRING

// quando é preciso usar aspas dentro de uma string
/*
let umaString = "Um \"TEXTO\""; 
let umaString2 = 'Um "TEXTO"';

console.log(umaString);
console.log(umaString2);

// É possivel exibir apenas um caracter de uma string 

console.log(umaString[4]); // posição 4
*/
/*

0123456789 - posição do caracter
Um "Texto"

*/
/*
console.log(umaString[10]); // quando colocamos uma posição inexistente ou negativa temos: undefined

console.log(umaString.charAt(4)); // outra forma de exibir a posição do caracter
*/

// existem muitas funções para string, para saber mais vide a aula 24

// == Aula 14 == Numeros


// == Auula 15 == Math

// == Aula 16 == Exercicio com mumeros e texto utilizando js no html vide exercicio 16

/*
//let numero = prompt('Digite um número');                                                          // Inseri uma variavel que Cria um input para digitar uma informação
//numero = Number(numero);                                                                          // Converte a string do input para number

const numero = Number(prompt('Digite um número'));                                                  // Outra forma de fazer a conversao do input
const numeroTitulo = document.getElementById('numero-titulo');                                      // Variavel que seleciona dentro do html o elemento "numero-titulo"
const texto = document.getElementById('texto');                                                     // Variavel que seleciona dentro do html o elemento "texto"


numeroTitulo.innerHTML = numero;                                                                    // Exibe o numero digitado na constante "numero" dentro do titulo html

texto.innerHTML = '';                                                                               // Limpa o texto no html para adicionar os seguintes

texto.innerHTML += `<p>Raiz quadrada: <i>${numero ** 0.5}</i>.</p>`;                                // Exibe a instring digitada na constante "texto" dentro do texto html
texto.innerHTML += `<p>${numero} é inteiro? - <i>${Number.isInteger(numero)}</i>.</p>`;
texto.innerHTML += `<p>É NaN? - <i>${Number.isNaN(numero)}</i>.</p>`;
texto.innerHTML += `<p>Seu número arredondado pra baixo é: <i>${Math.floor(numero)}</i>.</p>`;
texto.innerHTML += `<p>Seu número arredondado pra cima é: <i>${Math.ceil(numero)}</i>.</p>`;
texto.innerHTML += `<p>Seu número com duas casas decimais é: <i>${numero.toFixed(2)}</i>.</p>`;
*/

// == Aula 17 == Arrays
/*
//Exemplo de array

//            01234567891011
//const nome = 'Max Pedroza'                  //Variavel com um unico nome

//               0      1       2
const nomes = ['Max', 'Elen', 'Nina'];                                               // Variavel utilizando array com varios nomes
//console.log(nomes);                                                                // exibindo array

//console.log(nome [0]);                                                             // exibe o indice 0 da string, lembrando que o primeiro indice começa com zero    
//console.log(nomes [0]);                                                            // exibe o indice 0 da array, mesmo caso que da string

//nomes[0] = 'Max Pedroza';                                                          // Alterando informação do indice 0 da array

//console.log(nomes);                                                                // Exibe(array completa) a ultima alteração
//console.log(nomes[0])                                                              // Exibe(array indice 0) a ultima alteração

//nomes [3] = 'Max'                                                                  // Adiciono conteudo ao indice 3, que antes nao existia
//console.log(nomes);                                                                // Exibe(array completa) a ultima alteração



nomes[nomes.length] = 'Rivaldo';                                                     // Outra forma de adicionar (Adicionar no fim)
nomes[nomes.length] = 'Eliude';                                                      //          --//--

//nomes.push('café');                                                                // Outra forma de adicionar (Adiciona no fim)

//nomes.unshift('Max Pedroza');                                                      // Adicionar no inicio da array

//const removeUltimo = nomes.pop();                                                  // Retira o ultimo da lista
//const removePrimeiro = nomes.shift();                                              // Retira o primeiro da lsita

delete nomes [1];                                                                    // Deleta um indice, usando delete o indice fica vazio

console.log(`Esse é o conteudo da sua lista: ${nomes} `);                                                                  // Exibe o array
console.log(`O tamanho do array é de: ${nomes.length} índices.`);                    // Exibe o tamanho do Array
//console.log(removePrimeiro);
//console.log(removeUltimo);

//console.log(nomes.slice(0,-2));                                                    // Exibe parte da array, omitindo os dois ultimos nomes da lista (-2)
//console.log(typeof nomes);                                                           // Exibe o que é a variavel (object)
//console.log(nomes instanceof Array);                                                 // Exibe se a variavel é um array (true ou false)
*/

// == Aula 18 == Funções

// == Aula 19  == Objetos - Basico

// == Aula 20 == Tipo de Dados 

/* 
Primitivos (imutaveis) = String, Number, boolean, undefined, null (bigint, symbol)

Referencia (Mutavel) = Array, Object e Function
Importante assistir video 33 (resumo)

*/

