"use client"
import { use, useEffect, useState } from "react";

type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Failed to fetch users");
        if (error instanceof Error) {
          setError(`failed to fetch users: ${error.message}`);
        } 
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <div> Loading...</div>;
  if (error) return <div> {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="m-4 p-2 bg-white shadow-md  rounded-lg text-gray-700">
            <h2><strong>Name:</strong> {user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
        </li>
      ))}
    </ul>
  );
}