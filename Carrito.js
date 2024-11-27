
export class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto, cantidad = 1) {
        const itemExistente = this.items.find(item => item.producto.id === producto.id);
        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            this.items.push({ producto, cantidad });
        }
    }

    eliminarProducto(id) {
        this.items = this.items.filter(item => item.producto.id !== id);
    }

    calcularTotal() {
        return this.items.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
    }

    vaciarCarrito() {
        this.items = [];
    }

  
    
}
