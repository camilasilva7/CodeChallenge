//Obtengo el formulario por el ID.
const formulario = document.getElementById("formularioRegistro");
//Creo un evento para que al enviar el formulario ejecute esto.
formulario.addEventListener('submit', function(event) {
    event.preventDefault();


const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const fechaNacimiento = document.getElementById("fechaDeNacimiento").value;

//Almaceno los datos que se obtienen del formulario.
const datos = {
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento,
    };

    envioDatosAlServidor(datos);
});

function envioDatosAlServidor(data) {
    const url = 'https://jsonplaceholder.typicode.com/users';
    // Realizo la solicitud POST a la url.
    fetch(url, {
        method: 'POST',
        headers: {
            'Conten-Type':'application/json',
        },
        body: JSON.stringify(data),
    })
.then(function (response) {
    if(!response.ok) {
throw new Error ('Problema al enviar datos');
    }
    return response.json();
})
.then (function (data) {
    console.log("Respuesta del servidor:", data);
    alert("El servidor respondió" + JSON.stringify(data));
})
.catch(function (error) {
    console.error("Error;", error);
});
}


