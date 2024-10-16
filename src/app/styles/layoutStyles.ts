import { SxProps, Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #f5f5f5 30%, #e0e0e0 100%)',
};

export const sidebarStyle: SxProps<Theme> = {
  width: '200px',
  flexShrink: 0,
  bgcolor: 'white',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'width 0.3s',
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '@media (max-width: 900px)': {
    width: '200px',
  },
};

export const mainContentStyle: SxProps<Theme> = {
  flexGrow: 1,
  bgcolor: '#f9f9f9',
  p: 3,
  borderRadius: 2,
  overflowY: 'auto',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    bgcolor: '#fafafa',
  },
};
