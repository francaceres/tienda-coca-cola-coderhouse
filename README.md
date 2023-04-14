# Tienda Coca-Cola

Este proyecto fue realizado durante el cursado del curso de React Js en Coderhouse. Trabajó en él Francisco Cáceres y fue evaluado por el tutor Nicolás Smael.\
Su propósito es recrear un sitio de e-commerce de la marca Coca Cola, aplicando las funcionalidades vistas en el curso.

## Instalación

Use the package manager node.js para correr la aplicación

```bash
npm run dev
```

## Uso

La aplicación permite explorar los productos del sitio en general o separados por categorías, y agregarlos al carrito. Se puede seleccionar uno de los productos para ingresar a la página de detalle en donde se encontrará más información del mismo y se podrán agregar múltiples unidades al carrito. \
En la página de carrito se puede ver un display de todos los productos agregados, con su precio y cantidad correspondientes. Además se puede ver el valor total de los productos cargados y proceder a la compra. Una vez ingresados los datos para realizar la compra, la misma es almacenada como un documento en la base de datos Firestore de la aplicación y el carrito es vaciado.

## Funcionalidades utilizadas

- Hooks de estado, de efecto, de contexto.
- React-router-dom
- Contextos
- Conditional rendering
- Base de datos Firestore de Firebase

## Deployment
https://tienda-coca-cola-coderhouse-kkrbcqhnr-francaceres.vercel.app/cart
