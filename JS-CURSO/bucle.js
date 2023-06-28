var estudiantes =["Jose","Jefferson","Daniel","Yeni"]

function saludar(estudiante){
    console.log(`Hola, ${estudiante}`)
}

/*
for(var i=0; i < estudiantes.length; i++){
    saludar(estudiantes[i])
}

for (var estudiante of estudiantes){
    saludar(estudiante)
}
*/

while(estudiantes.length > 0){
    var estudiante = estudiantes.pop()
    saludar(estudiante);
}