// Carrito.js
export class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto, cantidad) {
        const itemExistente = this.items.find(item => item.producto.id === producto.id);
        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            this.items.push({ producto, cantidad });
        }
        alert(`${cantidad} unidad(es) de ${producto.nombre} agregada(s) al carrito.`);
    }

    verCarrito() {
        if (this.items.length === 0) {
            alert("El carrito está vacío.");
        } else {
            let mensaje = "Carrito de compras:\n";
            this.items.forEach((item, index) => {
                mensaje += `${index + 1}. ${item.producto.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.producto.precio}\n`;
            });
            alert(mensaje);
        }
    }

    calcularTotal() {
        return this.items.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
    }

    vaciarCarrito() {
        this.items = [];
        alert("El carrito ha sido vaciado.");
    }
}
