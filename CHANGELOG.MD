# Changelog

## [1.5.0] - 2024-11-27
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


# Changelog - Baller Brand San Martin - Cuarta Entrega

## [1.4.0] - 2024-12-06

### Agregado
- **Navbar de navegación**:
  - Se añadió una barra de navegación en la parte superior con enlaces a las secciones del sitio: Inicio, Productos, Productos Destacados, Nosotros, Contacto, y Precios.
  
- **Carrusel de imágenes**:
  - Se incorporaron dos carruseles de Bootstrap para mostrar imágenes destacadas en la página principal y promociones especiales.
  
- **Sección de productos**:
  - Se diseñó una sección para mostrar productos disponibles con tarjetas (cards) de Bootstrap. Cada producto tiene una imagen, un título, una descripción corta y un botón para más detalles.
  
- **Formulario de carrito de compras**:
  - Se implementó un formulario básico de carrito de compras con un campo de entrada para agregar productos, visualización de productos seleccionados y el cálculo del total.
  
- **Tabla de precios**:
  - Se creó una tabla responsive con precios de productos, incluyendo detalles como nombre, categoría, talla, color y precio.
  
- **Sección de sobre nosotros**:
  - Se añadió una sección informativa sobre la tienda, destacando su propósito y valores.

### Cambios
- **Estructura HTML**:
  - Mejoras en la organización del código HTML, con el uso de etiquetas semánticas como `<section>` y `<article>` para mejorar la accesibilidad y organización del contenido.

- **Integración de Bootstrap**:
  - Se actualizó la integración de Bootstrap para usar la última versión disponible (5.3.3) y mejorar la apariencia y funcionalidad del diseño en dispositivos móviles y escritorios.

### Corregido
- **Optimización de imágenes**:
  - Se ajustaron las imágenes del carrusel y las promociones para mejorar la carga del sitio y asegurar que se adapten a todos los tamaños de pantalla.

- **Carrito de compras**:
  - Se corrigió un error donde los productos no se sumaban correctamente al carrito. Ahora el total se actualiza dinámicamente al agregar un producto.

### Eliminado
- **Contenido no necesario**:
  - Se eliminaron algunos elementos de contenido redundante que ya no eran necesarios para la funcionalidad básica del sitio.

### Próximos pasos
- Mejorar la interfaz de usuario con interacciones más dinámicas mediante JavaScript.
- Implementar un sistema de pago para el carrito de compras.
- Añadir una funcionalidad de búsqueda y filtrado de productos.



# Changelog - Tercera Entrega

## [1.3.0] - 2024-12-06

### Nuevas Características
- **Integración de Bootstrap**: Se incluyó la biblioteca Bootstrap para mejorar el diseño y la responsividad del sitio.
  - Se añadieron los enlaces a los estilos y scripts de Bootstrap en el archivo `head`.
  
- **Navbar Mejorada**: Se implementó una barra de navegación responsiva utilizando Bootstrap.
  - Enlaces añadidos a secciones clave del sitio: Inicio, Productos, Productos Destacados, Nosotros, Contacto y Precios.

- **Carrusel de Imágenes**: Se incorporó un carrusel para mostrar imágenes promocionales.
  - Funcionalidad automática de transición entre imágenes añadida.

- **Sección de Productos**: 
  - Creación de tarjetas (cards) para los productos principales con imágenes, descripciones y botones para comprar.
  - Modal implementado para mostrar detalles de los productos.

- **Tabla de Precios**: 
  - Inclusión de una tabla responsiva con detalles de productos, incluyendo categoría, talla, color y precio.

- **Sección "Nosotros"**: 
  - Se agregó una descripción de la misión y visión de la tienda.

- **Formulario de Contacto**:
  - Inclusión de un formulario con validación de campos para recopilar información de los clientes.

### Mejoras
- **Responsividad General**: Se aplicaron estilos de Bootstrap para garantizar un diseño adaptable en distintos dispositivos.
  - Optimización del uso de `container` y clases de diseño en las secciones.

### Correcciones
- **Ajustes en el estilo del footer**: Se corrigió el alineado de los elementos en el pie de página para que se vea correctamente en todos los dispositivos.
  
### Documentación
- **Actualización del README.md**: Se actualizó el archivo README.md con una breve descripción del proyecto, objetivos y tecnologías utilizadas.

## [1.2.0]  **Primer Parcial:**
### Nuevas Características
- Se agregó el contenido inicial de la página web `Baller Brand San Martin`, con el siguiente detalle:
  - Estructura principal en HTML5 utilizando Bootstrap 5.3 para el diseño responsivo y componentes dinámicos.
  - **Navbar**: Barra de navegación con secciones como Inicio, Productos, Productos Destacados, Nosotros, Contacto, y Precios.
  - **Carrusel**: Dos carruseles implementados, uno para imágenes destacadas y otro para promociones especiales.
  - **Secciones**: 
    - Introducción: Bienvenida a los usuarios.
    - Productos: Tarjetas con descripción de productos destacados.
    - Tabla de Precios: Información estructurada con estilo responsivo.
    - Nosotros: Información sobre la tienda.
    - Contacto: Formulario con validación básica.
  - **Estilos CSS**: Enlace a una hoja de estilos personalizada `styles.css` y uso de Bootstrap CSS.
  - **Interactividad**: Implementación de scripts de Bootstrap para funcionalidad dinámica.

### Updated
- No se realizaron actualizaciones.

### Removed
- No se eliminaron características.

## [1.1.0] - Segunda Entrega
### Agregado
- **Organización del código:** Separación de los estilos en un archivo externo (`styles.css`) para mejorar la mantenibilidad del proyecto.
- **Nueva Sección de Productos Destacados:** Diseño dinámico con un contenedor que muestra descripciones de productos en un formato atractivo.
- **Campos adicionales en la tabla de precios:** 
  - `Talla`
  - `Color`
  - `Categoría`
- **Mejoras en el formulario de contacto:**
  - Campo desplegable para selección de país.
  - Validaciones básicas (`required`) en los campos.
  - Botones para "Enviar" y "Limpiar".

### Cambiado
- Actualización de las etiquetas `alt` de las imágenes con descripciones más específicas.
- Footer más estructurado con enlaces claros y un mensaje de derechos reservados.

### Mejorado
- Uso del atributo `data-label` para una mejor presentación de la tabla en dispositivos móviles.
- Enlaces del menú de navegación con anclajes funcionales que llevan a secciones específicas de la página.

---

## [1.0.0] - Primera Entrega
### Agregado
- **Estructura inicial del sitio web:**
  - Creación del archivo HTML básico con las secciones principales: `header`, `main` y `footer`.
  - Encabezado con el título "Baller Brand San Martin" y menú de navegación inicial.
  - Sección introductoria con mensaje de bienvenida.
  - Tabla de precios básica para listar productos.
  - Sección de contacto con formulario básico.
  - Footer con enlaces iniciales a "Política de privacidad" y "Términos y condiciones".

