
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">NaijaFunded</h1>
        <p className="text-lg text-gray-600">Get funded, trade smart, earn profits.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold">$5,000 Account</h2>
          <p>Challenge Fee: $35</p>
          <p>Profit Target: 8%</p>
          <p>Max Daily Loss: 4%</p>
          <p>Total Drawdown: 8%</p>
        </div>
      </section>

      <div className="text-center mt-10 space-x-4">
        <Link to="/login" className="bg-blue-700 text-white px-6 py-2 rounded-xl">Login</Link>
        <Link to="/signup" className="bg-green-600 text-white px-6 py-2 rounded-xl">Sign Up</Link>
      </div>
    </div>
  );
}
