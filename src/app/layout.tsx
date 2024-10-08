import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import Sidebar from './components/Sidebar';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
    <head>
      <title>Home Page - Project</title>
    </head>
    <body>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f9f9f9', p: 2 }}>
          {children}
        </Box>
      </Container>
    </body>
  </html>
  );
};

export default RootLayout;
