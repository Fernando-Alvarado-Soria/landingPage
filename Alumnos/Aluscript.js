// Obtener la lista de carreras
const carreraList = document.getElementById("carreraList");

// Agregar un controlador de eventos de clic a la lista de carreras
carreraList.addEventListener("click", (e) => {
    if (e.target.classList.contains("carrera-item")) {
        // Si se hace clic en un elemento de carrera, alternar la visibilidad de las generaciones
        const generaciones = e.target.querySelector(".generaciones");
        if (generaciones.style.display === "none" || generaciones.style.display === "") {
            generaciones.style.display = "block";
        } else {
            generaciones.style.display = "none";
        }
    }
});
