import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
  TextField,
  Box,
} from '@mui/material';
import {
  dialogContentStyle
} from '../styles/joinTableStyles';
import { textFieldStyle } from '../styles/sharedStyles';
import { buttonContainerStyle } from '../styles/sharedStyles';
import { joinTypes, availableTables } from '../constants/joinOptions';
import { isValidJoin, formatJoin } from '../utils/joinUtils';

interface AddJoinDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddJoinDialog: React.FC<AddJoinDialogProps> = ({ open, onClose }) => {
  const [table1, setTable1] = useState('');
  const [columns1, setColumns1] = useState('');
  const [table2, setTable2] = useState('');
  const [columns2, setColumns2] = useState('');
  const [joinType, setJoinType] = useState('');

  const handleSave = () => {
    const joinData = { table1, table2, joinType };

    if (!isValidJoin(joinData)) {
      alert('Please select both tables and a join type.');
      return;
    }

    const formattedJoin = formatJoin(joinData);
    console.log('Join saved:', formattedJoin);
    {/* Placeholder for actual table join */}
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg" sx={{borderRadius: 8}}>
      <DialogContent sx={dialogContentStyle}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
          <TextField
            select
            label="Table 1"
            value={table1}
            onChange={(e) => setTable1(e.target.value)}
            variant="outlined"
            fullWidth
            sx={textFieldStyle}
          >
            {availableTables.map((table) => (
              <MenuItem key={table} value={table}>
                {table}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Join Type"
            value={joinType}
            onChange={(e) => setJoinType(e.target.value)}
            variant="outlined"
            fullWidth
            sx={textFieldStyle}
          >
            {joinTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Table 2"
            value={table2}
            onChange={(e) => setTable2(e.target.value)}
            variant="outlined"
            fullWidth
            sx={textFieldStyle}
          >
            {availableTables.map((table) => (
              <MenuItem key={table} value={table}>
                {table}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 50, paddingTop: 2 }}>
          <TextField
            select
            label="Columns 1"
            value={columns1}
            onChange={(e) => setColumns1(e.target.value)}
            variant="outlined"
            fullWidth
            sx={textFieldStyle}
          >
            {/* Placeholder for actual column options */}
          </TextField>

          <TextField
            select
            label="Columns 2"
            value={columns2}
            onChange={(e) => setColumns2(e.target.value)}
            variant="outlined"
            fullWidth
            sx={textFieldStyle}
          >
            {/* Placeholder for actual column options */}
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box sx={buttonContainerStyle}>
          <Button onClick={onClose} variant="outlined" color="secondary" sx={{borderRadius: 2}}>
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary" sx={{borderRadius: 2}}>
            Save
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default AddJoinDialog;
