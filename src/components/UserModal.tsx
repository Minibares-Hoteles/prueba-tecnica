import { useEffect, useState } from "react";
import type { User } from "../types/User";
import { getUserById } from "../services/userService";

interface Props {
  userId: number;
  isOpen: boolean;
  onClose: () => void;
}

const UserModal: React.FC<Props> = ({ userId, isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError("");

      getUserById(userId)
        .then((user) => {
          setUser(user);
          setLoading(false);
        })
        .catch(() => {
          setError("Error al cargar el usuario");
          setLoading(false);
        });
    }
  }, [userId, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : user ? (
          <div className="text-center">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserModal;
