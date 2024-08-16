// src/components/DataCards.js
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Mar', uv: 200, pv: 2400, amt: 2400 },
    { name: 'Apr', uv: 278, pv: 2400, amt: 2400 },
    { name: 'May', uv: 189, pv: 2400, amt: 2400 },
    { name: 'Jun', uv: 239, pv: 2400, amt: 2400 },
    { name: 'Jul', uv: 349, pv: 2400, amt: 2400 },
];

function DataCards() {
    return (
        <div className="data-cards">
            <div className="card">
                <h2>Monthly Data</h2>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            {/* Add more cards here as needed */}
        </div>
    );
}

export default DataCards;
