# Anexo – Frameworks 

## Introducción

El presente anexo tiene como objetivo analizar frameworks de diseño y desarrollo con JavaScript que pueden ser aplicados al proyecto actual. La aplicación fue desarrollada principalmente con JavaScript  , HTML y CSS, incorporando frameworks externos para mejorar la interfaz de usuario y la experiencia de uso.

## Frameworks y herramientas de desarrollo con JavaScript

JavaScript es un lenguaje ampliamente utilizado tanto en el desarrollo frontend como backend. A lo largo del tiempo surgieron distintos frameworks y herramientas que facilitan la creación de aplicaciones web más complejas, mejor organizadas y escalables.

Entre estas herramientas se destacan los frameworks de desarrollo frontend, como React y Vue.js, y los entornos de ejecución como Node.js, que permiten utilizar JavaScript fuera del navegador.

---

## Node.js

Node.js es un entorno de ejecución que permite ejecutar JavaScript fuera del navegador. Se utiliza principalmente para el desarrollo de servidores, APIs y herramientas de desarrollo. Aunque en el proyecto actual no se utiliza Node.js, su incorporación permitiría desarrollar un backend que complemente la aplicación frontend.

Node.js es una pieza clave en muchos stacks de desarrollo modernos basados en JavaScript.

---

## Stack MERN

El stack MERN es un conjunto de tecnologías utilizadas para el desarrollo de aplicaciones web completas utilizando JavaScript tanto en el frontend como en el backend. Está compuesto por:

- **MongoDB:** base de datos NoSQL
- **Express.js:** framework backend para Node.js
- **React:** framework de desarrollo frontend
- **Node.js:** entorno de ejecución

Este stack permite desarrollar aplicaciones modernas con una arquitectura basada en componentes y servicios.

---

## Stack MEAN

El stack MEAN es similar al stack MERN, pero utiliza un framework frontend diferente. Está compuesto por:

- **MongoDB:** base de datos NoSQL
- **Express.js:** framework backend
- **Angular:** framework frontend
- **Node.js:** entorno de ejecución

MEAN se caracteriza por ofrecer un framework frontend más estructurado y completo.

---



## MERN vs MEAN –

| Característica | Stack MERN | Stack MEAN |
|--------------|-----------|-----------|
| Front-end UI | React.js (librería) | Angular (framework completo) |
| Tipo de Front-end | Librería flexible para construir interfaces | Framework robusto y estructurado |
| Enfoque | Basado en componentes, declarativo | Basado en módulos y arquitectura definida |
| Manejo del estado | Manual o con librerías externas | Integrado en el framework |
| Lenguaje principal | JavaScript (TypeScript opcional) | TypeScript (obligatorio) |
| Curva de aprendizaje | Media | Alta |
| Complejidad inicial | Baja a media | Alta |
| Flexibilidad | Alta, permite múltiples formas de organización | Menor, estructura más rígida |
| Escalabilidad | Alta, adaptable a distintos tamaños de proyectos | Muy alta, orientada a proyectos grandes |
| Casos de uso habituales | SPAs, e-commerce, dashboards | Sistemas empresariales complejos |
| Backend | Node.js + Express.js | Node.js + Express.js |
| Base de datos | MongoDB (NoSQL) | MongoDB (NoSQL) |
| Comunidad y ecosistema | Muy amplia y activa | Amplia, con enfoque corporativo |
| Integración con JS puro | Más simple | Más compleja |
| Adecuación al proyecto actual | Muy adecuada | Excesiva para el alcance actual |
| Ruta propuesta para el proyecto | MERN es la ruta recomendada, ya que parte de una base en JavaScript puro y permite una transición gradual | MEAN sería una alternativa más estructurada, adecuada solo si el proyecto creciera a gran escala |


---

## Frameworks elegidos

### Framework 1 – React

React es un framework/librería JavaScript orientado al desarrollo de interfaces de usuario basadas en componentes. Permite crear aplicaciones dinámicas donde la vista se actualiza automáticamente según el estado de la aplicación.

React podría aplicarse al proyecto actual para mejorar la organización del frontend, separar la interfaz en componentes y reducir la manipulación directa del DOM.

[framework react.md](./Framework%20React.md)



---

### Framework 2 – Vue.js

Vue.js es un framework progresivo de JavaScript que permite desarrollar interfaces de usuario de forma reactiva. Se destaca por su sintaxis clara y su facilidad de integración en proyectos desarrollados con JavaScript puro.

Vue.js podría aplicarse al proyecto actual como una transición gradual hacia un frontend más organizado, manteniendo una curva de aprendizaje accesible.





[Framework Vue](./Framework%20Vue.md)


---

## Conclusión

El análisis de los frameworks React y Vue.js, junto con la explicación de Node.js y los stacks MERN y MEAN, permite comprender las distintas alternativas disponibles para el desarrollo de aplicaciones web con JavaScript. Estas tecnologías representan posibles evoluciones del proyecto actual, sin modificar su implementación existente.