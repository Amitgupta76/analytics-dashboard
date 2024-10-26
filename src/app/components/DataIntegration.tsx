"use client";
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import csv from "../public/assets/csv.png";
import webhook from "../public/assets/webhook.png";
import datasource from "../public/assets/datasource.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DataCard from '../components/DataCard';
import { cardGridStyle } from '../styles/dataIntegrationStyles';
import { containerStyle, sectionHeaderStyle } from '../styles/sharedStyles';
import { DATA_SOURCES, BUTTONS } from '../constants/dataIntegration';
import { useRouter } from 'next/navigation';

const DataIntegration: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('csv');
  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };
  const router = useRouter();
  const handleDatasourceAddition = () => {
    router.push('/data-integration/datasource-addition');
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'webhook':
        return (
          <Box sx={cardGridStyle}>
            {DATA_SOURCES.map((source) => (
              <DataCard key={source.id} title={source.name} date={source.date} image={webhook} activeSource={activeButton} />
            ))}
          </Box>
        );
      case 'derived':
        return (
          <Box sx={cardGridStyle}>
            {DATA_SOURCES.map((source) => (
              <DataCard key={source.id} title={source.name} date={source.date} image={datasource} activeSource={activeButton} />
            ))}
          </Box>
        );
      default:
        return (
          <Box sx={cardGridStyle}>
            {DATA_SOURCES.map((source) => (
              <DataCard key={source.id} title={source.name} date={source.date} image={csv} activeSource={activeButton} />
            ))}
          </Box>
        );
    }
  };

  return (
    <Box sx={containerStyle}>
      <Typography variant="h4" component="h1" sx={sectionHeaderStyle}>
        Data and Integration
      </Typography>

      <Box sx={{ display: 'flex', gap: 4, mb: 2 }}>
        {BUTTONS.map((button) => (
          <Button
            key={button.id}
            variant={activeButton === button.id ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleButtonClick(button.id)}
            sx={{ borderRadius: 2, mt: 2 }}
          >
            {button.label}
          </Button>
        ))}
        <Button
          startIcon={<AddCircleOutlineIcon />}
          variant="outlined"
          color="primary"
          size="small"
          sx={{ marginLeft: 'auto', mt: 2 }}
          onClick={handleDatasourceAddition}
        >
          Add Datasource
        </Button>
      </Box>

      {renderContent()}
    </Box>
  );
};

export default DataIntegration;
