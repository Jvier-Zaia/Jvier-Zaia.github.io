const emails = ["javierzaia34@gmail.com", "javier.email", "zaiajav@gmail.com", "zaia.correo"];

// Corregido: Cambié el nombre del parámetro de 'emails' a 'email' para evitar confusión
emails.forEach(function(email) {
    if (email.includes("@")) {
        console.log(`${email} ✓ email válido`);
    } else {
        console.error(`${email} ✗ email inválido`);
    }
});

const formEmail = document.getElementById("form");
const Email = document.getElementById("Email");

// Agregado preventDefault para evitar que se envíe el formulario
formEmail.addEventListener("submit", (event) => {
     const valueEmail = Email.value;
    
    if (valueEmail.includes("@")) {
        console.log("es un correo válido");
    } else {
        console.log("es un correo inválido");
    }
    console.log("Formulario enviado");
});
















