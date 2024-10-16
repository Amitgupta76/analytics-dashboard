import { Paper, Typography } from '@mui/material';
import { cardStyle } from '../styles/dashboardStyles';

const OverviewCard = () => (
  <Paper elevation={3} sx={cardStyle}>
    <Typography variant="h5" component="div" gutterBottom>
      Overview
    </Typography>
    <Typography variant="body2" color="text.secondary">
      This section provides a high-level summary of key metrics and reports.
    </Typography>
  </Paper>
);

export default OverviewCard;
