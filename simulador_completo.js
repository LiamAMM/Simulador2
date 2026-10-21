
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

guardarCliente = function () {
  let valorCedula = recuperaraTexto("txtCedula");
  let valorNombre = recuperaraTexto("txtNombre");
  let valorApellido = recuperaraTexto("txtApellido");
  let valorIngresos = recuperarFloat("txtIngresos");
  let valorEgresos = recuperarFloat("txtEgresos");

  let nuevoCliente = {};
  nuevoCliente.cedula = valorCedula;
  nuevoCliente.nombre = valorNombre;
  nuevoCliente.apellido = valorApellido;
  nuevoCliente.ingresos = valorIngresos;
  nuevoCliente.egresos = valorEgresos;

  clientes.push(nuevoCliente);
  alert("Cliente agregado con éxito");
  pintarClientes();
}

pintarClientes = function () {
  let cmpTabla = document.getElementById("tablaClientes");
  let contenidoTabla = "";
  let elementoCliente;

  for (let i = 0; i < clientes.length; i++) {
    elementoCliente = clientes[i];
    contenidoTabla += "<tr>" +
      "<td>" + elementoCliente.cedula + "</td>" +
      "<td>" + elementoCliente.nombre + "</td>" +
      "<td>" + elementoCliente.apellido + "</td>" +
      "<td>" + elementoCliente.ingresos + "</td>" +
      "<td>" + elementoCliente.egresos + "</td>" +
      "<td><button>Actualizar</button></td>" +
      "</tr>";
  }

  cmpTabla.innerHTML = contenidoTabla;
}

limpiarCliente = function () {
  mostrarTextoEnCaja("txtCedula", "");
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtIngresos", "");
  mostrarTextoEnCaja("txtEgresos", "");
}