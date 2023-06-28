
const parrafito = document.querySelector('.parrafito');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('calcular');
const pResult = document.getElementById('resultado');
const formElement = document.getElementById('form');

btn.addEventListener('click',calcular)

function calcular(event){
    event.preventDefault();
    var resultado = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + resultado;
}



/*
h1.innerHTML = "Love";
h1.getAttribute('') 
const img = document.createElement('img');
img.setAttribute('src','https://th.bing.com/th/id/R.a4799b6d911dab7f38f4493f7a5e3c97?rik=ugGqN5Wt5VALag&pid=ImgRaw&r=0');
pid.append(img);*/