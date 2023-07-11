// == Aula 33 == Atribuição via desestruturação (Objetos)

/*                                  //Exemplo 1
const pessoa = {
    nome: 'Max',
    sobrenome: 'Pedroza',
    idade: 38,
    endereço:{
        rua: 'Dulce',
        numero: 53
    }
};

console.log(pessoa);                //exibe lista
console.log(pessoa.nome);            // exibe valor nome dentro da lista pessoa

const nome = pessoa.nome;           // atribuiu o valor nome da lista pessoa a uma constante            ATRIBUIÇÃO NORMAL
console.log(nome)                   // exibe a constante com atribuição do valor nome da lista pessoa
*/

/*                                  //Exemplo 2
const pessoa = {
    nome: 'Max',
    sobrenome: 'Pedroza',
    idade: 38,
    endereço:{
        rua: 'Dulce',
        numero: 53
    }
};

const {nome, sobrenome} = pessoa;           // atribuiu o valor nome da lista pessoa a uma constante            ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
console.log(nome, sobrenome);
*/

/*                                  // Exemplo 3
const pessoa = {                    
    nome: 'Max',
    sobrenome: 'Pedroza',
    idade: 38,
    endereco:{
        rua: 'Dulce',
        numero: 53
    }
};

const {endereco: {rua, numero }, endereco} = pessoa;           // atribuiu o valor nome da lista pessoa a uma constante            ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
console.log(rua, numero, endereco);
*/

/*                                  // Exemplo 4
const pessoa = {                    
    nome: 'Max',
    sobrenome: 'Pedroza',
    idade: 38,
    endereco:{
        numero: 53
    }
};

const {endereco: {rua: r = 'Rua Dulce', numero }, endereco} = pessoa;           // atribuiu o valor nome da lista pessoa a uma constante            ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
console.log(r, numero, endereco);
*/

const pessoa = {                    
    nome: 'Max',
    sobrenome: 'Pedroza',
    idade: 38,
    endereco:{
        numero: 53
    }
};

const {nome, ...resto} = pessoa;           // atribuiu o valor nome da lista pessoa a uma constante            ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
console.log(nome, resto);