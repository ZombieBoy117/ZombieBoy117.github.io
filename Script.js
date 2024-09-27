    var carrito = [];
    var totalProductos = 0;

// Función para mostrar/ocultar la ventana de categorías
function toggleCategorias() {
    var categoriasVentana = document.getElementById('categorias-ventana');
    categoriasVentana.style.display = categoriasVentana.style.display === 'none' || categoriasVentana.style.display === '' ? 'block' : 'none';
}

// Oculta la ventana de categorías
function ocultarCategorías() {
  var categoriasVentana = document.getElementById('categorias-ventana');
  categoriasVentana.style.display = 'none';
}

// Función para agregar productos al carrito
function agregarAlCarrito(producto, precio) {
    carrito.push({producto, precio});
    totalProductos++;
    actualizarCarrito();
    animarCarrito();
}

// Elimina un producto del carrito
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1); // Elimina el producto en la posición del índice
    totalProductos--;
    actualizarCarrito();
    mostrarCarrito();
}

// Actualiza la cantidad de productos en el carrito
function actualizarCarrito() {
    var carritoButton = document.getElementById('carrito-button');
    carritoButton.innerHTML = 'Carrito 🛒 (' + totalProductos + ')';
}

// Muestra la ventana emergente con los productos del carrito
function mostrarCarrito() {
    var carritoVentana = document.getElementById('carrito-ventana');
    var productosCarrito = document.getElementById('productos-carrito');
    var totalPrecio = 0;

    productosCarrito.innerHTML = ''; // Limpia el contenido actual

    carrito.forEach(function(item, index) {
        productosCarrito.innerHTML += '<p>' + item.producto + ' - $' + item.precio.toFixed(2) + ' Mxn <button onclick="eliminarDelCarrito(' + index + ')">Eliminar</button></p>';
        totalPrecio += item.precio;
    });

    // Calcular IVA del 5%
    var iva = totalPrecio * 0.05;
    var totalConIva = totalPrecio + iva;

    productosCarrito.innerHTML += '<p><strong>Subtotal:</strong> $' + totalPrecio.toFixed(2) + ' Mxn</p>';
    productosCarrito.innerHTML += '<p><strong>IVA (5%):</strong> $' + iva.toFixed(2) + ' Mxn</p>';
    productosCarrito.innerHTML += '<p><strong>Total:</strong> $' + totalConIva.toFixed(2) + ' Mxn</p>';

    carritoVentana.style.display = 'block';
}

// Animación al agregar productos al carrito
function animarCarrito() {
    var carritoButton = document.getElementById('carrito-button');
    carritoButton.classList.add('animar');
    setTimeout(function() {
        carritoButton.classList.remove('animar');
    }, 1000);
}

// Oculta la ventana del carrito
function ocultarCarrito() {
    var carritoVentana = document.getElementById('carrito-ventana');
    carritoVentana.style.display = 'none';
}

// Muestra la ventana de inicio de sesión
function mostrarLogin() {
    var loginVentana = document.getElementById('login-ventana');
    loginVentana.style.display = 'block';
}

// Muestra la ventana de registro
function mostrarRegistro() {
    var registroVentana = document.getElementById('registro-ventana');
    registroVentana.style.display = 'block';
}

// Oculta la ventana de inicio de sesión
function ocultarLogin() {
    var loginVentana = document.getElementById('login-ventana');
    loginVentana.style.display = 'none';
}

// Oculta la ventana de registro
function ocultarRegistro() {
    var registroVentana = document.getElementById('registro-ventana');
    registroVentana.style.display = 'none';
}
// Función para buscar un producto
function buscarProducto() {
var input = document.getElementById('buscar').value.toLowerCase();
var productos = document.querySelectorAll('.producto');

productos.forEach(function(producto) {
var nombreProducto = producto.querySelector('h3').innerText.toLowerCase();
var keywords = producto.getAttribute('data-keywords').toLowerCase();

// Muestra el producto si el nombre o las palabras clave coinciden
if (nombreProducto.includes(input) || keywords.includes(input)) {
    producto.style.display = 'block';
} else {
    producto.style.display = 'none';
}
});
}

