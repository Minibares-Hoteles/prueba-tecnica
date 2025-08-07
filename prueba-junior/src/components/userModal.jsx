import { X, Mail, User, Star, Sparkles } from 'lucide-react';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Botón de cerrar */}
        <button 
          onClick={onClose}
          className="modal-close"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Contenido principal */}
        <div>
          {/* Header con avatar y nombre lado a lado */}
          <div className="modal-header">
            {/* Avatar más pequeño */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-lg opacity-30"></div>
              <div className="relative">
                <img 
                  src={user.avatar} 
                  alt={`${user.first_name} ${user.last_name}`}
                  className="modal-avatar-small"
                />
              </div>
            </div>

            {/* Nombre del usuario */}
            <div className="modal-name-section">
              <h2 className="modal-name-horizontal">
                {user.first_name} {user.last_name}
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Información del usuario */}
          <div className="modal-info">
            {/* ID de Usuario */}
            <div className="modal-info-item">
              <div className="modal-info-icon bg-gradient-to-r from-blue-500 to-purple-500">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="modal-info-text">
                <p className="modal-info-label">ID de Usuario</p>
                <p className="modal-info-value">#{user.id}</p>
              </div>
            </div>
            
            {/* Correo Electrónico */}
            <div className="modal-info-item">
              <div className="modal-info-icon bg-gradient-to-r from-purple-500 to-pink-500">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="modal-info-text">
                <p className="modal-info-label">Correo Electrónico</p>
                <p className="modal-info-value">{user.email}</p>
              </div>
            </div>
          </div>
          
          {/* Botón de cerrar */}
          <button 
            onClick={onClose}
            className="modal-button"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;