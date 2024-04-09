import React, { useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', bookTaken: 'YellowFace' },
    { id: 2, username: 'user2', email: 'user2@example.com', bookTaken: 'The Wishing Game' },
    { id: 3, username: 'user3', email: 'user3@example.com', bookTaken: 'Happy Place' },
    { id: 4, username: 'user4', email: 'user4@example.com', bookTaken: 'Check & Mate' },
    { id: 5, username: 'user5', email: 'user5@example.com', bookTaken: 'Hell Bent' },
    { id: 6, username: 'user6', email: 'user6@example.com', bookTaken: 'Being Henry: The Fonz . . . and Beyond' },
    { id: 7, username: 'user7', email: 'user7@example.com', bookTaken: 'YellowFace' },
    { id: 8, username: 'user8', email: 'user8@example.com', bookTaken: 'The Wishing Game' },
    { id: 9, username: 'user9', email: 'user9@example.com', bookTaken: 'Happy Place' },
    { id: 10, username: 'user10', email: 'user10@example.com', bookTaken: 'Check & Mate' },
    { id: 11, username: 'user11', email: 'user11@example.com', bookTaken: 'YellowFace' },
    { id: 12, username: 'user12', email: 'user12@example.com', bookTaken: 'Hell Bent' },
    { id: 13, username: 'user13', email: 'user13@example.com', bookTaken: 'Being Henry: The Fonz . . . and Beyond' },
    { id: 14, username: 'user14', email: 'user14@example.com', bookTaken: 'YellowFace' },
    { id: 15, username: 'user15', email: 'user15@example.com', bookTaken: 'Check & Mate' },
    { id: 16, username: 'user16', email: 'user16@example.com', bookTaken: 'Being Henry: The Fonz . . . and Beyond' },
    { id: 17, username: 'user17', email: 'user17@example.com', bookTaken: 'YellowFace' },
  ]);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4 text-center justify-center">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-max mx-auto bg-white border border-gray-200 shadow-md rounded-md w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase border-b">ID</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase border-b">Username</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase border-b">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase border-b">Book Taken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-4 py-2 text-sm">{user.id}</td>
                <td className="px-4 py-2 text-sm">{user.username}</td>
                <td className="px-4 py-2 text-sm">{user.email}</td>
                <td className="px-4 py-2 text-sm">{user.bookTaken}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
