import { useState } from 'react';

const useJoinDialog = () => {
  const [showJoinDialog, setShowJoinDialog] = useState(false);

  const handleOpen = () => setShowJoinDialog(true);
  const handleClose = () => setShowJoinDialog(false);

  return { showJoinDialog, handleOpen, handleClose };
};

export default useJoinDialog;
