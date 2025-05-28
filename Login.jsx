
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Login to NaijaFunded</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
          <button className="w-full bg-blue-700 text-white py-2 rounded-xl">Login</button>
        </form>
        <div className="text-sm text-center mt-4">
          <Link to="/reset-password" className="text-blue-600 hover:underline">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}
