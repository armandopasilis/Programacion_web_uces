
import { Producto } from './Producto.js';
import { Carrito } from './Carrito.js';

const carrito = new Carrito();


cargarProductosDesdeJSON();

const productSelect = document.getElementById("productSelect");
const addProductButton = document.getElementById("addProduct");
const cartList = document.getElementById("cartList");
const totalAmount = document.getElementById("totalAmount");
const errorMessage = document.getElementById("errorMessage");
const finalizePurchaseButton = document.getElementById("finalizePurchase");
const productList = document.getElementById("productList");
const clearButton = document.getElementById("clearButton");
const filterButton = document.getElementById("filterButton");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const filterInput = document.getElementById("filterInput");
let productosDisponibles = [];
let allProducts = [];


async function cargarProductosDesdeJSON() {
    try {
        const response = await fetch('./api/ofertas.json'); // Cambiado a ofertas.json
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON de ofertas.");
        }
        const productos = await response.json();

        // Convertir los datos del JSON en instancias de Producto
        productosDisponibles = productos.map(prod => new Producto(prod.id, prod.nombre, prod.precio));

        cargarProductosEnSelect(); // Cargar productos en el select después de obtenerlos
        displayProducts(productosDisponibles); // Mostrar la lista de productos en la tabla
    } catch (error) {
        console.error("Error al cargar las ofertas:", error);
        showErrorMessage("Error al cargar las ofertas. Intente nuevamente.", true);
    }
}


function cargarProductosEnSelect() {
    productSelect.innerHTML = ""; // Limpia las opciones existentes
    productosDisponibles.forEach(producto => {
        const option = document.createElement("option");
        option.value = producto.id;
        option.textContent = `${producto.nombre} - $${producto.precio}`;
        productSelect.appendChild(option);
    });
}



function actualizarVistaCarrito() {
    cartList.innerHTML = "";
    if (carrito.items.length === 0) {
        cartList.innerHTML = "<li>El carrito está vacío.</li>";
    } else {
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
    }

    totalAmount.textContent = `Total: $${carrito.calcularTotal().toFixed(2)}`;
}


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


function showErrorMessage(message, useSweetAlert = false) {
    if (useSweetAlert) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: message,
        });
    } else {
        if (errorMessage) { 
            errorMessage.textContent = message;
            errorMessage.style.display = message ? "block" : "none";
        } else {
            console.error("El elemento con ID 'error-message' no fue encontrado.");
        }
    }
}


async function loadProducts() {
    try {
        const response = await fetch('./api/productos.json');
        if (!response.ok) {
            throw new Error("Error al cargar los productos");
        }
        const products = await response.json();
        allProducts = products;
        displayProducts(allProducts);  
    } catch (error) {
        console.error("Error:", error);
        showErrorMessage("No se pudieron cargar los productos. Intente nuevamente.", true);
    }
}


function filterProducts() {
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
    const searchTerm = filterInput.value.toLowerCase(); 

    const filteredProducts = allProducts.filter(product => {
        const matchesPrice = product.precio >= minPrice && product.precio <= maxPrice;
        const matchesSearchTerm = product.nombre.toLowerCase().includes(searchTerm) || product.categoria?.toLowerCase().includes(searchTerm); 
        return matchesPrice && matchesSearchTerm;
    });

    
    displayProducts(filteredProducts);
}

filterButton.addEventListener("click", filterProducts);


clearButton.addEventListener("click", () => {
    minPriceInput.value = "";
    maxPriceInput.value = "";
    filterInput.value = "";
    displayProducts(allProducts); 
});


loadProducts();


cargarProductosEnSelect();

console.log("Buscando elemento de error...");
const errorMessageElement = document.getElementById('error-message');
if (!errorMessageElement) {
    console.error("El elemento con ID 'error-message' no fue encontrado.");
}


maxPriceInput.addEventListener("input", () => {
    if (maxPriceInput.value < 0) {
        maxPriceInput.value = 0; 
        showErrorMessage("El precio máximo no puede ser negativo.",true);
    }
});

minPriceInput.addEventListener("input", () => {
    if (minPriceInput.value < 0) {
        minPriceInput.value = 0; 
        showErrorMessage("El precio máximo no puede ser negativo.",true);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const errorMessageElement = document.getElementById('error-message');
    if (errorMessageElement) {
       
        console.log("Elemento encontrado:", errorMessageElement);
    } else {
        console.error("El elemento con ID 'error-message' no existe.");
    }
});



function displayProducts(products) {
    const productTableBody = document.querySelector("#productTable tbody");

    if (!productTableBody) {
        console.error("Elemento con ID 'productTable' no encontrado en el DOM.");
        return;
    }


    productTableBody.innerHTML = "";

    if (products.length === 0) {
       
        productTableBody.innerHTML = `
            <tr>
                <td colspan="3" class="text-center">No se encontraron productos.</td>
            </tr>
        `;
        return;
    }


    products.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.nombre}</td>
            <td>${product.talle || "N/A"}</td>
            <td>$${product.precio}</td>
        `;

        productTableBody.appendChild(row);
    });
}
