"use client";
import { Box, Table, TableBody, TableRow, Typography } from '@mui/material';
import OverviewCard from './components/OverviewCard';
import DashboardSection from './components/DashboardSection';
import { getRows } from './utils/getRows';
import { dashboardSections } from './constants/dashboardSections';
import { tableStyle } from './styles/dashboardStyles';
import { containerStyle, sectionHeaderStyle } from './styles/sharedStyles';

const HomePage = () => {
  const rows = getRows(dashboardSections);

  return (
    <Box sx={containerStyle}>
      <Box sx={sectionHeaderStyle}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Project Dashboard
        </Typography>
      </Box>

      <OverviewCard />

      <Table sx={tableStyle}>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((section, index) => (
                <DashboardSection
                  key={index}
                  title={section.title}
                  description={section.description}
                  href={section.href}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default HomePage;
