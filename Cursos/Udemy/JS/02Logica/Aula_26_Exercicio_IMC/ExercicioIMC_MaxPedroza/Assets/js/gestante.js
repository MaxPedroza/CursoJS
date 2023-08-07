function meuEscopo2(){

    const formGestacional = document.querySelector('.form-gestacional');    
    const imc1Gestacional = document.querySelector('.imc1-gestacional');
    const imc2Gestacional = document.querySelector('.imc2-gestacional');    
    const imc3Gestacional = document.querySelector('.imc3-gestacional');
    const imc4Gestacional = document.querySelector('.imc4-gestacional');        
     
          
    
        function recebeEventoForm2 (evento2) {
             evento2.preventDefault();
        
            const inputPesoGestacional = formGestacional.querySelector('.peso-gestacional');                                             
            const inputAlturaGestacional = formGestacional.querySelector('.altura-gestacional');  
            const inputSemanas = formGestacional.querySelector('.semana');              
            
            const pesoGestacional = Number(inputPesoGestacional.value);
            const alturaGestacional = Number(inputAlturaGestacional.value); 
            const semana = Number(inputSemanas.value);

            const calculoGestacional = pesoGestacional / alturaGestacional ** 2;

            function limpa(){                
                imc1Gestacional.innerHTML = '';
                imc2Gestacional.innerHTML = '';
                imc3Gestacional.innerHTML = '';                
                imc4Gestacional.innerHTML = '' ;                
            }

            function baixoPeso(){
                limpa();                               
                imc4Gestacional.innerHTML = `<p> <b>${calculoGestacional.toFixed(2)} Seu IMC está baixo do peso!</b></p>`; 
            }
            function pesoNormal(){
                limpa();                                
                imc2Gestacional.innerHTML = `<p><b> ${calculoGestacional.toFixed(2)} Seu IMC está com peso Normal!</b></p>`;
            }
            function sobrePeso(){
                limpa();                                
                imc3Gestacional.innerHTML = `<p><b> ${calculoGestacional.toFixed(2)} Seu IMC está sobrepeso!</b></p>`;
            }                      
            function obesidade(){
                limpa();                
                imc4Gestacional.innerHTML = `<p><b>${calculoGestacional.toFixed(2)} Seu IMC consta com Obesidade!</b></p>`;
            }
            
            if (!semana){ limpa(), imc1Gestacional.innerHTML = `<p><b>Quantidade por semana inválida</b></p>`;            
            return
            
            }else if (semana >= 43){ limpa(), imc1Gestacional.innerHTML = `<p><b>Quantidade por semana muito elevada!</b></p>`;            
            return

            }else if (!pesoGestacional) { limpa(), imc1Gestacional.innerHTML = `<p><b>Peso inválido</b></p>`;
            return

            }else if (!alturaGestacional){ limpa(), imc1Gestacional.innerHTML = `<p><b>Altura inválida</b></p>`;            
            return
            }                              
            
            //CALCULO GESTACIONAL
            console.log ("IMC Gestacional", semana, pesoGestacional, alturaGestacional, calculoGestacional);
            if (semana <= 7 && calculoGestacional <= 19.9){
                console.log('<= 7 semanas, baixo Peso'), baixoPeso();
            }else if (semana <= 7 && calculoGestacional < 25.0){
                console.log('<= 7 semanas, peso normal'), pesoNormal();
            }else if(semana <= 7 && calculoGestacional <= 30.0){
                console.log('<= 7 semanas, sobre peso'), sobrePeso();
            }else if (semana <= 7 && calculoGestacional > 30.1){
                console.log('<= 7 semanas, obesidade'), obesidade();
            }

            if (semana >=8 && semana <= 9 && calculoGestacional <= 20.1){
                console.log('>=8 e <= 9 semanas, baixo peso'), baixoPeso();
            }else if (semana >=8 && semana <= 9 && calculoGestacional <= 25.0){
                console.log('>=8 e <= 9 semanas, peso normal'), pesoNormal();
            }else if (semana >=8 && semana <= 9 && calculoGestacional <= 30.1){
                console.log('>=8 e <= 9 semanas, sobre peso'), sobrePeso();
            }else if (semana >=8 && semana <= 9 && calculoGestacional >= 30.2){
                console.log('>=8 e <= 9 semanas, obesidade'), obesidade()
            }

            if (semana == 10 && calculoGestacional <= 20.2){
                console.log('= 10 semanas, baixo peso'), baixoPeso();
            }else if (semana == 10 && calculoGestacional <= 25.2){
                console.log('= 10 semanas, peso normal'), pesoNormal();
            }else if (semana == 10 && calculoGestacional <= 30.2){
                console.log('= 10 semanas, sobre peso'), sobrePeso();
            }else if (semana == 10 && calculoGestacional >= 30.3){
                console.log('= 10 semanas, obesidade'), obesidade();
            }

            if (semana >= 11 && semana <=41 && calculoGestacional <= 20.3){
                console.log('>= 11 e <=41 semanas, baixo peso'), baixoPeso();
            }else if (semana >= 11 && semana <=41 && calculoGestacional <= 25.3){
                console.log('>= 11 e <=41 semanas, peso normal '), pesoNormal();
            }else if (semana >= 11 && semana <=41 && calculoGestacional <= 30.3){
                console.log('>= 11 e <=41 semanas, sobre peso'), sobrePeso();
            }else if (semana >= 11 && semana <=41 && calculoGestacional >= 30.4){
                console.log('>= 11 e <=41 semanas, obesidade'), obesidade();
            }

            if (semana == 42 && calculoGestacional <= 25.0){
                console.log('= 42 semanas, baixo peso'), baixoPeso();
            }else if (semana == 42 && calculoGestacional <= 29.2){
                console.log('= 42 semanas, peso normal'), pesoNormal();
            }else if (semana == 42 && calculoGestacional <= 33.2){
                console.log('= 42 semanas, sobre peso'), sobrePeso();
            }else if (semana == 42 && calculoGestacional >= 33.3){
                console.log('= 42 semanas, obesidade'), obesidade();
            }
            
        }   

    formGestacional.addEventListener('submit', recebeEventoForm2);
}

meuEscopo2();