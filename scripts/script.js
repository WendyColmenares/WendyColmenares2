let imagen = document.querySelector('#contenedorImagen')
let seleccion = document.querySelector('#sabor');
let form = document.querySelector('#formulario')
let contenedor = document.querySelector('.contenedor');

seleccion.addEventListener('change', eleccionSabor);

function eleccionSabor(){
    let eleccion = seleccion.value;

    if(eleccion === '1'){
        imagen.innerHTML = `<img src="./imagenes/Durazno.png" style="width: 50px;">`;
    }else if (eleccion === '2'){
        imagen.innerHTML = `<img src="./imagenes/Parchita.png" style="width: 50px;">`;
    }else if (eleccion === '3'){
        imagen.innerHTML = `<img src="./imagenes/Sandia.png" style="width: 50px;">`;
    }else if (eleccion === '4'){
        imagen.innerHTML = `<img src="./imagenes/Kiwi.png" style="width: 50px;">`;
    }else{
        imagen.textContent = '';
    }

}

form.addEventListener('submit', (limpiar) => { 

    limpiar.preventDefault();
    contenedor.style.display = 'none';

    let nombre_Usuario = document.getElementById('nombre').value;
    let apellido_Usuario = document.getElementById('apellido').value;
    let direccion_Usuario = document.getElementById('direccion').value;
    let numero_Usuario = document.getElementById('numero').value;
    let helado_Usuario = document.getElementById('sabor').value;

    let factura_Usuario = {
        nombre: nombre_Usuario,
        apellido: apellido_Usuario,
        direccion: direccion_Usuario,
        numero: numero_Usuario,
        helado: helado_Usuario
    }
    
    document.getElementById("nombre_usu").innerHTML = factura_Usuario.nombre;
    document.getElementById("apellido_usu").innerHTML = factura_Usuario.apellido;
    document.getElementById("direccion_usu").innerHTML = factura_Usuario.direccion;
    document.getElementById("numero_usu").innerHTML = factura_Usuario.numero;
    document.getElementById("helado_usu").innerHTML = factura_Usuario.helado;
    console.log(factura_Usuario)
    
})

form.addEventListener('submit',mostrar);
function mostrar(){
    document.getElementById("contenedor2").style.display = 'block';
}
//contenedor.innerHTML = JSON.stringify(factura_Usuario) //`${factura_Usuario.nombre_Usuario}`
/* imagen.addEventListener('change', (event)=>{
        const sabor = document.querySelector('#contenedorImagen');
        if(imagen === '1'){
            sabor.innerHTML = `<img src="./imagenes/Durazno.png" style="width: 50px;">`;
 
        }else{
            sabor.textContent = alert(hola)
        }
        //sabor.textContent = `Te gusta el sabor ${event.target.value}`;
}) */