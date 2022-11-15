
const $verificarEdad = document.querySelector('#boton-ingresar');



$verificarEdad.onclick = function(){
    const nombreUsuario = document.getElementById('usuario-nombre').value;
    const apellidoUsuario = document.getElementById('usuario-apellido').value;
    console.log(apellidoUsuario,nombreUsuario);


    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    let verificacion;
    edadUsuario >= 18 ? verificacion= 'Bienvenido ' + nombreUsuario + apellidoUsuario : verificacion= 'No puedes pasar ' + nombreUsuario + apellidoUsuario; 
    document.getElementById("resultado").innerHTML = verificacion;
    document.getElementById('datos').innerHTML = 'Nombre: ' + nombreUsuario + ' , su apellido es: ' + apellidoUsuario + ' y su edad: ' + edadUsuario;
    console.log(verificacion);
    return false;
} 
