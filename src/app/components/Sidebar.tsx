import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import {
  sidebarButton,
  activeButton,
  sidebarText,
} from '../styles/sidebarStyles';
import { usePathname } from 'next/navigation';

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

  const pathname = usePathname();

  return (
    <Box component="nav">
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={pathname === item.href ? activeButton : sidebarButton}
            >
              <ListItemText primary={item.text} sx={sidebarText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
