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



