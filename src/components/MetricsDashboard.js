import React from 'react';
import { Grid, Container, Typography, Card, CardContent } from '@mui/material';
import { mockMetrics } from '../mockData'; // Import mock data
import UserGrowthChart from './UserGrowthChart';
import RevenueDistribution from './RevenueDistribution';
import TopStreamedSongs from './TopStreamedSongs';
import RecentStreamsTable from './RecentStreamsTable';

const MetricsDashboard = () => {
  return (
    <Container>
      {/* Display Metrics Cards */}
      <Typography container spacing={8} variant='h2'>Streamify Analytics Dashboard</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">{mockMetrics.totalUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Users</Typography>
              <Typography variant="h4">{mockMetrics.activeUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Streams</Typography>
              <Typography variant="h4">{mockMetrics.totalStreams}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="h4">${mockMetrics.revenue}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Top Artist</Typography>
              <Typography variant="h4">{mockMetrics.topArtist}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12}>
          <UserGrowthChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <RevenueDistribution />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopStreamedSongs />
        </Grid>

        {/* Recent Streams Table */}
        <Grid item xs={12}>
          <RecentStreamsTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MetricsDashboard;
