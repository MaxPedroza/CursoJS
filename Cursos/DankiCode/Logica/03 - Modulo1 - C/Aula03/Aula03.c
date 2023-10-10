int main() {
    // Verifica horario do cinema
    
    int hora_cinema = 20;
    int hora_atual = 20;
    
    if(hora_atual > hora_cinema + 30){
        printf("Passou do tempo limite, não pode entrar!");       
    }else if(hora_atual < hora_cinema - 30){
        printf("Filme ainda nao começou");
    }else{
        printf("Pode Entrar!");
    }

    return 0;
}