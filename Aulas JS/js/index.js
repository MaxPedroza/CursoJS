/*let num1 = prompt ('Digite o primeiro  número:');
let num2 = prompt ('Digite o segundo número:');

num1 = Number(num1);
num2 = Number(num2);

alert(`O Resultado é: ${num1 + num2}`);
*/

const nome = prompt('Digite seu Nome Completo');

document.body.innerHTML += `O seu nome é: ${nome} <br />`;
document.body.innerHTML += `O seu nome tem  ${nome.length}  letras.<br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `O primeiro indice da letra do seu nome é: ${nome.indexOf (nome.length 0)}<br />`;
document.body.innerHTML += `O ultimo indice da letra do seu nome é: ${nome.lastIndexOf(nome.length - 1)} <br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são:${nome.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são:${nome.split('')}<br />`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase}<br />`;
document.body.innerHTML += `Seu nome com letras minusculas:${nome.toLocaleLowerCase} <br />`;





