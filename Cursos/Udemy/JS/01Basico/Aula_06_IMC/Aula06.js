 //== Aula6 ==

//Fazer calculo IMC e descobrir ano de nascilmento atraves de calculo

const nome = 'Max';
const sobreNome = 'Pedroza';
const idade = 37;
const altura = 1.7;
const peso = 85;

let imc; // imc = peso / (altura*altura)
let anoNascimento; // ano atual - idade

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

// template string, voce pode usar crase (`)e adicionar cifrão e chaves (${}) as variaves 

console.log (nome, sobreNome);
console.log (`Nasceu em ${anoNascimento}, tem ${idade}, pesa ${peso}Kg e mede ${altura} de altura.`);
console.log(`Seu IMC é: ${imc}.`);
