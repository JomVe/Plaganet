function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;
 
    if(nombre == "" || email == "" || telefono == "" || mensaje == "") {
        alert('Todos los campos son obligatorios');
        return false;
    }
 
    return true;
}