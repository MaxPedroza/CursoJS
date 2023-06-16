// == Aula 23 == Operadores Lógicos

/*

&& -> and -> E                              // todas as expressões precisam ser verdadeiras para retornar true
|| -> Or  -> Ou
!  -> Not -> Não

*/



const expressaoAnd = true && true && true && true;
console.log(expressaoAnd);

const expressaoOr = false|| true;
console.log(expressaoOr);


const usuario = 'Max';      //form ususario Digitou
const senha = '123456';     // form usaurio Digitou

const vaiLogar = usuario === 'Max' && senha === '123456';
console.log(vaiLogar);

console.log(!true);