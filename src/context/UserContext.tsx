import { createContext, useContext, useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import type { User } from '../types/User';

interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const data = await getUsers(page);
        setUsers(data);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [page]);

  return (
    <UserContext.Provider value={{ users, loading, error, page, setPage }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Falta usar UserProvider');
  }
  return context;
};
