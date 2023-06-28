var carro={
    marca:"Toyota",
    color:"Rojo",
    millas:14500,
    modelo:"Camry",
    year:2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.year}`)
    }
};

function auto(marca,color,millas,modelo,year){
    this.marca = marca;
    this.color = color;
    this.millas = millas;
    this.modelo = modelo;
    this.year = year;
}

var autoNuevo = new auto("Kia","Red",5000,"Forte",2013);
console.log(autoNuevo);