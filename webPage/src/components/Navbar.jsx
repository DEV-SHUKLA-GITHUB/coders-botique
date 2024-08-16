// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };


    return (
        <nav className="bg-white border-b border-gray-200 shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-gray-800 mr-6">
                        <Link to="/">App Logo</Link>
                    </h1>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/home" className="text-gray-600 hover:text-gray-800">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-600 hover:text-gray-800">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <button
                        className="text-gray-600 hover:text-gray-800 focus:outline-none pr-4"
                    >
                        Profile
                    </button>
                    <button
                        className="text-gray-600 hover:text-gray-800 focus:outline-none"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
