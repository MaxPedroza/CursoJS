function meuEscopo(){

    const form = document.querySelector('.form');    
    const imc = document.querySelector('.imc');
        
        function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const inputPeso = form.querySelector('.peso');    
                                         
        const inputAltura = form.querySelector('.altura');  
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value); 
          
        const calculo = peso / altura ** 2;       
        
        console.log (peso, altura, calculo);
        //if (!calculo) imc.innerHTML = `<p> Informações Incorretas!</p>`;
        //imc.innerHTML = `<p> ${calculo.toFixed(2)}</p>`;
        //if (calculo.length == 0) imc.innerHTML = `<p>Informações inválidas!</p>`;
       // if (peso && altura ==0) console.log('info inv'); //imc.innerHTML = `<p> <b>${calculo.toFixed(2)}.</b>Informações inválidas!</p>`;
        if (calculo <= 18,5) imc.innerHTML = `<p> <b>${calculo.toFixed(2)}.</b>Seu IMC está baixo do peso!</p>`;
        if (calculo >= 18,5) imc.innerHTML = `<p> ${calculo.toFixed(2)}.Seu IMC está com peso Normal!</p>`;
        if (calculo >= 25) imc.innerHTML = `<p> ${calculo.toFixed(2)}.Seu IMC está sobrepeso!</p>`;
        if (calculo >= 30) imc.innerHTML = `<p> ${calculo.toFixed(2)}.Seu IMC está com Obesidade grau 1!</p>`;
        if (calculo >= 35) imc.innerHTML = `<p> ${calculo.toFixed(2)}.Seu IMC está com Obesidade grau 2!</p>`;
        if (calculo > 40) imc.innerHTML = `<p> ${calculo.toFixed(2)}.Seu IMC está com Obesidade grau 3!</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();