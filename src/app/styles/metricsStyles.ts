import { SxProps, Theme } from '@mui/material';

export const metricCardStyle: SxProps<Theme> = {
  p: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '200px',
  backgroundColor: '#f5f5f5',
  borderRadius: 2,
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
};

export const searchFieldStyle: SxProps<Theme> = {
  width: '300px',
  '.MuiOutlinedInput-root': {
    borderRadius: 2,
    bgcolor: 'background.paper',
  },
};

export const metricsGridStyle: SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 2,
    alignItems: 'start',
};
