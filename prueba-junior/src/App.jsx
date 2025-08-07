import React, { useState, useEffect } from 'react';
import { Search, AlertCircle, ChevronLeft, ChevronRight, Users, Sparkles, Filter } from 'lucide-react';
import { userService } from './services/userService';
import UserCard from './components/userCard';
import UserModal from './components/userModal';
import Loader from './components/Loader';

function App() {
  // Estados principales
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(2); // Cambiado de 1 a 2
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cargar usuarios al cambiar página
  useEffect(() => {
    loadUsers(currentPage);
  }, [currentPage]);

  // Filtrar usuarios cuando cambie el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => 
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [users, searchTerm]);

  // Función para cargar usuarios
  const loadUsers = async (page) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await userService.getUsers(page);
      setUsers(response.data);
      setTotalPages(response.total_pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Manejo de clic en usuario para mostrar detalles
  const handleUserClick = async (user) => {
    try {
      const response = await userService.getUserById(user.id);
      setSelectedUser(response.data);
    } catch (err) {
      setError('Error al cargar detalles del usuario');
    }
  };

  // Componente de paginación
  const Pagination = () => (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Anterior</span>
      </button>
      
      <div className="pagination-info">
        <span>
          Página {currentPage} de {totalPages}
        </span>
      </div>
      
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        <span>Siguiente</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header mejorado con gradiente */}
      <header className="header">
        <div className="header-content">
          <div className="header-icon">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div className="header-text">
            <h1>
              Directorio de Usuarios
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            </h1>
            <p>
              Explora nuestra lista de usuarios y descubre sus detalles
            </p>
          </div>
        </div>
      </header>

      <main className="main-container">
        {/* Barra de búsqueda mejorada */}
        <div className="search-container">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por nombre o correo electrónico..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Manejo de estados de carga y error */}
        {loading && <Loader message="Cargando usuarios..." />}
        
        {error && (
          <div className="error-message">
            <div className="error-icon">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div className="error-title">Error de Conexión</div>
            <div className="error-text">{error}</div>
          </div>
        )}

        {/* Lista de usuarios*/}
        {!loading && !error && (
          <>
            <div className="users-grid">
              {filteredUsers.map(user => (
                <UserCard 
                  key={user.id} 
                  user={user} 
                  onClick={handleUserClick}
                />
              ))}
            </div>

            {/* Mensaje cuando no hay resultados mejorado */}
            {filteredUsers.length === 0 && !loading && (
              <div className="empty-state">
                <div className="empty-state-container">
                  <div className="empty-state-icon">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="empty-state-title">
                    No se encontraron usuarios
                  </h3>
                  <p className="empty-state-text">
                    {searchTerm 
                      ? `No hay usuarios que coincidan con "${searchTerm}"` 
                      : "No hay usuarios disponibles en este momento"
                    }
                  </p>
                </div>
              </div>
            )}

            {/* Paginación */}
            {!searchTerm && filteredUsers.length > 0 && <Pagination />}
          </>
        )}
      </main>

      {/* Modal de detalles */}
      <UserModal 
        user={selectedUser} 
        onClose={() => setSelectedUser(null)} 
      />
    </div>
  );
}

export default App;