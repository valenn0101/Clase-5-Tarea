
let verificacion;
function verificarEdad(edadUsuario){
    edadUsuario >= 18 ? verificacion= 'Bienvenido': verificacion= 'No puedes pasar'; 
    console.log(verificacion);
}



const $verificarEdad = document.querySelector('#boton-ingresar')

$verificarEdad.onclick = function(){
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    /*
    const nombreUsuario = Text(document.querySelector('#nombre-usuario').value);
    const apellidoUsuario = Text(document.querySelector('#apellido-usuario').value);
    */
    //const ingreso = verificarEdad(edadUsuario);
   // document.querySelector('#resultado') = ingreso;

    //console.log(ingreso);

    return false;
} 
