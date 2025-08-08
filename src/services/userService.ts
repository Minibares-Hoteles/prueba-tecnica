import type { User, UserResponse } from "../types/User";

export const getUsers = async (page: number = 1): Promise<User[]> => {
  const res = await fetch(`https://reqres.in/api/users?page=${page}`, {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });

  if (!res.ok) throw new Error('Error al obtener los usuarios');
  const result: UserResponse = await res.json();
  return result.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const res = await fetch(`https://reqres.in/api/users/${id}`, {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });

  if (!res.ok) throw new Error('Error al obtener el detalle del usuario');
  const result = await res.json();
  return result.data;
};