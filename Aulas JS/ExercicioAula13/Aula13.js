// == Aula 13 == Exercicio String (Manipulando String)

const nome = prompt('Digite seu Nome Completo');

document.body.innerHTML += `O seu nome é: ${nome} <br />`;
document.body.innerHTML += `O seu nome tem  ${nome.length}  letras.<br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `O primeiro indice da letra do seu nome é: ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `O ultimo indice da letra do seu nome é: ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são:${nome.slice(-3, nome.length)} <br />`;
document.body.innerHTML += `As palavras do seu nome são:${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase ()}<br />`;
document.body.innerHTML += `Seu nome com letras minusculas:${nome.toLocaleLowerCase ()} <br />`;
