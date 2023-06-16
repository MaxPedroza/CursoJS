// == Aula 19  == Objetos - Basico


const array = [1,2,3];                          // Depois de declaro um array como constante nao pode retribui-la  novamente, se declarado como let seria possivel 
array.push (4);
array[0] = 'Max';                                // É possivel alterar o array normalmente
console.log(array);

const pessoax = {                               // Criando um objeto, para q nao seja necessario criar varias variaveis como:  nome, sobre nome etc... 

    nome: 'Max',
    sobrenome:'Pedroza',
    idade: 37
};

console.log(pessoax.nome);
console.log(pessoax.sobrenome);
console.log(pessoax.idade);


function criaPessoa (nome, sobrenome, idade) {           // Criar uma função facilita gerar inclusão de dados quando faz-se necessario muita informação dentro de uma unica variavel, como é o caso // nome sobre nome idade = Parametro

    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa ('Max', 'Pedroza', 37);          // 'max', 'pedroza', '37' = Argumento
const pessoa2 = criaPessoa ('Max', 'Oliveira', 11);
const pessoa3 = criaPessoa ('Elen', 'Silva', 36);
const pessoa4 = criaPessoa ('Nina', 'Pedroza', 3);


console.log(pessoa1.nome, pessoa1.sobrenome);


const pessoay = {                                                        // Quando uma funação esta dentro de um objeto é chamada de metodo

  nome: 'Max',
  sobrenome: 'Pedroza',
  idade: 37,
  fala (){                                                              // Funções e metodos executam ações

    console.log(`${this.nome} ${this.sobrenome} ${this.idade}`); 
  },                                                                    // Dentro do Objeto é possivel usar this para exebir as informações do objeto

    incrementaIdade () {

        this.idade++;
    }
}


pessoay.fala();
pessoay.incrementaIdade();
pessoay.fala();
