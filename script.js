function calculate(){
    let vitoria = document.getElementById("vitorias").value
    let derrota = document.getElementById("derrotas").value
    
    let saldoVitorias = (vitoria - derrota);
    let text=""   
    if (saldoVitorias<=10){
        text="O herói tem saldo de vitória de " + saldoVitorias + " e está no nível Ferro"
    } else if (saldoVitorias<=20){
        text="O herói tem saldo de vitória de " + saldoVitorias + " e está no nível Bronze"
    } else if (saldoVitorias<=50){
        text="O herói tem saldo de vitória de " + saldoVitorias + " e está no nível Prata"
    } else if (saldoVitorias<=80){
        text="O herói tem saldo de vitória de " + saldoVitorias + " e está no nível Ouro"
    } else if (saldoVitorias<=90){
        text="O herói tem saldo de vitória de " + saldoVitorias + " e está no nível Diamante"   
    } else if (saldoVitorias<=100){
        text="O herói tem saldo de vitória de " + saldoVitorias + " e está no nível Lendário"
    } else if (saldoVitorias>=101){
        text="O herói tem saldo de vitória de " + saldoVitorias + " e está no nível Imortal"
    }           
    
    document.getElementById("text_area").innerText=text
}