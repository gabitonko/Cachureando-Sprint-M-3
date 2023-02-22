// Obtener la tabla donde se mostrará la boleta
const tablaBoleta = document.getElementById('tabla-boleta');

// Recorrer los elementos del carrito
carrito.forEach((item) => {
  // Crear una nueva fila en la tabla
  const nuevaFila = document.createElement('tr');

  // Agregar las celdas correspondientes para la cantidad, nombre, precio y subtotal
  const celdaCantidad = document.createElement('td');
  celdaCantidad.textContent = item.cantidad;
  nuevaFila.appendChild(celdaCantidad);

  const celdaNombre = document.createElement('td');
  celdaNombre.textContent = item.nombre;
  nuevaFila.appendChild(celdaNombre);

  const celdaPrecio = document.createElement('td');
  celdaPrecio.textContent = `${item.precio}${divisa}`;
  nuevaFila.appendChild(celdaPrecio);

  const celdaSubtotal = document.createElement('td');
  const subtotal = item.cantidad * item.precio;
  celdaSubtotal.textContent = `${subtotal}${divisa}`;
  nuevaFila.appendChild(celdaSubtotal);

  // Agregar la nueva fila a la tabla
  tablaBoleta.appendChild(nuevaFila);
});

// Agregar las filas correspondientes para el IVA, el precio bruto y el costo de envío
// ...

// Mostrar la boleta en el HTML
// ...

const itemsBoleta = []; // Array que contendrá los items y precios para la boleta
const contenedorBoleta = document.getElementById('boleta'); // Contenedor donde se mostrará la boleta

carrito.forEach(item => {
  const miItem = baseDeDatos.filter(elemento => elemento.id === parseInt(item));
  const numeroUnidadesItem
