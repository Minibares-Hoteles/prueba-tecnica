import { useState } from 'react';
import UserCards from '../components/UserCards';
import { useUserContext } from '../context/UserContext';

const Home = () => {
  const { users, loading, error, page, setPage } = useUserContext();
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(user =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10">Cargando usuarios...</p>;

  if (error) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md shadow-md max-w-lg w-full text-center">
        <h2 className="text-xl font-semibold mb-2">Ocurrió un error</h2>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Lista de Usuarios</h1>
      <div className="max-w-80 mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre o email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <UserCards users={filteredUsers} />
      <div className="flex justify-center mt-8">
        <div className="inline-flex items-center gap-4 bg-white px-4 py-3 rounded-lg shadow">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              page === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Anterior
          </button>
          <span className="text-gray-700 font-semibold">Página {page}</span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
