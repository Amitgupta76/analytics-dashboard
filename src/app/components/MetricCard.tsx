import { Paper, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface MetricCardProps {
  metric: string;
  onMenuClick: (event: React.MouseEvent<HTMLButtonElement>, metric: string) => void;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, onMenuClick }) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '200px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="body1">{metric}</Typography>
      <IconButton onClick={(event) => onMenuClick(event, metric)}>
        <MoreVertIcon />
      </IconButton>
    </Paper>
  );
};

export default MetricCard;
