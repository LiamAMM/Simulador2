let clientes = [];
let creditos = [];

let tasaInteres = 15;
let clienteSeleccionado = null;
let cuotaCalculada = 0;
let montoCalculado = 0;
let plazoCalculado = 0;
let creditoAprobado = false;


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

buscarCliente = function (cedula) {
  let elementoCliente;
  let clienteEncontrado = null;
  for (let i = 0; i < clientes.length; i++) {
    elementoCliente = clientes[i];
    if (elementoCliente.cedula === cedula) {
      clienteEncontrado = elementoCliente;
      break;
    }
  }
  return clienteEncontrado;
}

seleccionarCliente = function (cedula) {
  let cliente = buscarCliente(cedula);
  if (cliente != null) {
    clienteSeleccionado = cliente;
    mostrarTextoEnCaja("txtCedula", cliente.cedula);
    mostrarTextoEnCaja("txtNombre", cliente.nombre);
    mostrarTextoEnCaja("txtApellido", cliente.apellido);
    mostrarTextoEnCaja("txtIngresos", cliente.ingresos);
    mostrarTextoEnCaja("txtEgresos", cliente.egresos);
  }
}

guardarCliente = function () {
  let valorCedula = recuperaraTexto("txtCedula");
  let valorNombre = recuperaraTexto("txtNombre");
  let valorApellido = recuperaraTexto("txtApellido");
  let valorIngresos = recuperarFloat("txtIngresos");
  let valorEgresos = recuperarFloat("txtEgresos");

  let clienteEncontrado = buscarCliente(valorCedula);

  if (clienteEncontrado == null) {
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.apellido = valorApellido;
    nuevoCliente.ingresos = valorIngresos;
    nuevoCliente.egresos = valorEgresos;

    clientes.push(nuevoCliente);
    alert("Cliente registrado con éxito");
  } else {
    clienteEncontrado.nombre = valorNombre;
    clienteEncontrado.apellido = valorApellido;
    clienteEncontrado.ingresos = valorIngresos;
    clienteEncontrado.egresos = valorEgresos;
    alert("Cliente actualizado con éxito");
  }

  clienteSeleccionado = null;
  pintarClientes();
  limpiar();
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
      "<td><button onclick=\"seleccionarCliente('" + elementoCliente.cedula + "')\">Actualizar</button></td>" +
      "</tr>";
  }

  cmpTabla.innerHTML = contenidoTabla;
}

limpiar = function () {
  mostrarTextoEnCaja("txtCedula", "");
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtIngresos", "");
  mostrarTextoEnCaja("txtEgresos", "");
  clienteSeleccionado = null;
}