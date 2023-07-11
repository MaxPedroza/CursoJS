// == Aula 31 == Diferença entre var, let e const
/*              //Exemplo1
let nome = 'Max';
var nome2 = 'max';

let nome = 'pedroza';        // não é possivel declarar nome duas vezes utilizando let
var nome2 = 'pedroza';       // ja em var é posivel atribuir outro valor
*/

/*              //Exemplo2
const verdadeira = true

let nome = 'Max';
var nome2 = 'Pedroza';

if (verdadeira){
    let nome = 'Maxwell'                // Let tem escopo de bloco {... bloco} se let esta dentro de um bloco ela atribui como uma nova variavel, embora possua o mesmo titulo
    console.log(nome, nome2);

    if (verdadeira){                    // Bloco alinhado         
        console.log('OK');              // o Engine busca a variavel de bloco em bloco (de dentro pra fora) ate encontrar o valor da variavel pelo titulo 
    }
}
*/

/*              //Exemplo3

const verdadeira = true

let nome = 'Max';
var nome2 = 'Pedroza';

//var nome2 = 'Souza';                    // utilizando var  nome2 foi redeclarado

if (verdadeira){
    let nome = 'Maxwell'                // Let tem escopo de bloco {... bloco} se let esta dentro de um bloco ela atribui como uma nova variavel, embora possua o mesmo titulo
    var nome2 = 'Souza';                    // utilizando var  nome2 foi redeclarado
    console.log(nome, nome2);

    if (verdadeira){                    // Bloco alinhado 
        var nome2 = 'Souza';                    // utilizando var  nome2 foi redeclarado
        let nome = 'outro nome'        
        console.log(nome, nome2);              // o Engine busca a variavel de bloco em bloco (de dentro pra fora) ate encontrar o valor da variavel pelo titulo 
    }
}

console.log(nome, nome2);
*/

/*              //Exemplo4

function falaOi (){
    
    var sobrenome = 'Pedroza'           //nao pode ser usado fora da função
    console.log(sobrenome);
}
falaOi();
*/

console.log(sobrenome);             // tetando exibir antes criar a variavel

var sobrenome = 'Pedroza';          // hosting, elevação de variavel, utilizando var nao da erro, mas retorna undefined, var nao da hosting, ja com let retorna erro
