import { SxProps, Theme } from '@mui/material';

export const sidebarButton: SxProps<Theme> = {
  m: 1,
  px: 2,
  py: 1.5,
  borderRadius: '8px',
  border: '2px solid black',
  textAlign: 'center',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
};

export const activeButton: SxProps<Theme> = {
  m: 1,
  px: 2,
  py: 1.5,
  borderRadius: '8px',
  border: '2px solid black',
  textAlign: 'center',
  backgroundColor: '#ffcdd2',
  '&:hover': {
    backgroundColor: '#ffb2af',
  },
};

export const sidebarText: SxProps<Theme> = {
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: 'Comic Sans MS, cursive',
  textAlign: 'center',
};
