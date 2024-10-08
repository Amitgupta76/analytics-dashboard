import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', href: '/dashboard' },
    { text: 'Reports', href: '/reports' },
    { text: 'Analytics', href: '/analytics' },
    { text: 'Alerts', href: '/alerts' },
    { text: 'Metrics', href: '/metrics' },
    { text: 'Data & Integration', href: '/data-integration' },
    { text: 'Users', href: '/users' },
    { text: 'Notifications', href: '/notifications' },
    { text: 'Profile', href: '/profile' },
  ];

  return (
    <Box component="nav" sx={{ width: '200px', bgcolor: '#f5f5f5', p: 2 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
