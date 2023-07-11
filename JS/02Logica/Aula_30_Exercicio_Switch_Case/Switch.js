/*function getDiaSemanaTexto (diaSemana){               //forma 1
    let diaSemanaTexto;

    switch (diaSemana){                                     
        case 0 :
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1 :
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2 :
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3 :
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4 :
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5 :
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6 :
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto=''
            return diaSemanaTexto
        }
}

function getMesTexto (mes){                                
    let mesTexto;

    switch (mes){
        case 0 :
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1 :
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2 :
            mesTexto = 'Março';
            return mesTexto;
        case 3 :
            mesTexto = 'Abril';
            return mesTexto;
        case 4 :
            mesTexto = 'Maio';
            return mesTexto;
        case 5 :
            mesTexto = 'Junho';
            return mesTexto;
        case 6 :
            mesTexto = 'Julho';
            return mesTexto;
        case 7 :
            mesTexto = 'Agosto';
            return mesTexto;
        case 8 :
            mesTexto = 'Setembro';
            return mesTexto;
        case 9 :
            mesTexto = 'Outubro';
            return mesTexto;
        case 10 :
            mesTexto = 'Novembro';
            return mesTexto;
        case 11 :
            mesTexto = 'Dezembro';
            return mesTexto; 
        default:
            mesTexto=''
            return mesTexto;
        }
}*/


function getDiaSemanaTexto (diaSemana){               //forma 2
    let diaSemanaTexto = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'];
    return diaSemanaTexto [diaSemana];
}

function getMesTexto (mes){                                 //forma 2
let mesTexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembo']
return mesTexto [mes];    
}

function zeroEsquerda(num){                 //função que adiciona zero a esquerda dos numeros menor que 10
    return num >=10 ? num :`0${num}`;
}

function formatoHora(data){
    const hora = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    return `${hora}:${min}`
}


const data = new Date();
const textodata = document.getElementById('texto');
const diaSemana = data.getDay();
const mes = data.getMonth();
const mesTexto = getMesTexto(mes);
const ano = data.getFullYear();
const hora = data.getHours();
const diaSemanaTexto = getDiaSemanaTexto (diaSemana);
const horaFormato = formatoHora(data);

textodata.innerHTML = `${diaSemanaTexto}, ${diaSemana} de ${mesTexto} de ${ano} ${horaFormato}`
