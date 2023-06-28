
function juego(valor1,valor2){
    if(valor1=="papel" && valor2=="tijeras"){
        console.log("El jugador 2 ha ganado")
    }else if(valor1=="piedra" && valor2=="papel"){
        console.log("El jugador 2 ha ganado")
    }else if(valor1=="tijeras" && valor2=="piedra"){
        console.log("El jugador 2 ha ganado")
    }else if(valor1===valor2){
        console.log("Empate")
    }
    else{
        console.log("El jugador 1 ha ganado")
    }

}