// == Aula 18 == Funções


    //Exemplo 1

function soma (num1,num2) {

    const resultado1 = num1+num2;
    return resultado1;           // abaixo de Return nada mais era executado
    
}

const resultado = soma(2,2)     // A variavel resultado nao tem nada a ver com a variavel resultado dentro da função 
console.log(soma(2, 2));
console.log(soma(4, 2));
console.log(soma(2, 6));
console.log(resultado1);


    // Exemplo 2

function soma (num1 = 1,num2 = 1) {            // Caso eu defina um valor para as variaveis, elas poderao ser alteradas mais a frente, caso isso nao ocorra elas tem o valor definido no inicio 

    const resultado = num1+num2;
    return resultado;                           // abaixo de Return nada mais era executado
    
}

const resultado2 = soma(2)                       // Aqui apenas uma variavel assume o valor 2

console.log(resultado2);


    // Exemplo 3 de criação de Function

const raiz1 = function(n) {                      //declarada como constante

    return n ** 0.5;
};

console.log(raiz1(9));


// Exemplo 4 de criação de Function


const raiz2 =  n => n ** 0.5;                  // Arrow Function =>


console.log(raiz2(9));
