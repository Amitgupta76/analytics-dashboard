import { Paper, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { metricCardStyle } from '../styles/metricsStyles';

interface MetricCardProps {
  metric: string;
  onMenuClick: (event: React.MouseEvent<HTMLButtonElement>, metric: string) => void;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, onMenuClick }) => {
  return (
    <Paper sx={metricCardStyle}>
      <Typography variant="body2" color="text.secondary">
        {metric}
      </Typography>
      <IconButton onClick={(event) => onMenuClick(event, metric)}>
        <MoreVertIcon />
      </IconButton>
    </Paper>
  );
};

export default MetricCard;
