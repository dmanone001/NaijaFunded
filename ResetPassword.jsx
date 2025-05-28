
import React from 'react';

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Reset Your Password</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded" />
          <button className="w-full bg-blue-700 text-white py-2 rounded-xl">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}
