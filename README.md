# 🧪 Prueba Técnica Frontend Junior

## 🎯 Objetivo

Crear una aplicación en React + Vite + TailwindCSS que consuma una API pública para mostrar una lista de usuarios y su detalle. Esta prueba busca evaluar tu capacidad para estructurar una app frontend, consumir APIs, aplicar estilos y organizar el código siguiendo buenas prácticas.

---

## 🧰 Tecnologías requeridas

- React
- Vite
- TailwindCSS
- Git (repositorio público)
- Fetch o Axios para consumir APIs

---

## 🛠️ Requisitos

### Funcionalidades mínimas:

1. **Listado de usuarios**
   - Consumir el endpoint: `https://reqres.in/api/users?page=1`
   - Mostrar avatar, nombre y correo en tarjetas o tabla.

2. **Detalle de usuario**
   - Al hacer clic en un usuario, mostrar detalle (usando `https://reqres.in/api/users/:id`).
   - Puedes usar un modal o una ruta nueva.

3. **Buscador**
   - Permitir buscar por nombre o correo (filtrado en frontend).

4. **Responsive**
   - Adaptar el diseño para que se vea bien en escritorio y móvil.

5. **Manejo de estados**
   - Mostrar loader mientras carga.
   - Mostrar mensaje si ocurre un error al consumir la API.

---

## 💡 Bonus (no obligatorio)

- Paginación usando `page=2`, etc.
- Dark mode con Tailwind.
- Manejo global de estado (Context API o Zustand).
- Tests con React Testing Library o Vitest.
- Deploy en Vercel o Netlify.

---

## 📁 Estructura sugerida

```bash
src/
├── components/      # Componentes reutilizables (UserCard, Loader, Modal, etc.)
├── pages/           # Vistas principales (Home, UserDetail)
├── services/        # Lógica para consumir APIs
├── hooks/           # Custom hooks como useUsers
├── App.tsx
└── main.tsx
```

📦 Entrega
Haz fork del repositorio: https://github.com/Minibares-Hoteles/prueba-tecnica

Crea una rama con tu nombre completo en formato nombre-apellido

Sube tu solución a esa rama

Abre un Pull Request hacia el repositorio original en esa rama

Asegúrate de incluir un README.md en tu solución con:

Descripción del proyecto

Instrucciones para correrlo

Decisiones técnicas tomadas

## ⏰ Tiempo estimado
La prueba debe completarse en máximo 1 día desde su recepción.
