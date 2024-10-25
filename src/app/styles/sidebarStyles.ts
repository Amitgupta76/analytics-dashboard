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
  background: 'linear-gradient(45deg, #ffcdd2 30%, #ffb2af 90%)',
  '&:hover': {
    background: 'linear-gradient(45deg, #ffb2af 30%, #ffcdd2 90%)',
  },
};

export const sidebarText: SxProps<Theme> = {
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: 'Comic Sans MS, cursive',
  textAlign: 'center',
};
