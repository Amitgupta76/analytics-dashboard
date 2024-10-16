import { SxProps, Theme } from '@mui/material';

export const sectionHeaderStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    pb: 2,
    mb: 2,
};

export const buttonStyle: SxProps<Theme> = {
    textTransform: 'none',
    mt: 2,
    px: 4,
    py: 1,
    borderRadius: 2,
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    '&:hover': {
      background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
    },
  };
  
  export const containerStyle: SxProps<Theme> = {
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    bgcolor: 'background.paper',
    minHeight: '100vh',
    borderRadius: 4,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
    boxSizing: 'border-box',
  };