import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { dataCardStyle } from '../styles/dataIntegrationStyles';

interface DataCardProps {
  title: string;
  date: string;
  image: StaticImageData;
  activeSource: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, date, image, activeSource }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{
      ...dataCardStyle, display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Box>
        <Image
          src={image}
          alt={title}
          width={48}
          height={48}
        />
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {date}
        </Typography>
      </Box>
      <Box>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>View Data</MenuItem>
          {activeSource !== "derived" ? <MenuItem onClick={handleClose}>Edit Template</MenuItem> : null}
          <MenuItem onClick={handleClose}>Delete</MenuItem>
          {activeSource === "csv" ? <MenuItem onClick={handleClose}>Edit Template</MenuItem> : null}
        </Menu>
      </Box>
    </Box>
  );
};

export default DataCard;
