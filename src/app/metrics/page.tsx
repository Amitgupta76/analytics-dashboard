"use client";
import { Box, Menu, MenuItem, TextField, InputAdornment, Button, Typography } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MetricCard from '../components/MetricCard';
import { metrics } from '../constants/metrics';
import { getRows } from '../utils/getRows';
import { useRouter } from 'next/navigation';
import { searchFieldStyle, metricsGridStyle } from '../styles/metricsStyles'; 
import { containerStyle, buttonStyle, sectionHeaderStyle } from '../styles/sharedStyles';

const MetricsPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [, setSelectedMetric] = useState<string | null>(null);
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
    <Box sx={containerStyle}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box sx={sectionHeaderStyle}>
          <Typography variant="h4" component="h1">
            Metrics
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search metrics..."
              sx={searchFieldStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" onClick={handleCreateMetric} sx={{ ...buttonStyle, mt: 0 }}>
              Create Metric
            </Button>
          </Box>
        </Box>

        <Box sx={metricsGridStyle}>
          {metricRows.flat().map((metric, index) => (
            <MetricCard key={index} metric={metric} onMenuClick={handleMenuClick} />
          ))}
        </Box>

        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>View</MenuItem>
          <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
          <MenuItem onClick={handleMenuClose}>Clone</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default MetricsPage;
