let demo = document.getElementById("root");

document.addEventListener("DOMContentLoaded", submitForm, true);

function submitForm() 
{
    document.addEventListener("submit", e => {
        e.preventDefault();

        let name = validateName();
       if(!name) return false;

        let surname = validateSurname();
        if(!surname) return false;

       let dni = validateDni();
       if(!dni) return false;

        let direccion = validateDireccion();
        if(!direccion) return false;
        alert("procesar datos");
    });
    console.log("finish");
}

function validateName() 
{
    let name = document.getElementById("name"); 
    console.log('nombre ingresado:'+name.value);
    if(name.value == '') {
        alert("el nombre es requerido");
        name.focus();
        return false;
    } else if(name.value =='rosa'){    

    }else{
        return true;
    } 
}

function validateSurname()
{
    let surname = document.getElementById("surname");
    console.log('apellido ingresado:'+surname.value);
    if(surname.value == ''){
        alert("el apellido es requerido");
        surname.focus();
        return false;
    } else if(surname.value =='mendoza'){
        alert("el apellido incorrecto");
        surname.focus();
        return false;
    } else {
        return true;
    }

}

function validateDni()
{
    let dni = document.getElementById("dni");
    console.log('dni ingresado:'+dni.value);
    if(dni.value == ''){
        alert("el dni es requerido");
        dni.focus();
        return false;
    }else if(dni.value ==''){

    }else {
            return true;
    }
}

function validateDireccion()
{
    let direccion = document.getElementById("direccion");
    console.log('direccion ingresada:'+direccion.value);
    if(direccion.value ==''){
        alert("la direccion es requerida");
        direccion.focus();
        return false;
    }else if(direccion.value =='salguero'){
    
    }else {
        return true; 

    }
}