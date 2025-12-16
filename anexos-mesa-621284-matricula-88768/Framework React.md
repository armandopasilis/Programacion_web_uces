## Framework – React

React es un framework/librería JavaScript orientado al desarrollo de interfaces de usuario basadas en componentes. Su propósito principal es simplificar la creación de aplicaciones dinámicas mediante un enfoque declarativo y el manejo del estado de la aplicación.
---

## Motivación y justificación

React podría aplicarse al proyecto actual como una evolución del mismo. En una aplicación como un simulador de e-commerce, permitiría dividir la interfaz en componentes independientes, tales como productos, carrito y filtros, reduciendo la necesidad de manipulación manual del DOM.

Esto facilitaría el mantenimiento del código y permitiría escalar la aplicación a funcionalidades más complejas.

- Nivel de dificultad de adaptación

- El nivel de dificultad es medio.

- Requiere aprender JSX

- Cambia el enfoque de manipulación directa del DOM

- Implica reorganizar el código existente en componentes

- Necesita herramientas de desarrollo adicionales
---

## Ejemplo de código – Antes y después

Antes (JavaScript  – proyecto actual)

const totalElement = document.getElementById("totalAmount");
totalElement.textContent = `Total: $${total}`;

Después (React)
<p>Total: ${total}</p>


En React, la interfaz se actualiza automáticamente cuando cambia el valor del estado total, sin manipular directamente el DOM.
---
