// src/components/Dashboard.js
import React from 'react';
import Navbar from './Navbar';
import DataCards from './DataCards';
function Dashboard() {

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DataCards/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
