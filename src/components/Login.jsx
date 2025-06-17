import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-cyan-800">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            Email ID
          </label>

        <input
          type="email"
          placeholder="Email"
          className="w-[50%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>

        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            Password
          </label>

        <input
          type="password"
          placeholder="Password"
          className="w-[50%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>



        <button
          type="submit"
          className="w-full bg-oceanBlue text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
