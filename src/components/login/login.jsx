"use client"
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("formData",formData);

    // Convert form data to JSON format
    const jsonData = JSON.stringify(formData);

    // Log the JSON data for testing
    console.log('Login Form Data (JSON):', jsonData);

    // Add your API request logic here to send 'jsonData' to your API
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-semibold mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
    </form>
  );
};

export default LoginForm;
