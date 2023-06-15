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
                imc2Gestacional.innerHTML = '';
                imc3Gestacional.innerHTML = '';                
                imc4Gestacional.innerHTML = '' ;
            }

            function baixoPeso(){
                imc1Gestacional.innerHTML = '';
                imc2Gestacional.innerHTML = '';
                imc3Gestacional.innerHTML = '';                
                imc4Gestacional.innerHTML = `<p> <b>${calculoGestacional.toFixed(2)} Seu IMC está baixo do peso!</b></p>`; 
            }
            function pesoNormal(){
                imc1Gestacional.innerHTML = '';
                imc3Gestacional.innerHTML = '';
                imc4Gestacional.innerHTML = '';                
                imc2Gestacional.innerHTML = `<p><b> ${calculoGestacional.toFixed(2)} Seu IMC está com peso Normal!</b></p>`;
            }
            function sobrePeso(){
                imc1Gestacional.innerHTML = '';
                imc2Gestacional.innerHTML = '';
                imc4Gestacional.innerHTML = '';                
                imc3Gestacional.innerHTML = `<p><b> ${calculoGestacional.toFixed(2)} Seu IMC está sobrepeso!</b></p>`;
            }                      
            function obesidade(){
                imc1Gestacional.innerHTML = '';
                imc2Gestacional.innerHTML = '';                
                imc3Gestacional.innerHTML = '';
                imc4Gestacional.innerHTML = `<p><b>${calculoGestacional.toFixed(2)} Seu IMC consta com Obesidade!</b></p>`;
            }
            
            if (!semana){ imc1Gestacional.innerHTML = `<p><b>Quantidade por semana inválida</b></p>`;
            limpa()
            return
            }else if (semana >= 43){ imc1Gestacional.innerHTML = `<p><b>Quantidade por semana muito elevada!</b></p>`;
            limpa()
            return
            }else if (!pesoGestacional) { imc1Gestacional.innerHTML = `<p><b>Peso inválido</b></p>`; 
            limpa()
            return
            }else if (!alturaGestacional){ imc1Gestacional.innerHTML = `<p><b>Altura inválida</b></p>`;
            limpa()
            return
            }          
                      
            
            

            //CALCULO GESTACIONAL LOGICA 1
            /* 
            // Baixo Peso
            if (semana <= 7 && calculoGestacional >= 20.0){
                baixoPeso()
            }else if (semana == 8 && calculoGestacional == 20.1){ 
                baixoPeso()
            }else if (semana <= 10 && calculoGestacional == 20.2){ 
                baixoPeso()
            }else if (semana >= 11  &&  calculoGestacional == 20.3){
                baixoPeso()
            }else if (semana <= 42 && calculoGestacional <= 25.0){ 
                baixoPeso()
            };
            
            // Peso Normal 
            if (semana <= 7 && calculoGestacional <= 24.9){
                pesoNormal();
            }else if (semana == 8 && calculoGestacional >= 20.2){
                pesoNormal();
            }else if (semana <= 10 && calculoGestacional <= 25.2){ 
                pesoNormal();
            }else if (semana >= 11 && calculoGestacional <= 25.3){
                pesoNormal();
            }else if (semana <= 42 && calculoGestacional <= 29.2  ){
                pesoNormal();
            };

            // Sobrepeso 
            if (semana <= 7 && calculoGestacional <= 30.0){
                sobrePeso()
            }else if (semana >= 8 && calculoGestacional >= 25.1){
                sobrePeso()
            }else if (semana <= 10 && calculoGestacional <= 30.2){
                sobrePeso()
            }else if (semana >= 11 && calculoGestacional <= 30.3){
                sobrePeso()
            }else if (semana <= 42 && calculoGestacional <= 33.2){
                sobrePeso()
            };

            // Obesidade 
            if (semana <= 7 && calculoGestacional >= 30.1){
                obesidade()
            }else if (semana >= 8 && calculoGestacional >= 30.2){
                obesidade()
            }else if (semana <= 10 && calculoGestacional >= 30.3){
                obesidade()
            }else if (semana >= 11 && calculoGestacional >= 30.4){
                obesidade()
            }else if (semana <= 42 && calculoGestacional >= 33.3){
                obesidade();
            };*/

            //CALCULO GESTACIONAL LOGICA 2
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

            if (semana <= 9 && calculoGestacional <= 20.1){
                console.log('<= 9 semanas, baixo peso'), baixoPeso();
            }else if (semana <= 9 && calculoGestacional <= 25.0){
                console.log('<= 9 semanas, peso normal'), pesoNormal;
            }else if (semana <= 9 && calculoGestacional <= 30.1){
                console.log('<= 9 semanas, sobre peso'), sobrePeso();
            }else if (semana <= 9 && calculoGestacional >= 30.2){
                console.log('<= 9 semanas, obesidade'), obesidade()
            }

            if (semana >= 10 && calculoGestacional <= 20.2){
                console.log('>= 10 semanas, baixo peso'), baixoPeso();
            }else if (semana >= 10 && calculoGestacional <= 25.2){
                console.log('>= 10 semanas, peso normal'), pesoNormal;
            }else if (semana >= 10 && calculoGestacional <= 30.2){
                console.log('>= 10 semanas, sobre peso'), sobrePeso();
            }else if (semana >= 10 && calculoGestacional >= 30.3){
                console.log('>= 10 semanas, obesidade'), obesidade();
            }

            if (semana >= 11 && calculoGestacional <= 20.3){
                console.log('>= 11 semanas, baixo peso'), baixoPeso();
            }else if (semana >= 11 && calculoGestacional <= 25.3){
                console.log('>= 11 semanas, peso normal '), pesoNormal;
            }else if (semana >= 11 && calculoGestacional <= 30.3){
                console.log('>= 11 semanas, sobre peso'), sobrePeso();
            }else if (semana >= 11 && calculoGestacional >= 30.4){
                console.log('>= 11 semanas, obesidade'), obesidade();
            }

            if (semana >= 42 && calculoGestacional <= 25.0){
                console.log('>= 42 semanas, baixo peso'), baixoPeso();
            }else if (semana >= 42 && calculoGestacional <= 29.2){
                console.log('>= 42 semanas, peso normal'), pesoNormal;
            }else if (semana >= 42 && calculoGestacional <= 33.2){
                console.log('>= 42 semanas, sobre peso'), sobrePeso();
            }else if (semana >= 42 && calculoGestacional >= 33.3){
                console.log('>= 42 semanas, obesidade'), obesidade();
            }
            
        }   

    formGestacional.addEventListener('submit', recebeEventoForm2);
}

meuEscopo2();