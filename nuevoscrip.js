// Variables para los inputs y el botón
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const addProductButton = document.getElementById("addProduct");
const cartList = document.getElementById("cartList");
const totalAmount = document.getElementById("totalAmount");

let cart = []; // Array para almacenar los productos

// Función para agregar un producto al carrito
addProductButton.addEventListener("click", () => {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);
    
    if (name && price > 0) {
        addProductToCart(name, price);
        productNameInput.value = "";
        productPriceInput.value = "";
    } else {
        alert("Ingrese un nombre y un precio válido para el producto.");
    }
});

// Función para agregar el producto al carrito y actualizar la lista
function addProductToCart(name, price) {
    const product = { name, price };
    cart.push(product);
    displayCart();
    updateTotal();
}

// Función para mostrar el carrito en la lista
function displayCart() {
    cartList.innerHTML = ""; // Limpiar la lista actual
    cart.forEach((product, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("product");
        
        const productText = document.createElement("span");
        productText.textContent = `${product.name} - $${product.price}`;
        
        const deleteButton = document.createElement("span");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete");
        
        // Eliminar producto del carrito al hacer clic en el botón de eliminar
        deleteButton.addEventListener("click", () => {
            cart.splice(index, 1); // Quita el producto del array
            displayCart();
            updateTotal();
        });

        listItem.appendChild(productText);
        listItem.appendChild(deleteButton);
        cartList.appendChild(listItem);
    });
}

// Función para calcular el total del carrito
function updateTotal() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    totalAmount.textContent = `Total: $${total.toFixed(2)}`;
}
