// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/signup', formData);
            alert('Sign-up successful');
        } catch (err) {
            console.error(err);
            alert('Sign-up failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit}
                className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                <div className="space-y-4">
                    <div>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <button 
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Sign Up
                </button>
                <div className="text-center text-gray-600">
                    <h3>Don't have an account? <a href="/" className="text-blue-600 hover:underline">login</a></h3>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
