
function meuEscopo(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');    

    const pessoas = [];
  
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //pessoas.push(nome, sobrenome, peso, altura);                                  // Forma que eu fiz (não acrscentava nos seguintes indices do array, apenas no indice 0)

        pessoas.push({                                                                  // Forma correta (desta forma ela acrescenta e exibe corretamente o conteudo do array)
           
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        });

        console.log(pessoas);

        console.log(nome.value, sobrenome.value, peso.value, altura.value);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}</p>
                                <p>Peso:${peso.value}</p>
                                <p>Altura:${altura.value}cm</p>`;
  
    }
    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();
