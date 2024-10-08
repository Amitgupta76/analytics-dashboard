"use client";
import { Box, Menu, MenuItem, TextField, InputAdornment, Button, Typography } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from '../components/Sidebar';
import MetricCard from '../components/MetricCard';
import { metrics } from '../constants/metrics';
import { getRows } from '../utils/getRows';
import { useRouter } from 'next/navigation'; // Import useRouter

const MetricsPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>, metric: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedMetric(metric);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedMetric(null);
  };

  const handleCreateMetric = () => {
    router.push('/metrics/create');
  };

  const metricRows = getRows(metrics);

  return (
    <Box sx={{ display: 'flex', p: 2 }}>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2">Metrics</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" onClick={handleCreateMetric}>
              Create a Metric
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {metricRows.map((row, rowIndex) => (
            <Box key={rowIndex} sx={{ display: 'flex', gap: 2 }}>
              {row.map((metric, index) => (
                <MetricCard key={index} metric={metric} onMenuClick={handleMenuClick} />
              ))}
            </Box>
          ))}
        </Box>
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>View {selectedMetric}</MenuItem>
          <MenuItem onClick={handleMenuClose}>Edit {selectedMetric}</MenuItem>
          <MenuItem onClick={handleMenuClose}>Clone {selectedMetric}</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete {selectedMetric}</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default MetricsPage;
