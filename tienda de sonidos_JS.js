const formulario =
document.getElementById("contact-form");

formulario.addEventListener("submit", function(e){

e.preventDefault();

const usuario =
document.getElementById("usuario").value;

const email =
document.getElementById("email").value;

const edad =
document.getElementById("edad").value;

const direccion =
document.getElementById("direccion").value;

const telefono =
document.getElementById("telefono").value;

const contrasena =
document.getElementById("contrasena").value;


// VALIDAR CAMPOS VACÍOS

if(

usuario === "" ||
email === "" ||
edad === "" ||
direccion === "" ||
telefono === "" ||
contrasena === ""

){

Swal.fire({

title:"Campos vacíos",

text:"Completa toda la información",

icon:"warning"

});

return;

}


// ALERTA DE REGISTRO EXITOSO

Swal.fire({

title:"Registro exitoso",

text:"Tus datos fueron enviados correctamente",

icon:"success",

confirmButtonText:"Aceptar"

}).then(() => {

formulario.submit();

});

});


// ALERTA BOTÓN RESET

document.querySelector("button[type='reset']")
.addEventListener("click", function(){

Swal.fire({

title:"Formulario reiniciado",

text:"Los datos fueron eliminados",

icon:"info"

});

});





function handleCredentialResponse(response){

console.log("JWT Token:", response.credential);

Swal.fire({

title:"Google OAuth",

text:"Inicio de sesión exitoso",

icon:"success"

});

}