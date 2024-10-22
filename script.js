// main.js
import { Producto } from './Producto.js';
import { Carrito } from './Carrito.js';

// Array de productos disponibles
const productos = [
    new Producto(1, "Conjunto deportivo Chicago", 2500),
    new Producto(2, "Conjunto deportivo Lakers", 5000),
    new Producto(3, "Ropa de verano", 700)
];

// Función para mostrar los productos disponibles
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach(producto => {
        mensaje += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    });
    return mensaje;
}

// Función principal para simular el proceso de compra
function simularCompra() {
    const carrito = new Carrito();
    let continuar = true;

    while (continuar) {
        let opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Ver carrito\n3. Borrar carrito\n4. Finalizar compra");

        switch (opcion) {
            case "1":
                const idProducto = parseInt(prompt(`${mostrarProductos()}Ingrese el número del producto que desea agregar al carrito:`));
                const productoSeleccionado = productos.find(producto => producto.id === idProducto);

                if (productoSeleccionado) {
                    const cantidad = parseInt(prompt(`¿Cuántas unidades de ${productoSeleccionado.nombre} desea?`));
                    if (cantidad > 0) {
                        carrito.agregarProducto(productoSeleccionado, cantidad);
                    } else {
                        alert("Por favor, ingrese una cantidad válida.");
                    }
                } else {
                    alert("Producto no válido. Intente nuevamente.");
                }
                break;
            case "2":
                carrito.verCarrito();
                break;
            case "3":
                carrito.vaciarCarrito();
                break;
            case "4":
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    }

    const totalCompra = carrito.calcularTotal();
    if (totalCompra > 0) {
        alert(`El total de su compra es: $${totalCompra.toFixed(2)}. Gracias por su compra!`);
    } else {
        alert("No ha agregado productos al carrito.");
    }

    console.log("Carrito final:", carrito.items);
}

// Ejecuta la simulación de compra
simularCompra();
