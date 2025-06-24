const form = document.getElementById("form")
console.log("Form encontrado:", form)

form.addEventListener("submit", function(e){
    e.preventDefault()

    const input = document.querySelector("input") // ✅ Crear variable input
    console.log("Input encontrado:", input)

    const busqueda = input.value.toLowerCase() // ✅ Usar la variable input
    console.log("Texto buscado:", busqueda)

    const productos = document.querySelectorAll(".product")
    console.log("Productos encontrados:", productos.length)

    productos.forEach(producto => {
        const nombreProducto = producto.querySelector("h3").textContent.toLowerCase()

        if (nombreProducto.includes(busqueda)){
            producto.style.display = "inline-block"
        } else {
            producto.style.display = "none"
        }
    })
})