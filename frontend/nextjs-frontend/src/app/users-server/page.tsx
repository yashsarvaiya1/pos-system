type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
};

export default async function UserServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <ul>
      {users.map((user: User) => (
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