import { SxProps, Theme } from '@mui/material';

export const cardGridStyle: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 2,
};

export const dataCardStyle: SxProps<Theme> = {
  borderRadius: 8,
  border: '1px solid #e0e0e0',
  padding: 2,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

export const uploadAreaStyle = {
  width: "400px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "2px dashed #90CAF9",
  borderRadius: 9,
  backgroundColor: "#F5F5F5",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#E3F2FD",
  },
};
