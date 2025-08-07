import { Loader2, Sparkles } from 'lucide-react';

const Loader = ({ message = "Cargando..." }) => {
  return (
    <div className="loader">
      {/* Contenedor principal con gradiente */}
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
          <Sparkles className="w-3 h-3 text-white" />
        </div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-ping"></div>
      </div>
      
      {/* Mensaje con estilo mejorado */}
      <div className="loader-message">
        {message}
      </div>
      
      {/* Puntos de carga animados */}
      <div className="loader-dots">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
    </div>
  );
};

export default Loader;