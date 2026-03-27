import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users
  const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`${backendURL}/api/user/getAllUsers`);
      setUserData(data.user || []);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to fetch users');
    }
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error('Name cannot be empty');
      return;
    }
    if (!email.trim()) {
      toast.error('Email cannot be empty');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post(`${backendURL}/api/user/addUser`, { name, email });

      if (data.success) {
        toast.success(data.message || 'User added successfully!');
        setName('');
        setEmail('');
        fetchUserData();
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add user');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      <ToastContainer position="top-right" autoClose={4000} theme="dark" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            User Management
          </h1>
          <p className="text-neutral-400 text-lg">Add users and view them in real-time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Modern Form Card */}
          <div className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-semibold mb-8 text-center">Add New User</h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 bg-neutral-800 border border-neutral-700 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all text-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-neutral-800 border border-neutral-700 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-semibold text-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer"
              >
                {loading ? 'Adding User...' : 'Add User'}
              </button>
            </form>
          </div>

          {/* Users Table Card */}
          <div className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold">All Users</h2>
              <div className="text-sm text-neutral-400">
                {userData.length} {userData.length === 1 ? 'user' : 'users'}
              </div>
            </div>

            {userData.length === 0 ? (
              <div className="text-center py-16 text-neutral-500">
                No users added yet. Add one from the left!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-700">
                      <th className="text-left py-4 px-6 font-medium text-neutral-400">Name</th>
                      <th className="text-left py-4 px-6 font-medium text-neutral-400">Email</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    {userData.map((user, index) => (
                      <tr key={index} className="hover:bg-neutral-800/50 transition-colors">
                        <td className="py-5 px-6 font-medium">{user.name}</td>
                        <td className="py-5 px-6 text-neutral-300">{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;