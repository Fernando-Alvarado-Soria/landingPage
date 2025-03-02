function mostrarHorario(carrera, grado) {
    const archivo = `Horarios/${carrera}/${grado}.jpg`;
  
    // Cargamos la imagen del horario
    document.querySelector('#horarios img').src = archivo;
    document.querySelector('#horarios img').style.display = 'block';
  }
  
  // Cuando el usuario hace clic en el botón "Ver"
  document.querySelector('#ver').addEventListener('click', function() {
    // Obtenemos la carrera y el grado seleccionados
    const carrera = document.querySelector('#carrera').value;
    const grado = document.querySelector('#grado').value;
  
    mostrarHorario(carrera, grado);
  });
    // Función para ocultar la imagen
    document.querySelector("#ocultar").addEventListener("click", function() {
    document.querySelector("#horarios img").style.display = "none";
    });
