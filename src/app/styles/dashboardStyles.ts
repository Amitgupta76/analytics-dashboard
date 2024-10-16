import { SxProps, Theme } from '@mui/material';

export const paperStyle: SxProps<Theme> = {
  p: 3,
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
};

export const tableStyle: SxProps<Theme> = {
  width: '100%',
  mt: 2,
  borderCollapse: 'separate',
  borderSpacing: '12px',
};

export const cardStyle: SxProps<Theme> = {
  p: 2,
  boxShadow: 3,
  borderRadius: 2,
  bgcolor: 'background.paper',
};

