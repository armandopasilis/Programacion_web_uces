# CHANGELOG

## [1.2.0] - 2024-11-27
### 🚀 Cambios Nuevos
- **Implementación de funciones de orden superior**: Se usaron `map`, `filter` y `reduce` para optimizar el manejo de colecciones en el código principal.
- **Calculo de total con `reduce`**: El método `calcularTotal()` del carrito ahora utiliza `reduce` para sumar los precios de los productos.
- **Filtro por rango de precios**: Se agregó una funcionalidad para filtrar los productos según un rango de precios mínimo y máximo.
- **Botones de eliminar dinámicos**: Se mejoró la interacción de los botones para eliminar productos del carrito, ahora se generan dinámicamente con eventos asociados.
- **Comentarios detallados**: Se agregaron comentarios en el código para facilitar la lectura y comprensión.

### 🐛 Correcciones
- Solucionado un problema donde no se actualizaba correctamente la lista del carrito después de eliminar un producto.
- Manejo de errores mejorado al cargar productos desde el archivo `productos.json`.

---

## [1.1.0] - 2024-11-20
### 🚀 Cambios Nuevos
- **Carga de productos desde un archivo JSON**: Ahora los productos se cargan dinámicamente desde un archivo `productos.json`.
- **Notificaciones con SweetAlert**: Se incorporaron alertas visuales utilizando `SweetAlert` para mejorar la experiencia de usuario.
- **Botón para limpiar filtros**: Se añadió un botón para resetear los filtros de búsqueda.

### 🐛 Correcciones
- Solucionado un problema donde el carrito no mostraba correctamente el mensaje de "carrito vacío".

---

## [1.0.0] - 2024-11-15
### 🎉 Versión Inicial
- Funcionalidad básica del carrito de compras:
  - Agregar productos al carrito desde un menú desplegable.
  - Visualizar productos en el carrito con su cantidad y precio.
  - Calcular el total del carrito.
  - Finalizar compra con un mensaje de confirmación.
- Productos predefinidos cargados en el array inicial.
