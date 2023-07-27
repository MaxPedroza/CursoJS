// == Aula 25 ==   if, else if e else (estrutura condicional)

/*
Entre   0 - 11     = Bom dia 
Entre   12 - 17    = Boa tarde
Entre   18 - 23    = Boa noite
*/

const hora = 24;

if (hora >= 0 && hora <= 11){               // if pode ser usado sozinho
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {      // Else sempre vem acompanhado de if
    console.log('Boa tarde');    
} else if (hora >=18 && hora <= 23) {       // é possivel ter infinitos else if na condição
    console.log('Boa noite');
} else {                                    // Else só pode ter uma unica vez, no caso, no final. Caso eu tenho apenas duas condições poderia usar if e else.
    console.log('Horario fora de Padrão');
}

// == Aula 25 == if, else if e else (estrutura condicional) 2
/*

Revisao da aula 24, mesmo tema, com exercicios com numeros, apenas uma extensão da aula anterior.

Vide video 41. if, else if e else (2)

Obs.: caso em uma estrutura condicional haja mais de uma opção verdadeira, ela trara a primeira que encontrar no codigo

*/