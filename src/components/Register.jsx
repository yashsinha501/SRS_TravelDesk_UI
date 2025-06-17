import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [department, setDepartment] = useState('');
  const [managerName, setManagerName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ firstname,lastname, email, password, employeeID, department, managerName, role });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-4 text-center text-cyan-800">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">


        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            Employee ID
          </label>

            <input
            type="text"
            placeholder="Employee ID"
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-[50%]"
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
            required
            />
        </div>

        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            First Name
          </label>

            <input
            type="text"
            placeholder="First Name"
            className="w-[50%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            />
        </div>


        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            Last Name
          </label>

            <input
            type="text"
            placeholder="Last Name"
            className="w-[50%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            />
        </div>


        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            Email
          </label>

            <input
            type="email"
            placeholder="Email"
            className="w-[50%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
          className="w-[50%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>

        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            Confirm Password
          </label>

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-[50%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        </div>


        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            Department
          </label>

            <input
            type="text"
            placeholder="Department"
            className="w-[50%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            />
        </div>


        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            Manager Name
          </label>

            <input
            type="text"
            placeholder="Manager Name"
            className="w-[50%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            required
            />
        </div>


        <div className='w-[45vw] flex'>
          <label htmlFor="role" className=" flex flex-start items-center text-sm font-bold text-gray-600 mb-1 w-[25%]">
            Roles
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-[50%] px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
            <option value="Intern">Intern</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-oceanBlue text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
