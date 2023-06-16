// == Aula 17 == Arrays

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
