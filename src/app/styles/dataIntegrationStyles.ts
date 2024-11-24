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

export const uploadAreaStyle: SxProps<Theme> = {
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

export const tableContainerStyle: SxProps<Theme> = {
  marginTop: 2,
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "90%",
  overflowX: "auto",
};

export const tableStyle: SxProps<Theme> = {
  "& th": {
    backgroundColor: "#f5f5f5",
    color: "#424242",
    fontWeight: "bold",
    textAlign: "center",
    padding: "8px",
    fontSize: "0.8rem",
  },
  "& td": {
    textAlign: "center",
    fontSize: "0.75rem",
    padding: "6px",
  },
};

export const headerCellStyle: SxProps<Theme> = {
  fontWeight: "bold",
  fontSize: "0.85rem",
  color: "#424242",
  textAlign: "center",
  padding: "6px",
};

export const fieldLabelCellStyle: SxProps<Theme> = {
  backgroundColor: "#fafafa",
  fontWeight: "bold",
  padding: "6px",
  fontSize: "0.8rem",
};

export const switchContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
};

export const selectStyle: SxProps<Theme> = {
  minWidth: "100px",
  fontSize: "0.75rem",
  padding: "4px 8px",
  "& .MuiSelect-select": {
    padding: "4px 8px",
  },
};

export const menuItemStyle: SxProps<Theme> = {
  fontSize: "0.75rem",
  padding: "4px 8px",
};
