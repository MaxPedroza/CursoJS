function meuEscopo(){

    const form = document.querySelector('.form');    
    const imc1 = document.querySelector('.imc1');
    const imc2 = document.querySelector('.imc2');
    const imc3 = document.querySelector('.imc3');
    const imc4 = document.querySelector('.imc4');
    const imc5 = document.querySelector('.imc5');
   
   
        
     
    document.getElementById('semana').style.display = "none";
    document.getElementById('texto-semanas').style.display = "none";     
        
       

        
    
        function recebeEventoForm (evento) {
             evento.preventDefault();
        
            const inputPeso = form.querySelector('.peso');                                             
            const inputAltura = form.querySelector('.altura');  
            const inputSemanas = form.querySelector('.semana');  
               
            
            const peso = Number(inputPeso.value);
            const altura = Number(inputAltura.value); 
            const semana = Number(inputSemanas.value);

            function baixoPeso(){
                imc1.innerHTML = '';
                imc2.innerHTML = '';
                imc3.innerHTML = '';
                imc4.innerHTML = '';
                imc5.innerHTML = `<p> <b>${calculo.toFixed(2)} Seu IMC está baixo do peso!</b></p>`; 
            }
            function pesoNormal(){
                imc1.innerHTML = '';
                imc3.innerHTML = '';
                imc4.innerHTML = '';
                imc5.innerHTML = '';
                imc2.innerHTML = `<p><b> ${calculo.toFixed(2)} Seu IMC está com peso Normal!</b></p>`;
            }
            function sobrePeso(){
                imc1.innerHTML = '';
                imc3.innerHTML = '';
                imc4.innerHTML = '';
                imc5.innerHTML = '';
                imc2.innerHTML = `<p><b> ${calculo.toFixed(2)} Seu IMC está sobrepeso!</b></p>`;

            }
            function obesidade1(){
                imc1.innerHTML = '';
                imc2.innerHTML = '';
                imc4.innerHTML = '';
                imc5.innerHTML = '';
                imc3.innerHTML = `<p><b> ${calculo.toFixed(2)} Seu IMC está com Obesidade grau 1!</b></p>`;
            }
            function obesidade2(){
                imc1.innerHTML = '';
                imc2.innerHTML = '';
                imc3.innerHTML = '';
                imc5.innerHTML = '';
                imc4.innerHTML = `<p><b>${calculo.toFixed(2)} Seu IMC está com Obesidade grau 2!</b></p>`;
            }
            function obesidade3(){
                imc1.innerHTML = '';
                imc2.innerHTML = '';
                imc3.innerHTML = '';
                imc4.innerHTML = '';
                imc5.innerHTML = `<p><b>${calculo.toFixed(2)} Seu IMC está com Obesidade grau 3!</b></p>`;
            }


            
            const calculo = peso / altura ** 2;
                                  
            if (!peso) { imc1.innerHTML = `<p><b>Peso inválido</b></p>`; 
            return
            }

            if (!altura){ imc1.innerHTML = `<p><b>Altura inválida</b></p>`;
            return
            }
            /*
            if (!semana){ imc1.innerHTML = `<p><b>Quantidade por semana inválida</b></p>`;
            return
            }
            */
            
            console.log (semana, peso, altura, calculo);
            /*
            if (calculo <= 18.5 ) baixoPeso();   
            if (calculo >= 18.5) pesoNormal();
            if (calculo >= 25) sobrePeso();
            if (calculo >= 30) obesidade1();
            if (calculo >= 35) obesidade2();
            if (calculo > 40) obesidade3();*/
            
            /* Caculo Gestacional  - 6 samanas abaixo de 20 = baixo peso*/
             /*  semana <7 = 19,9 bp
                semana >= 8 = 20,1 bp
                semana <=10 = 20,2 bp
                semana = 11 = 20,3 bp
                semana <= 42 = 25,0 bp*/

            // Baixo Peso
            if (calculo <= 19.9 && semana <=7) baixoPeso();
            if (calculo == 20.1 && semana >= 8) baixoPeso();
            if (calculo == 20.2 && semana <= 10) baixoPeso();
            if (calculo == 20.3 && semana <= 11) baixoPeso();
            if (calculo == 25.0 && semana <= 42) baixoPeso();

            // Peso Normal 
            if (calculo >=20.0 && calculo <= 24.9 && semana <=7) pesoNormal();
            if (calculo >=20.2 && calculo <= 25.0 && semana >= 8) pesoNormal();
            if (calculo >=20.3 && calculo <= 25.2 && semana <= 10 ) pesoNormal();
            if (calculo >=20.4 && calculo <= 25.3 && semana <= 11 ) pesoNormal();
            if (calculo >=25.1 && calculo <= 29.2 && semana <= 42 ) pesoNormal();
        }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();