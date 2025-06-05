

let form=document.getElementById("form")

let email= document.getElementById("email")

let calendary= document.getElementById("calendary")

let resultSubmit=document.getElementById("resultSubmit")
 console.log("email")

 console.log("calendary")

console.log("resultSubmit")

 form.addEventListener("submit",function(event) {
event.preventDefault()  
console.log(email.value)
console.log(calendary.value)
console.log(resultSubmit)
    resultSubmit.textContent = "Formulario Enviado"
 
email.value=""
calendary.value=""

})