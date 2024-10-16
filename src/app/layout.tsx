import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import { containerStyle, sidebarStyle, mainContentStyle } from './styles/layoutStyles';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Home Page - Project</title>
      </head>
      <body>
        <CssBaseline />
        <Container maxWidth="xl" sx={containerStyle}>
          <Box component="nav" sx={sidebarStyle}>
            <Sidebar />
          </Box>
          <Box component="main" sx={mainContentStyle}>
            {children}
          </Box>
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
