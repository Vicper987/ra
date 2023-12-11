let nombre = prompt('Indique su nombre');

//alert('Hola como estas '+nombre);
/*
Swal.fire({
    title: "Bienvenido",
    text: `a nuestro sitio web! ${nombre}`,
    icon: "success"
  });
*/
//Capturando el elemento del DOM
//let titulo = document.getElementById('titulo');
//Cambiando el contenido del elemento capturado
//titulo.innerHTML += ' - '+nombre;
//Aplicando CSS al elemento capturado
// titulo.style.color = 'blue';
// titulo.style.textAlign = 'center';
// titulo.style.fontFamily = 'arial';
//Aplicando CSS por medio de clases
//titulo.classList.add('titulo');
//Aplicando eventos
//Capturando el elemento por medio de la clase - id - por etiqueta
//let botonVer = document.querySelector('.botonVer');

//Trabajando con Jquery
//Capturando el elemento
$('#titulo').css('color','red');
//Variando el contenido de los elementos
$('#titulo').html('Tenemos los mejores módelos de vehículos');
//Invocando el uso de eventos
$('#boton1').click(function(){
    Swal.fire({
        title: "Bienvenido",
        text: `a nuestro sitio web! ${nombre}`,
        icon: "success"
    }); 
})




let boton = document.querySelectorAll('.boton');
let producto = document.querySelectorAll('.producto');

boton[0].addEventListener('mouseover', function(){
    producto[0].style.backgroundColor = 'tomato';
    producto[0].style.color = 'white';
    titulo.innerHTML = ' Bienvenid@ a nuestro sitio web '+nombre;

})

boton[1].addEventListener('mouseover', function(){
    producto[1].style.backgroundColor = 'violet';
    producto[1].style.color = 'white';
    titulo.innerHTML = ' Espero que todo esto lo practiques '+nombre;

})


