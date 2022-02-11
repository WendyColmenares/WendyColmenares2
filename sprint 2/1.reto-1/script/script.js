const moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina']; 
let form = document.querySelector('form')
let mensaje = document.querySelector("#resultado")

moneda.forEach(element => console.log(element))

function myOnLoad(){
    cargar_monedas()
}

function cargar_monedas(){
    addOptions('monedas', moneda)
    addOptions('monedas2',moneda)
}

function addOptions(domElement, moneda){
    var select = document.getElementsByName(domElement)[0];

    for (value in moneda){
        var option = document.createElement('option');
        option.text = moneda[value];
        select.add(option);
    }
}


form.addEventListener('submit', (obtener) =>{
    obtener.preventDefault();
    cantidad = parseInt(document.querySelector('#cantidad').value)
    var de = document.getElementById('cod').value
    var a = document.getElementById('cod2').value
    console.log(cantidad, de, a);
    //conversion de dolar a demas monedas
    if (de == moneda[1] && a == moneda[2]){ //dolar a peso mexicano
        var calculo = cantidad * 20.51
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} MXN`
        
    }else if(de == moneda[1] && a == moneda[3]){// dolar a perso colombiano
        var calculo = cantidad * 3935.15
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} COP`
    }
    else if(de == moneda[1] && a == moneda[4]){// dolar a euro
        var calculo = cantidad * 0.88
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} EUR`
    }
    else if(de == moneda[1] && a == moneda[5]){//dolar a libra esterlina
        var calculo = cantidad * 0.74
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} GBP`
    }
    //conversion de peso mexicano a demas monedas
    else if (de == moneda[2] && a == moneda[1]){//peso mexicano a dolar
        var calculo = cantidad * 0.049
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} USD`
    }else if(de == moneda[2] && a == moneda[3]){//peso mexicano a peso colombiano
        var calculo = cantidad * 192.16
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} COP`
    }
    else if(de == moneda[2] && a == moneda[4]){//peso mexicano a euro
        var calculo = cantidad * 0.043
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} EUR`
    }
    else if(de == moneda[2] && a == moneda[5]){// peso mexicano a libra esterlina
        var calculo = cantidad * 0.036
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} GBP`
    }
    //conversion de pesos colombianos a demas monedas
    else if (de == moneda[3] && a == moneda[1]){//peso colombiano a dolar
        var calculo = cantidad * 0.00025
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} USD`
    }else if(de == moneda[3] && a == moneda[2]){//peso colombiano a peso mexicano
        var calculo = cantidad * 0.0052
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} MXN`
    }
    else if(de == moneda[3] && a == moneda[4]){//peso colombiano a euro
        var calculo = cantidad * 0.00022
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} EUR`
    }
    else if(de == moneda[3] && a == moneda[5]){// peso colombiano a libra esterlina
        var calculo = cantidad * 0.00019
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} GBP`
    }
    //conversion de euros a demas monedas
    else if (de == moneda[4] && a == moneda[1]){//euro a dolar
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} USD`
        alert(calculo.toFixed(2))
    }else if(de == moneda[4] && a == moneda[2]){//euro a peso mexicano
        var calculo = cantidad * 23.40
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} MXN`
    }
    else if(de == moneda[4] && a == moneda[3]){//euro a peso colombiano
        var calculo = cantidad * 4495.89
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} COP`
    }
    else if(de == moneda[4] && a == moneda[5]){// euro a libra esterlina
        var calculo = cantidad * 0.84
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} GBP`
    }
    //conversion de libra esterlina a demas monedas
    else if (de == moneda[5] && a == moneda[1]){//libra esterlina a dolar
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} USD`
        alert(calculo.toFixed(2))
    }else if(de == moneda[5] && a == moneda[2]){//libra esterlina a peso mexicano
        var calculo = cantidad * 27.72
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} MXN`
    }
    else if(de == moneda[5] && a == moneda[3]){//libra esterlina a peso colombiano
        var calculo = cantidad * 5327.01
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} COP`
    }
    else if(de == moneda[5] && a == moneda[4]){// libra esterlina a euro
        var calculo = cantidad * 1.18
        mensaje.style.display = '';
        mensaje.textContent = `${calculo.toFixed(2)} EUR`
    }
    else if(de == moneda[1] && a == moneda[1] || de == moneda[2] && a == moneda[2] || de == moneda[3] && a == moneda[3] || de == moneda[4] && a == moneda[4] || de == moneda[5] && a == moneda[5]){
        mensaje.style.display = '';
        mensaje.textContent = `${cantidad}`}

     else if(de == moneda[0] && a == moneda[0]){
        mensaje.style.display = '';
        mensaje.textContent = `Seleccione la moneda que quiere convertir`}

       
    else{
        cantidad.isNaN('')
    }

})

/* 
function calcular(){
    var cantidad = {}
    
} */

/* function obtenerValor(){
    var cantidad = document.getElementById('cantidad').value
    obtenerValor.preventDefault();
    console.log(cantidad)
    
} */