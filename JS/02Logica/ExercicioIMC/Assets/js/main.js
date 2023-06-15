function meuEscopo(){

    const formNormal = document.querySelector('.form-normal');    
    const imc1 = document.querySelector('.imc1-normal');
    const imc2 = document.querySelector('.imc2-normal');
    const imc3 = document.querySelector('.imc3-normal');
    const imc4 = document.querySelector('.imc4-normal');
    const imc5 = document.querySelector('.imc5-normal');        
     
    document.getElementById('imc-gestacional').style.display = "none"
    
    
        function recebeEventoForm (evento) {
             evento.preventDefault();
        
            const inputPeso = formNormal.querySelector('.peso-normal');                                             
            const inputAltura = formNormal.querySelector('.altura-normal');  
                         
            
            const peso = Number(inputPeso.value);
            const altura = Number(inputAltura.value); 

            const calculo = peso / altura ** 2;
            

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
            
            
                                  
            if (!peso) { imc1.innerHTML = `<p><b>Peso inválido</b></p>`; 
            return
            }

            if (!altura){ imc1.innerHTML = `<p><b>Altura inválida</b></p>`;
            return
            }
           
            
            console.log ("Botão IMC Normal",peso, altura, calculo);

            //CALCULO NORMAL 
            
            if (calculo <= 18.5 ) baixoPeso();   
            if (calculo >= 18.5) pesoNormal();
            if (calculo >= 25) sobrePeso();
            if (calculo >= 30) obesidade1();
            if (calculo >= 35) obesidade2();
            if (calculo > 40) obesidade3();
            
            
        }   

    formNormal.addEventListener('submit', recebeEventoForm);
}

meuEscopo();