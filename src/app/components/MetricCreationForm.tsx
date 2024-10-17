"use client";
import { Box, Button, MenuItem, Paper, TextField, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { dataSources } from '../constants/metrics';
import {
  containerStyle,
  sectionHeaderStyle,
  cardStyle,
  textFieldStyle,
  buttonContainerStyle
} from '../styles/sharedStyles';

const MetricCreationForm = () => {
  const [metricName, setMetricName] = useState('');
  const [dataSource, setDataSource] = useState('');
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  }

  return (
    <Box>
      <Box 
        sx={{ 
          ...sectionHeaderStyle, 
          justifyContent: 'left',
          gap: 0.5,
        }}
      >
        <IconButton 
          onClick={handleGoBack} 
          color="primary" 
          sx={{ p: 0, mr: 1 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1">Metric Creation</Typography>
      </Box>
      <Box sx={{...containerStyle, minHeight: '70vh'}}>
        <Paper sx={cardStyle}>
          <Typography variant="body2" color="text.secondary">
            Create a new metric by using existing data sources or combining variables from different sources.
          </Typography>
        </Paper>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%', maxWidth: '500px' }}>
          <TextField
            label="Metric Name"
            variant="outlined"
            required
            value={metricName}
            onChange={(e) => setMetricName(e.target.value)}
            sx={textFieldStyle}
          />
          <TextField
            select
            label="Select Data Source"
            value={dataSource}
            onChange={(e) => setDataSource(e.target.value)}
            required
            sx={textFieldStyle}
          >
            {dataSources.map((source, index) => (
              <MenuItem key={index} value={source}>
                {source}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Create Logic"
            variant="outlined"
            required
            value={metricName}
            onChange={(e) => setMetricName(e.target.value)}
            sx={textFieldStyle}
          />
        </Box>
      </Box>
      <Box sx={buttonContainerStyle}>
        <Button variant="outlined" color="secondary" sx={{borderRadius: 2}}>Cancel</Button>
        <Button variant="contained" color="primary" sx={{borderRadius: 2, background: "#1E88E5"}}>Save</Button>
      </Box>
    </Box>
  );
};

export default MetricCreationForm;
