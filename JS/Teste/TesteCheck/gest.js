function gest (){

    if (document.getElementById('semana').style.display && document.getElementById('texto-semanas').style.display && document.getElementById('check').style.display === "none"){
        document.getElementById('semana').style.display = "block";
        document.getElementById('check').style.display = "block";
        document.getElementById('texto-semanas').style.display = "block";
    }else{
        document.getElementById('semana').style.display = "none";
        document.getElementById('texto-semanas').style.display = "none";
        document.getElementById('check').style.display = "none";
        return
    }           
        
   }        