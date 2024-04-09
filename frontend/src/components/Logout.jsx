import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogout = () => {
    logout()
      .then(() => {
        alert('Logout Successful');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error('Logout Error:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Logout</h1>
        <p className="text-gray-700 mb-2 text-center">Are you sure you want to logout?</p>
        <p className="text-gray-600 mb-8 text-center">Please don't leave us 😢</p>
        <div className="flex justify-center space-x-4">
          <button
            className= "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={handleLogout}
          >
            I'll be back
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => navigate(from, { replace: true })}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
