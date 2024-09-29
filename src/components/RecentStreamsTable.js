// src/components/RecentStreamsTable.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { mockRecentStreams } from '../mockData';

const columns = [
  { field: 'songName', headerName: 'Song Name', width: 200 },
  { field: 'artist', headerName: 'Artist', width: 200 },
  { field: 'dateStreamed', headerName: 'Date Streamed', width: 180 },
  { field: 'streamCount', headerName: 'Stream Count', width: 150 },
  { field: 'userId', headerName: 'User ID', width: 150 },
];

const RecentStreamsTable = () => (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={mockRecentStreams}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
);

export default RecentStreamsTable;
