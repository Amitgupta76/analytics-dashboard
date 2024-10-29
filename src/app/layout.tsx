"use client";
import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import { containerStyle, sidebarStyle, mainContentStyle } from './styles/layoutStyles';
import { usePathname } from 'next/navigation';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const EXCLUDED_ROUTES = [
    "/metrics/create",
    "/data-integration/datasource-addition/upload-csv"
  ];
  const pathname = usePathname();
  const isExcludedRoute = EXCLUDED_ROUTES.includes(pathname);
  return (
    <html lang="en">
      <head>
        <title>Home Page - Project</title>
      </head>
      <body>
        {isExcludedRoute ? (
          children
        ) : (
          <><CssBaseline />
        <Container maxWidth="xl" sx={containerStyle}>
          <Box component="nav" sx={sidebarStyle}>
            <Sidebar />
          </Box>
          <Box component="main" sx={mainContentStyle}>
            {children}
          </Box>
        </Container>
        </>)
        }
      </body>
    </html>
  );
};

export default RootLayout;
