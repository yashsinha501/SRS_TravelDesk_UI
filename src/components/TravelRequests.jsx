import React, { useState } from "react";

const initialUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Editor" },
];

export default function TravelRequestTable() {
  const [users, setUsers] = useState(initialUsers);

//   const handleAddUser = () => {
    // const id = users.length + 1;
    // const newUser = {
    //   id,
    //   name: `New Request ${id}`,
    //   email: `user${id}@example.com`,
    //   role: "Pending",
    // };
//     setUsers([...users, newUser]);
//   };

  const handleApprove = (id) => {
    alert(`Approved request ID: ${id}`);
  };

  const handleRevertToManager = (id) => {
    alert(`Reverted request ID: ${id} back to Manager`);
  };

  const handleRevertToUser = (id) => {
    alert(`Reverted request ID: ${id} back to User`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-6 animate-fade-in">Travel Request Management</h1>


      <div className="overflow-x-auto shadow rounded-lg animate-fade-in-up">
        <table className="min-w-full table-auto bg-white rounded-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
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
                <td className="px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => handleApprove(user.id)}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleRevertToManager(user.id)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                  >
                    Revert to Manager
                  </button>
                  <button
                    onClick={() => handleRevertToUser(user.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Revert to User
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
