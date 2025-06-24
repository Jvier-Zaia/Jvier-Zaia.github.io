const calendary = document.getElementById("calendary");
const today = new Date().toISOString().split("T")[0]; 
document.getElementById("calendary").min = today;
console.log(today);

calendary.addEventListener("change", function(){
    const selectedDate = this.value;
    const dateObj = new Date(selectedDate);
    const dayWeek = dateObj.getDay();

}); 

const formCalendary= document.getElementById("form")
console.log("¿Existe el form?", formCalendary);

formCalendary.addEventListener("submit", function(e){
    const selectedDate = calendary.value;
    console.log("1. Fecha seleccionada:", selectedDate);
    
    const dateObj = new Date(selectedDate);
    console.log("2. Objeto Date:", dateObj);
    
    const dayWeek = dateObj.getDay();
    console.log("3. Día de la semana (6=domingo):", dayWeek);
    
    if(dayWeek === 6){
        e.preventDefault();
        console.log("4. ES DOMINGO - BLOQUEADO");
        alert("Sunday is a Invalid Date");
    } else {
        console.log("4. No es domingo, se puede enviar");
    }
});