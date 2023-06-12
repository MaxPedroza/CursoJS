const form = document.querySelector('#form');                // seleciona formulario

form.addEventListener('submit', function(e){                  // Cria uma funcção que desabilita o evento(submit/envio) botão
    e.preventDefault();                                       // previni que o padrão aconteça, no caso ele previne de que o botão nao faça o que é de padrao, que é enviar o conteudo do formulario
    const inputPeso = e.target.querySelector('#peso');        // pega informação do input peso e adiciona na constante 
    const inputAltura = e.target.querySelector('#altura');    // pega informação do input altura e adiciona na constante 
    
    const peso = Number(inputPeso.value);                     // converte o conteudo do input peso adicionado a constante inputpeso para numero e adiciona na constante peso
    const altura = Number(inputAltura.value);                 // converte o conteudo do input altura adicionado a constante inputaltura para numero e adiciona na constante altura

    if (!peso) {                                              // caso o input seja preenchio com texto ou nao seja preechido o programa passa por essa decisão
        setResultado('Peso Inválido', false);                 // envia mensagem de informação invalida, muda a cor do fundo
        return;                                               // encerra o programa
    }

    if(!altura){                                               // caso o input seja preenchio com texto ou nao seja preechido o programa passa por essa decisão
        setResultado('Altura Inválida', false);                // envia mensagem de informação invalida, muda a cor do fundo
        return;                                                // encerra o programa
        
    }

    const imc = getImc (peso, altura);                          // constante que atribui peso e altura para imc com função getImc
    const nivelImc = getNivelImc(imc);                          // constante que atribui função getNivelImc

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;              // constante que exibe mensagem do imc e nivel
   
    setResultado(msg, true);                                    // chama funcao setResultado

});

function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3'];
    if (imc>=39.9) return nivel [5];
    if (imc>=34.9) return nivel [4];
    if (imc>=29.9) return nivel [3];
    if (imc>=24.9) return nivel [2];
    if (imc>=18.5) return nivel [1];
    if (imc < 18.5) return nivel[0];    
}


function getImc (peso, altura){
    const imc = peso / altura** 2;
    return imc.toFixed(2);
}

function criaP (){                                                // Função cria paragrafo 
    const p = document.createElement('p');                        // cria uma constante para gerar um paragrafo p no html 
    //p.classList.add('paragrafo-resultado');                     // adiciona uma listsa de classes ao paragrafo, caso nao tenha uma uma classe com o nome paragrafo-resultado
    //p.innerHTML = `Conteudo`                                    // adiciona o controle do paragrafo a constante    
    return p;
}

function setResultado(msg, isValid){                            // Função para gerar msg na div resutlado
    const resultado = document.querySelector('#resultado');     // cria uma const para adicionar controle da div #resultado
    resultado.innerHTML = '';                                   // adciona controle da div no html na constante resultado

    
    const p = criaP();                                          // Adiciona a função criaP (linha #) para constante
    if (isValid) {        
        p.classList.add('paragrafo-resultado');
   
    }else {    
        p.classList.add('bad')
    }

       
    p.innerHTML = msg;
    resultado.appendChild(p);                                   // adiciona a constante resultado o paragrafo, sendo assim, pode adicionar a mensagem da linha 14 de p (paragrafo) para resultado da linha # (cosntante rsultado)
}