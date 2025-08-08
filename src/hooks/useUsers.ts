import { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import type { User } from '../types/User';

export const useUsers = (page: number) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log("page", page)
  useEffect(() => {
    const load = async () => {
      try {
        const data = await getUsers(page);
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [page]);

  return { users, loading, error };
};
