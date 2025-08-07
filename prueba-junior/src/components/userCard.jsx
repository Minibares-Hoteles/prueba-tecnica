import { Mail, User, Sparkles } from 'lucide-react';

const UserCard = ({ user, onClick }) => {
  return (
    <div 
      className="user-card"
      onClick={() => onClick(user)}
    >
      {/* Contenido principal */}
      <div className="user-card-content">
        {/* Avatar con efectos */}
        <div className="user-avatar-container">
          <img 
            src={user.avatar} 
            alt={`${user.first_name} ${user.last_name}`}
            className="user-avatar"
          />
        </div>
        
        {/* Información del usuario */}
        <div className="user-info">
          <h3 className="user-name">
            {user.first_name} {user.last_name}
          </h3>
          <div className="user-email">
            <Mail className="w-4 h-4 text-purple-500" />
            <span>{user.email}</span>
          </div>
          <div className="user-id">
            <User className="w-4 h-4 text-blue-500" />
            <span>ID: {user.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;