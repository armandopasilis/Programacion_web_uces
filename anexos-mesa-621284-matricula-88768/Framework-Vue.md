# Frameworks -Vue.js

## Introducción

### Breve reseña

Vue.js es un framework progresivo de JavaScript orientado al desarrollo de interfaces de usuario. Se caracteriza por su sintaxis clara y cercana a HTML, así como por su sistema de reactividad automática, que permite actualizar la vista cuando cambian los datos.

---
Características destacadas:

- Sintaxis simple y legible

- Reactividad automática

- Componentes reutilizables

- Data binding bidireccional

- Integración progresiva
---
## Motivación y justificación

Vue.js podría aplicarse al proyecto actual debido a su capacidad de integrarse de forma progresiva en aplicaciones existentes. En el simulador de e-commerce, Vue permitiría manejar el estado del carrito y la visualización de productos sin necesidad de manipular el DOM directamente.

Esto reduciría la complejidad del código y permitiría una transición gradual desde JavaScript puro hacia un framework de desarrollo.

---

### Nivel de dificultad de adaptación

El nivel de dificultad de adaptación es bajo a medio.

No requiere JSX

Mantiene una sintaxis similar a HTML y JavaScript

Permite una migración progresiva

Reduce la cantidad de código imperativo

Estas características lo convierten en una opción accesible para proyectos desarrollados inicialmente con JavaScript puro.

---

### Ejemplo de código – Antes

Antes ( JavaScript – proyecto actual)



```bash

<p id="mensaje"></p>
<p id="totalAmount">Total: $0</p>
<button id="addProduct">Agregar producto</button>

const mensaje = document.getElementById("mensaje");
const totalElement = document.getElementById("totalAmount");
const boton = document.getElementById("addProduct");

let total = 0;

boton.addEventListener("click", () => {
  total += 100;
  mensaje.textContent = "Producto agregado al carrito";
  totalElement.textContent = `Total: $${total}`;
});

```

### Explicación 

- Se accede manualmente a los elementos del DOM (getElementById)

- Se actualiza el contenido de la página de forma imperativa

- Cada cambio en los datos requiere modificar explícitamente la vista

- La lógica y la interfaz están fuertemente acopladas


### Ejemplo de código – Despues


```bash

<p>{{ mensaje }}</p>

<div id="app">
  <p>{{ mensaje }}</p>
  <p>Total: ${{ total }}</p>
  <button @click="agregarProducto">Agregar producto</button>
</div>

const app = Vue.createApp({
  data() {
    return {
      mensaje: "",
      total: 0
    };
  },
  methods: {
    agregarProducto() {
      this.total += 100;
      this.mensaje = "Producto agregado al carrito";
    }
  }
});

app.mount("#app");


```

### Explicación (Vue.js)

- data() define el estado de la aplicación (mensaje y total)

- La vista se vincula a los datos mediante expresiones ({{ }})

- El evento @click reemplaza addEventListener

- No se manipula el DOM directamente

- Vue detecta los cambios en los datos y actualiza la vista automáticamente

---
En JavaScript  los cambios en la página se realizan modificando el DOM de forma "manual". En cambio, al utilizar Vue.js la interfaz se actualiza de manera automática a partir de los datos de la aplicación, sin necesidad de modificar el DOM directamente cada vez que ocurre un cambio

