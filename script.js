// Array constante de productos
const productos = [
    { id: 1, nombre: "Conjunto deportivo Chicago", precio: 2500 },
    { id: 2, nombre: "Conjunto deportivo Lakers", precio: 5000 },
    { id: 3, nombre: "Ropa de verano", precio: 700 },
];

// Array vacío para el carrito
let carrito = [];

// Función para mostrar los productos disponibles
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach(producto => {
        mensaje += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    });
    return mensaje;
}

// Función para agregar productos al carrito
function agregarAlCarrito() {
    let idProducto = prompt(`${mostrarProductos()}Ingrese el número del producto que desea agregar al carrito:`);

    // Verificar si la entrada es un número válido
    idProducto = parseInt(idProducto);
    if (isNaN(idProducto)) {
        alert("Por favor, ingrese un número de producto válido.");
        return; // Salir de la función si no es un número válido
    }

    let productoSeleccionado = productos.find(producto => producto.id === idProducto);

    // Verificar si el producto seleccionado existe
    if (productoSeleccionado) {
        let cantidad = prompt(`¿Cuántas unidades de ${productoSeleccionado.nombre} desea?`);

        // Validar que la cantidad sea un número y mayor que 0
        cantidad = parseInt(cantidad);
        if (!isNaN(cantidad) && cantidad > 0) {
            carrito.push({ ...productoSeleccionado, cantidad });
            alert(`${cantidad} unidad(es) de ${productoSeleccionado.nombre} agregada(s) al carrito.`);
        } else {
            alert("Por favor, ingrese una cantidad válida.");
        }
    } else {
        alert("Producto no válido. Intente nuevamente.");
    }
}

// Función para calcular el total del carrito
function calcularTotal() {
    let total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    return total;
}

// Función para ver los productos en el carrito
function verCarrito() {
    if (carrito.length === 0) {//chequeo si el carrito esta vacio
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Carrito de compras:\n";
        carrito.forEach((item, index) => {//utilizo un iterador , por cada elemento voy pidiendo os datos
            mensaje += `${index + 1}. ${item.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.precio}\n`;
        });
        alert(mensaje);
    }
}

// En esta funcion borro  el array del carrito 
function borrarCarrito() {
    carrito = [];
    alert("El carrito ha sido vaciado.");
}

// Función principal para simular el proceso de compra
function simularCompra() {
    let continuar = true;//utilizo continuar como una flag para el switch case ,

    while (continuar) {
        let opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Ver carrito\n3. Borrar carrito\n4. Finalizar compra");

        switch (opcion) {
            case "1":
                agregarAlCarrito();
                break;
            case "2":
                verCarrito();
                break;
            case "3":
                borrarCarrito();
                break;
            case "4":
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    }

    let totalCompra = calcularTotal();
    if (totalCompra > 0) {
        alert(`El total de su compra es: $${totalCompra}. Gracias por su compra!`);
    } else {
        alert("No ha agregado productos al carrito.");
    }

    console.log("Carrito final:", carrito);
}

//Esta es la funcion principal que llama a las demas funciones 
simularCompra();
