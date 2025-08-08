import { useState } from "react";
import type { User } from "../types/User";
import UserModal from "./UserModal";

interface Props {
  users: User[];
}

const UserCards: React.FC<Props> = ({ users }) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (id: number) => {
    setSelectedUserId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUserId(null);
    setIsModalOpen(false);
  };


  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-lg font-semibold">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{user.email}</p>
            <button
              className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => handleViewDetails(user.id)}
            >
              Ver más
            </button>
          </div>
        ))}
      </div>
      {selectedUserId !== null && (
        <UserModal userId={selectedUserId} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default UserCards;