import { Paper, Typography, Button, TableCell } from '@mui/material';

type DashboardSectionProps = {
  title: string;
  description: string;
  href: string;
};

const DashboardSection = ({ title, description, href }: DashboardSectionProps) => (
  <TableCell sx={{ border: 0, p: 1 }}>
    <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e0e0e0' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <Button variant="contained" color="primary" href={href} sx={{ textTransform: 'none', mt: 1 }}>
        Go to {title}
      </Button>
    </Paper>
  </TableCell>
);

export default DashboardSection;
