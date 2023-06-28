var articulos = [
    {nombre:"Bici", costo:3000},
    {nombre:"TV", costo:2500},
    {nombre:"Libro",costo:10000},
    {nombre:"Celular",costo:5000},
    {nombre:"Teclado",costo:500},
    {nombre:"Mouse",costo:1000} 
];

var articulosFiltrados = articulos.filter(
    function(articulo){
        return articulo.costo <=1000
    }
);

console.log(articulosFiltrados)


var articulosFiltrados = articulos.map(
    function(articulo){
        return articulo.nombre
    }
);

console.log(articulosFiltrados)
/*
var encuentraArticulo = articulos.find(
    function(articulo){
        return articulo.nombre=="Mouse"
    }
);

console.log(encuentraArticulo)

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})


var articulosBaratos = articulos.some(
    function(articulo){
        return articulo<1000
    }
)*/