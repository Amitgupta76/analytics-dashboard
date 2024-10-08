import { Paper, Typography } from '@mui/material';

const OverviewCard = () => (
  <Paper sx={{ p: 3, mb: 4, backgroundColor: '#f5f5f5' }}>
    <Typography variant="h6">Overview</Typography>
    <Typography variant="body1">
      This is your central hub for navigating through different sections of the application.
      Use the sidebar to explore various features including Reports, Analytics, Alerts, and more.
    </Typography>
  </Paper>
);

export default OverviewCard;
