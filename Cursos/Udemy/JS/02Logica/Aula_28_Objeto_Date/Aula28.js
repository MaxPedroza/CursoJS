// == Aula 28 == Objeto Date
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date     referencia 
/*
//                   (ano mes dia hora minutos segundos e milisegundos) - é possivel omitir as informações a direita, só é possivel emitir ate o dia, se nao, entende-se que o ano é milionesimo de segundo
//const data = new Date(2023,5,20,15,14,27,500);          // Mes começa no zero (0 - Jan) //a, m, d, h, M, s, ms
const data = new date(0);                                //01/01/1970 Timestamp unix ou época unix. Valores anteriores a este, deve ser usado negativo
console.log(data.toString());
*/
/*
const tresHoras = 60 * 60 * 3 * 1000;                    // Altera a data por milesimo de segundo
const data = new Date(0 + tresHoras);                    // Date é uma função construtora, funções contrutoras começam com letra Maiuscula!
console.log(data.toString());
*/

/*
const tresHoras = 60 * 60 * 3* 1000;
const umDIa = 60 * 60 * 24 *1000;
const data = new Date(0 + tresHoras + umDIa);
*/
/*
const data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);    // Mês começa do zero 
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());   // 0 = Domingo, 6 = Sábado
console.log(data.toString());*/

function zeroEsquerda(num){                 //função que adiciona zero a esquerda dos numeros menor que 10
    return num >=10 ? num :`0${num}`;
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    const seg = zeroEsquerda(data.getSeconds())
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);