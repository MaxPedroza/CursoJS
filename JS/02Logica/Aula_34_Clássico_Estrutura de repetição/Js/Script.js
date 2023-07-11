//== Aula 34 == Clássico - Estrutura de repetição

/*
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
*/

/*                                      // Exemplo 1
// i - index
for (let i = 0; i<=5; i++) {            // laço (for) cria uma index que exibe dentro da condição (variavel, condição, incremento), incrementai e exibe ate que atenda a necessidade da condição
    console.log(`Linha ${i}`);
}
*/

/*
// i - index                            // Exemplo 2
for (let i = 400; i<=500; i += 10) {            // laço (for) cria uma index que exibe dentro da condição (variavel, condição, incremento), incrementai e exibe ate que atenda a necessidade da condição
    console.log(`Linha ${i}`);
}
*/

/*
// i - index                            // Exemplo 3
for (let i = -100; i<=500; i += 10) {            // laço (for) cria uma index que exibe dentro da condição (variavel, condição, incremento), incrementai e exibe ate que atenda a necessidade da condição
    console.log(`Linha ${i}`);
}
*/

/*                                      // Exemplo 4
for (let i = 0; i <= 10; i ++) {            // laço (for) cria uma index que exibe dentro da condição (variavel, condição, incremento), incrementai e exibe ate que atenda a necessidade da condição
    const par = i % 2 ===0;
    console.log(i, par);
}
*/

/*                                      // Exemplo 5
for (let i = 0; i <= 10; i ++) {            // laço (for) cria uma index que exibe dentro da condição (variavel, condição, incremento), incrementai e exibe ate que atenda a necessidade da condição
    const par = i % 2 === 0 ? 'par': 'impar';
    console.log(i, par);
}
*/
const frutas = ['Maçã', 'Pera', 'Uva']

for (let i = 0; i < frutas.length; i ++) {            // Sera exibido ate o final do array independente de quanto de informação contem 
    console.log(`Indice ${i}`,frutas[i]);
}