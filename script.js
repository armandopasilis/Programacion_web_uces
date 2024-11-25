import { Producto } from './Producto.js';
import { Carrito } from './Carrito.js';

const carrito = new Carrito();

// Productos predefinidos
const productosDisponibles = [
    new Producto(1, "Conjunto Nike M", 80.000),
    new Producto(2, "Conjunto Adidas L", 75.000),
    new Producto(3, "Jean Levis 501 L", 60.000),
];

// Elementos del DOM
const productSelect = document.getElementById("productSelect");
const addProductButton = document.getElementById("addProduct");
const cartList = document.getElementById("cartList");
const totalAmount = document.getElementById("totalAmount");
const errorMessage = document.getElementById("errorMessage");
const finalizePurchaseButton = document.getElementById("finalizePurchase");

// Cargar productos en el menú desplegable
function cargarProductosEnSelect() {
    productosDisponibles.forEach(producto => {
        const option = document.createElement("option");
        option.value = producto.id;
        option.textContent = `${producto.nombre} - $${producto.precio}`;
        productSelect.appendChild(option);
    });
}

// Actualizar la lista del carrito
function actualizarVistaCarrito() {
    cartList.innerHTML = "";
    carrito.items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.producto.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.producto.precio}`;
        
        const deleteButton = document.createElement("span");
        deleteButton.textContent = " ❌";
        deleteButton.style.cursor = "pointer";
        deleteButton.addEventListener("click", () => {
            carrito.eliminarProducto(item.producto.id);
            actualizarVistaCarrito();
        });

        listItem.appendChild(deleteButton);
        cartList.appendChild(listItem);
    });

    totalAmount.textContent = `Total: $${carrito.calcularTotal().toFixed(2)}`;
}

// Manejar la adición de productos al carrito
addProductButton.addEventListener("click", () => {
    const productId = parseInt(productSelect.value);
    if (!productId) {
        showErrorMessage("Por favor selecciona un producto.", true);
        return;
    }

    const productoSeleccionado = productosDisponibles.find(producto => producto.id === productId);
    if (productoSeleccionado) {
        carrito.agregarProducto(productoSeleccionado, 1);
        actualizarVistaCarrito();
        showErrorMessage("", false);
    }
});

// Finalizar la compra
finalizePurchaseButton.addEventListener("click", () => {
    if (carrito.items.length === 0) {
        showErrorMessage("El carrito está vacío. Agregue productos antes de finalizar la compra.", true);
        return;
    }

    const total = carrito.calcularTotal();
    Swal.fire({
        icon: "success",
        title: "Compra finalizada",
        text: `El total a pagar es: $${total.toFixed(2)}. ¡Gracias por tu compra!`,
    });

    carrito.vaciarCarrito();
    actualizarVistaCarrito();
});

// Mostrar mensajes de error
function showErrorMessage(message, useSweetAlert = false) {
    if (useSweetAlert) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: message,
        });
    } else {
        errorMessage.textContent = message;
        errorMessage.style.display = message ? "block" : "none";
    }
}

// Inicializar el menú desplegable al cargar la página
cargarProductosEnSelect();