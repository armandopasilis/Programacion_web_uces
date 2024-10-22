// Variables para los inputs y el botón
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const addProductButton = document.getElementById("addProduct");
const cartList = document.getElementById("cartList");
const totalAmount = document.getElementById("totalAmount");
const errorMessage = document.getElementById("errorMessage"); // Contenedor para mensajes de error

let cart = []; // Array para almacenar los productos

// Escuchar el evento click en el botón
addProductButton.addEventListener("click", handleAddProduct);

// Función para manejar la adición de productos
function handleAddProduct() {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);

    if (validateInputs(name, price)) {
        addProductToCart(name, price);
        resetInputs();
        showErrorMessage("", false); // Limpiar mensajes de error
    } else {
        showErrorMessage("Por favor, ingrese un nombre válido y un precio numérico mayor a 0.", true);
    }
}

// Función para validar las entradas
function validateInputs(name, price) {
    return name !== "" && !isNaN(price) && price > 0;
}

// Función para agregar un producto al carrito
function addProductToCart(name, price) {
    const product = { id: Date.now(), name, price }; // Generar un identificador único
    cart.push(product);
    displayCart();
    updateTotal();
}

// Función para mostrar el carrito en la lista
function displayCart() {
    cartList.innerHTML = ""; // Limpiar la lista actual
    cart.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.classList.add("product");

        const productText = document.createElement("span");
        productText.textContent = `${product.name} - $${product.price.toFixed(2)}`;

        const deleteButton = document.createElement("span");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete");
        
        // Eliminar producto del carrito al hacer clic en el botón de eliminar
        deleteButton.addEventListener("click", () => {
            removeProductFromCart(product.id); // Usar el identificador único
        });

        listItem.appendChild(productText);
        listItem.appendChild(deleteButton);
        cartList.appendChild(listItem);
    });
}

// Función para eliminar un producto del carrito por su identificador
function removeProductFromCart(productId) {
    cart = cart.filter(product => product.id !== productId); // Filtrar productos sin el ID dado
    displayCart();
    updateTotal();
}

// Función para calcular el total del carrito
function updateTotal() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    totalAmount.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para reiniciar los inputs después de agregar un producto
function resetInputs() {
    productNameInput.value = "";
    productPriceInput.value = "";
}

// Función para mostrar mensajes de error (opción entre formulario o SweetAlert2)
function showErrorMessage(message, useSweetAlert = false) {
    if (useSweetAlert) {
        // Usar SweetAlert2 para mostrar el mensaje
        Swal.fire({
            icon: "error",
            title: "Error",
            text: message,
        });
    } else {
        // Mostrar el mensaje en el formulario
        if (message) {
            errorMessage.textContent = message;
            errorMessage.style.display = "block"; // Mostrar el mensaje
        } else {
            errorMessage.style.display = "none"; // Ocultar el mensaje
        }
    }
}
