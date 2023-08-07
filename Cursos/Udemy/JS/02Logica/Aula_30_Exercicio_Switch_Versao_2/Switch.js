const textoData = document.getElementById('texto');
const data = new Date();
textoData = data.toLocaleDateString('pt-BR', {dateStyle:'full', timeStyle:'short'});