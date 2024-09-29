// src/components/RevenueDistribution.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockRevenue } from '../mockData';

// const data = [
//   { name: 'Subscriptions', value: 70000 },
//   { name: 'Ads', value: 30000 },
// ];

const COLORS = ['#0088FE', '#FFBB28'];

const RevenueDistribution = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={mockRevenue}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {mockRevenue.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RevenueDistribution;
