Directorio de Usuarios - Prueba Técnica

 📋 Descripción del Proyecto

Esta aplicación es un directorio de usuarios desarrollado en React que permite:

- **Visualizar usuarios**: Muestra una lista paginada de usuarios obtenidos de la API de ReqRes
- **Búsqueda en tiempo real**: Filtra usuarios por nombre o correo electrónico
- **Detalles de usuario**: Modal con información detallada de cada usuario
- **Paginación**: Navegación entre páginas de usuarios
- **Diseño responsivo**: Interfaz moderna y adaptativa

🛠️ Instrucciones para Correrlo

Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd prueba-junior
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

🏗️ Decisiones Técnicas Tomadas

1. **Arquitectura de Componentes**
- **Separación de responsabilidades**: Cada componente tiene una función específica
- **Reutilización**: Componentes como `UserCard` y `UserModal` son reutilizables

### 2. **Gestión de Estado**
- **Hooks de React**: Uso de useState para estado local y useEffect para efectos secundarios
- **Estado separado**: Diferentes estados para usuarios, filtros, paginación y errores
- **Optimización**: Filtrado que se actualiza automáticamente

### 3. **Integración con API**
- **Servicio dedicado**: `userService.js` centraliza todas las llamadas a la API
- **Manejo de errores**: Try-catch con mensajes de error descriptivos
- **Headers personalizados**: Inclusión del header `x-api-key` requerido por la API

6. **Estructura de Archivos**
```
src/
├── components/     # Componentes reutilizables
├── services/      # Lógica de negocio y API
├── assets/        # Recursos estáticos
└── App.jsx        # Componente principal
```

📱 Funcionalidades Implementadas

✅ Lista paginada de usuarios  
✅ Búsqueda en tiempo real  
✅ Modal de detalles de usuario  
✅ Manejo de errores de API  
✅ Estados de carga  
✅ Diseño responsivo  
✅ Navegación entre páginas  

## 🔧 Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **Vite** - Bundler y servidor de desarrollo
- **Tailwind CSS** - Framework de utilidades CSS
- **Lucide React** - Iconos modernos
- **Fetch API** - Llamadas HTTP nativas

