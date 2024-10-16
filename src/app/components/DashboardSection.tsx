import { Paper, Typography, Button, TableCell } from '@mui/material';
import { paperStyle } from '../styles/dashboardStyles';
import { buttonStyle } from '../styles/sharedStyles';

type DashboardSectionProps = {
  title: string;
  description: string;
  href: string;
};

const DashboardSection = ({ title, description, href }: DashboardSectionProps) => (
<TableCell sx={{ border: 0, p: 1 }}>
  <Paper elevation={3} sx={paperStyle}>
    <Typography variant="h6" gutterBottom color="text.primary" fontWeight={600}>
      {title}
    </Typography>
    <Typography variant="body2" gutterBottom color="text.secondary">
      {description}
    </Typography>
    <Button variant="contained" color="primary" href={href} sx={buttonStyle}>
      Go to {title}
    </Button>
  </Paper>
</TableCell>
);

export default DashboardSection;
