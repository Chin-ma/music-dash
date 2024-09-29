// src/components/TopStreamedSongs.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockTopSongs } from '../mockData';

// const data = [
//   { song: 'Song A', streams: 5000 },
//   { song: 'Song B', streams: 4500 },
//   { song: 'Song C', streams: 4000 },
//   { song: 'Song D', streams: 3500 },
//   { song: 'Song E', streams: 3000 },
// ];

const TopStreamedSongs = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={mockTopSongs}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="song" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="streams" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopStreamedSongs;
