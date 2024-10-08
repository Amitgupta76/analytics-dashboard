"use client";
import { Box, Button, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { dataSources } from '../constants/metrics';

const MetricCreationForm = () => {
  const [metricName, setMetricName] = useState('');
  const [dataSource, setDataSource] = useState('');

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h6">Metric Creation</Typography>
        <Typography variant="body1">
          Create a new metric by using existing datasources or combining variables from different datasources.
        </Typography>
      </Paper>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: '500px' }}>
        <TextField
          label="Metric Name"
          variant="outlined"
          required
          value={metricName}
          onChange={(e) => setMetricName(e.target.value)}
        />
        <TextField
          select
          label="Select Datasource"
          value={dataSource}
          onChange={(e) => setDataSource(e.target.value)}
          required
        >
          {dataSources.map((source, index) => (
            <MenuItem key={index} value={source}>
              {source}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" color="primary">Add Logic</Button>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="outlined" color="secondary">Cancel</Button>
          <Button variant="contained" color="primary">Save</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MetricCreationForm;
