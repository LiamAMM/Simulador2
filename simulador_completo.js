
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;

  
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios
ocultarSecciones = function () {
    let secciones = document.querySelectorAll("section");
    let elementoSeccion;
    for (let i = 0; i < secciones.length; i++) {
        elementoSeccion = secciones[i];
        elementoSeccion.classList.remove("activa");
    }
}

mostrarSeccion = function (id) {
    ocultarSecciones();
    let seccion = document.getElementById(id);
    if (seccion != null) {
        seccion.classList.add("activa");
    }
}

guardarTasa = function () {
    let valorTasa = recuperarFloat("tasaInteres");
    if (valorTasa >= 10 && valorTasa <= 20) {
        tasaInteres = valorTasa;
        mostrarTexto("mensajeTasa", "Tasa configurada correctamente: " + tasaInteres + "%");
    } else {
        mostrarTexto("mensajeTasa", "La tasa debe estar entre 10% y 20%");
    }
}