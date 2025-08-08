# Prueba Técnica - Minibares Hoteles

Este proyecto es una solución para la prueba técnica de Minibares Hoteles, desarrollada con Vite, React, TypeScript, TailwindCSS y consumo de API REST. Se enfoca en listar, buscar y paginar usuarios, haciendo énfasis en la organización de código, estado global y experiencia de usuario.

## 🛠 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Context API (React)](https://react.dev/learn/scaling-up-with-reducer-and-context)

## 📋 Funcionalidades implementadas

- Listado de usuarios en cards
- Detalles del usuario en modal
- Paginación con botones dinámicos
- Búsqueda por nombre o correo
- Estado global con Context API
- UI responsiva con Tailwind

## 📁 Estructura del proyecto
  ```
    src/
    ├── components/
    ├── context/      
    ├── hooks/          
    ├── pages/
    ├── services/          
    ├── types/
    ├── App.tsx
    ├── main.tsx
    └── ...
  ```

## ▶️ Instrucciones para correr el proyecto

1. **Clonar el repositorio**  
  ```
   git clone https://github.com/Daniela1421/prueba-tecnica.git
   cd prueba-tecnica
  ```

2. **Instalar dependencias del proyecto**  
  ```
   npm install
  ```

3. **Correr el servidor en desarrollo**  
  ```
   npm run dev
  ```
El proyecto se abrirá en http://localhost:5173.

Asegúrate de tener Node.js v18+ instalado.

## ⚙️ Decisiones técnicas tomadas
- Se eligió Context API en lugar de herramientas como Zustand porque el estado no requiere una solución más compleja al ser una aplicación pequeña. Esto permite mantener el proyecto liviano y fácil de entender.
- Se centralizó la lógica de consumo de API en un archivo de servicios para que sea mas facil el mantenimiento y la escalabilidad del proyecto.
- El buscador se realizó desde el frontend usando filter para evitar llamadas innecesarias a la API, dado que el volumen de datos es manejable.
- Para mejorar la experiencia de usuario, se implementó un modal que permite ver el detalle sin salir de la vista principal.
- Se optó por TailwindCSS para prototipar rápido una UI limpia y responsiva, sin necesidad de escribir CSS desde cero.



