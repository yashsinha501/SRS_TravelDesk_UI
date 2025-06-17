import React, { useState } from "react";

const initialUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Editor" },
];

export default function DashBoard() {
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = () => {
    const id = users.length + 1;
    const newUser = {
      id,
      name: `New User ${id}`,
      email: `user${id}@example.com`,
      role: "User",
    };
    setUsers([...users, newUser]);
  };

  const handleUpdate = (id) => {
    alert(`Update user with ID: ${id}`);
  };

  const handleDetails = (id) => {
    alert(`View details of user with ID: ${id}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 animate-fade-in">User Management</h1>
      <div className="mb-4 flex justify-between">

        <button
          onClick={handleAddUser}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Add User
        </button>

        <button
          onClick={handleAddUser}
        //   className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out animate-pulse"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
        >
          List of Travel Requests
        </button>

      </div>

      <div className="overflow-x-auto shadow rounded-lg animate-fade-in-up">
        <table className="min-w-full table-auto bg-white rounded-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={user.id}
                className={`transition duration-300 ease-in-out hover:bg-blue-50 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="px-4 py-2 text-sm text-gray-800">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.email}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.role}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleUpdate(user.id)}
                    className="mr-2 px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDetails(user.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
