// src/components/UserGrowthChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockUserGrowth } from '../mockData';

// const data = [
//   { month: 'Jan', totalUsers: 1000, activeUsers: 800 },
//   { month: 'Feb', totalUsers: 1200, activeUsers: 900 },
//   { month: 'Mar', totalUsers: 1400, activeUsers: 1100 },
//   { month: 'Apr', totalUsers: 1600, activeUsers: 1200 },
//   { month: 'May', totalUsers: 1800, activeUsers: 1400 },
//   { month: 'Jun', totalUsers: 2000, activeUsers: 1500 },
//   { month: 'Jul', totalUsers: 2200, activeUsers: 1600 },
//   { month: 'Aug', totalUsers: 2500, activeUsers: 1800 },
//   { month: 'Sep', totalUsers: 2800, activeUsers: 2000 },
//   { month: 'Oct', totalUsers: 3000, activeUsers: 2200 },
//   { month: 'Nov', totalUsers: 3200, activeUsers: 2500 },
//   { month: 'Dec', totalUsers: 3500, activeUsers: 2700 },
// ];

const UserGrowthChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={mockUserGrowth}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
        <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
