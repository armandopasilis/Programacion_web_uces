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

const mensaje = document.getElementById("mensaje");
mensaje.textContent = "Producto agregado al carrito";

### Ejemplo de código – Despues

<p>{{ mensaje }}</p>

data() {
  return {
    mensaje: "Producto agregado al carrito"
  };
}
---
En JavaScript  los cambios en la página se realizan modificando el DOM de forma "manual". En cambio, al utilizar Vue.js la interfaz se actualiza de manera automática a partir de los datos de la aplicación, sin necesidad de modificar el DOM directamente cada vez que ocurre un cambio

